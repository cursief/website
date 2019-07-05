<template>
  <div class="canvas-holder"></div>
</template>

<script>
  export default {
    name: 'blobs',
    data() {
      return {
        utils: new BlobUtils(),
        svgNamespace: 'http://www.w3.org/2000/svg',
        data: [{"points":[{"anchored":true,"anchor":{"x":-55,"y":-8}},{"anchored":true,"anchor":{"x":-52,"y":680}},{"anchor":{"x":47,"y":598}},{"anchor":{"x":194,"y":550}},{"anchor":{"x":141,"y":406}},{"anchor":{"x":81,"y":242}},{"anchor":{"x":119,"y":79}}],"anchor":{"x":"1.35%","y":"2.55%"}},{"points":[{"anchored":true,"anchor":{"x":145,"y":-45}},{"anchor":{"x":-258,"y":102}},{"anchor":{"x":1,"y":224}},{"anchor":{"x":-354,"y":385}},{"anchored":true,"anchor":{"x":107,"y":455}}],"anchor":{"x":"96.04%","y":"3.73%"}}]
      };
    },
    mounted() {
      new BlobCanvas(this, 12, 30, 500);
    }
  }

  class Blob {
    constructor(viewModel, anchor)
    {
      this.viewModel = viewModel;
      this.utils = this.viewModel.utils;
      this.points = [];

      this.shapeGroup = document.createElementNS(this.viewModel.svgNamespace, 'svg');
      this.shapePath = document.createElementNS(this.viewModel.svgNamespace, 'path');
      this.position = {
        x: 0,
        y: 0
      };
      this.anchor = anchor || {
        x: 0,
        y: 0
      };
    }

    drawPath()
    {
      if (this.points.length < 1) {
        return;
      }

      const pathParts = [];
      let pointIndex = 0;

      // Move to first point
      let startPoint;

      let lastPoint = this.points[this.points.length - 1].position;
      let firstPoint = this.points[0].position;

      if (this.points[this.points.length - 1].anchored) {
        startPoint = lastPoint;
      } else {
        startPoint = {
          x: (lastPoint.x + firstPoint.x) / 2,
          y: (lastPoint.y + firstPoint.y) / 2
        };
      }

      pathParts.push(`M${startPoint.x}, ${startPoint.y}`);

      // Create continuous bezier curve parts
      while (pointIndex < this.points.length - 1) {
        const currentPoint = this.points[pointIndex].position;
        const nextPoint = this.points[pointIndex + 1].position;

        if (this.points[pointIndex].anchored) {
          pathParts.push(`L${currentPoint.x}, ${currentPoint.y}`);
        } else {
          const controlPoint = {
            x: (currentPoint.x + nextPoint.x) / 2,
            y: (currentPoint.y + nextPoint.y) / 2
          };

          pathParts.push(`Q${currentPoint.x}, ${currentPoint.y}`);
          pathParts.push(`${controlPoint.x}, ${controlPoint.y}`);
        }

        pointIndex++;
      }

      // Add last curve
      const currentPoint = this.points[this.points.length - 1].position;
      if (this.points[pointIndex].anchored) {
        pathParts.push(`L${currentPoint.x}, ${currentPoint.y}`);
      } else {
        const endPoint = {
          x: (currentPoint.x + firstPoint.x) / 2,
          y: (currentPoint.y + firstPoint.y) / 2
        };

        pathParts.push(`Q${currentPoint.x}, ${currentPoint.y}`);
        pathParts.push(`${endPoint.x}, ${endPoint.y}`);
      }

      this.utils.setProperties(this.shapePath, {
        d: pathParts.join(' ')
      });
    }

    appendPath()
    {
      this.shapeGroup.appendChild(this.shapePath);

      this.utils.setProperties(this.shapeGroup, {
        x: this.anchor.x,
        y: this.anchor.y
      });

      this.viewModel.canvas.appendChild(this.shapeGroup);
    }

    remove()
    {
      utils.setProperties(this.shapePath, {
        d: ''
      });
    }

    createPoint(position, index = null, anchored = false, shape)
    {
      const point = new Point(this.viewModel, {
        position,
        anchored,
        shape
      });

      this.points.push(point);

      return point;
    }
  }

  class Point {
    constructor(viewModel, props)
    {
      this.viewModel = viewModel;
      this.position = props.position;
      this.anchored = props.anchored;
      this.anchor = {
        x: this.position.x,
        y: this.position.y
      };
      this.velocity = {
        x: 0,
        y: 0
      };
      this.randomSeeds = [
        Math.random() * 1000,
        15 + Math.random() * 5,
        15 + Math.random() * 5,
        Math.random() * .5 + .5,
        Math.random() * .5 + .5
      ];

      this.x = props.position.x;
      this.y = props.position.y;

      this.body = document.createElementNS(this.viewModel.svgNamespace, 'circle');

      props.shape.shapeGroup.appendChild(this.body);

      this.viewModel.utils.setProperties(this.body, {
        r: 1
      });

      this.viewModel.utils.setProperties(this.body, {
        cx: this.x,
        cy: this.y
      });
    }
  }

  class BlobCanvas
  {
    constructor(viewModel, blobCount, blobComplexity = 5, blobSize = 20, mouseRadius = 200, data)
    {
      this.time = 0;
      this.blobs = [];
      this.blobSize = blobSize;
      this.viewModel = viewModel;
      this.blobComplexity = blobComplexity;
      this.mouseRadiusHalf = mouseRadius * .5;
      this.mouseVelocity = {
        x: null,
        y: null
      };
      this.mousePosition = {
        x: null,
        y: null
      };

      this.canvas = document.createElementNS(viewModel.svgNamespace, 'svg');
      this.canvas.innerHTML = `<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>`;
      this.animationFrameBound = this.animationFrame.bind(this);

      this.viewModel.utils.setProperties(this.canvas, {
        xmlns: this.viewModel.svgNamespace,
        width: this.viewModel.$parent.$refs.blobsParent.clientWidth,
        height: this.viewModel.$parent.$refs.blobsParent.clientHeight,
        style: 'transform: translate3d(0, 0, 0)'
      });

      viewModel.$el.appendChild(this.canvas);
      viewModel.canvas = this.canvas;

      this.importBlobs(viewModel);

      this.resizeHandler();

      window.addEventListener('resize', this.resizeHandler.bind(this));

      // Start animation
      this.animationFrameBound();

      // Start mousemove listener
      window.addEventListener('mousemove', this.mouseHandler.bind(this));
    }

    resizeHandler()
    {
      this.viewModel.utils.setProperties(this.canvas, {
        width: window.innerWidth,
        height: window.innerHeight
      });

      this.blobs.forEach(shape => {
        if (shape.points[0]) {
          const shapeRect = shape.points[0].body.getBoundingClientRect();
          shape.position.x = shapeRect.x;
          shape.position.y = shapeRect.y;
        }
      });
    }

    importBlobs(viewModel)
    {
      this.viewModel = viewModel;
      const importData = this.viewModel.data;

      importData.forEach(shape => {
        this.currentShape = new Blob(this.viewModel, shape.anchor);

        this.blobs.push(this.currentShape);

        this.currentShape.appendPath();

        shape.points.forEach(point => {
          this.currentShape.createPoint(point.anchor, null, point.anchored || false, this.currentShape);
        });

        this.currentShape.drawPath();
      });
    }

    mouseHandler(event)
    {
      if (this.mousePosition.x) {
        this.mouseVelocity.x = event.clientX - this.mousePosition.x;
        this.mouseVelocity.y = event.clientY - this.mousePosition.y;
      }

      this.mousePosition.x = event.clientX + window.scrollX;
      this.mousePosition.y = event.clientY + window.scrollY;
    }

    animationFrame(newTime)
    {
      window.requestAnimationFrame(this.animationFrameBound);

      const mouseRect = {
        top: this.mousePosition.y - this.mouseRadiusHalf,
        right: this.mousePosition.x + this.mouseRadiusHalf,
        bottom: this.mousePosition.y + this.mouseRadiusHalf,
        left: this.mousePosition.x - this.mouseRadiusHalf
      };

      this.blobs.forEach(blob => {
        blob.points.forEach(point => {
          if (point.anchored) {
            return;
          }

          const currentFrame = point.randomSeeds[0] + this.time;

          point.velocity.x += point.randomSeeds[3] * Math.cos(currentFrame / point.randomSeeds[1]) * .2;
          point.velocity.y -= point.randomSeeds[4] * Math.sin(currentFrame / point.randomSeeds[2]) * .2;

          const pointCanvasPosition = {
            x: blob.position.x + point.x,
            y: blob.position.y + point.y
          };

          // Check bluntly if the point is in distance to be affected by the mouse radius
          if (pointCanvasPosition.x > mouseRect.left && pointCanvasPosition.x < mouseRect.right && pointCanvasPosition.y > mouseRect.top && pointCanvasPosition.y < mouseRect.bottom) {
            const deltaX = pointCanvasPosition.x - this.mousePosition.x;
            const deltaY = pointCanvasPosition.y - this.mousePosition.y;
            const strength = Math.max(0, this.mouseRadiusHalf - Math.hypot(deltaX, deltaY)) * .01;
            const mouseAngle = Math.atan2(deltaY, deltaX);

            point.velocity.x += Math.cos(mouseAngle) * strength;
            point.velocity.y += Math.sin(mouseAngle) * strength;
          }

          point.velocity.x += (point.anchor.x - point.position.x) * .01;
          point.velocity.y += (point.anchor.y - point.position.y) * .01;

          point.position.x += point.velocity.x;
          point.position.y += point.velocity.y;

          point.velocity.x *= .95;
          point.velocity.y *= .95;

          point.x = point.position.x;
          point.y = point.position.y;
        });

        blob.drawPath();
      });

      this.time++;
    }
  }

  class BlobUtils
  {
    setProperties(element, obj)
    {
      for (let prop in obj) {
        element.setAttribute(prop, obj[prop])
      }
    }
  }
</script>

<style lang="scss">

  .canvas-holder {
    position: absolute;
    top: 0;
    animation: {
      name: fadeIn;
      duration: 2s;
      delay: 2s;
      fill-mode: both;
    };

    svg {
      transition: opacity 1s;

      &.is-hidden {
        opacity: 0;
      }
    }

    svg {
      overflow: visible;
    }

    svg > svg:first-of-type path {
      fill: url(#grad1);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: .5;
    }
  }
</style>
