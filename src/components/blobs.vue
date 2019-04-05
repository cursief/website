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
        totalBlobs: 5
      };
    },
    mounted() {
      new BlobCanvas(this, this.totalBlobs, 12, 30, 400);
    }
  }

  class Blob {
    constructor(viewModel, blobComplexity, blobSize, index)
    {
      this.points = [];
      this.blobComplexity = blobComplexity;
      this.blobSize = blobSize;
      this.viewModel = viewModel;

      const position = {
        x: ((index + .5) / viewModel.totalBlobs) * viewModel.canvas.getAttribute('width'),
        y: Math.random() * viewModel.canvas.getAttribute('height')
      };

      this.centerPoint = new Point(viewModel, {
        position,
        hidden: true
      });

      this.radius = blobSize * .5 + (Math.random() * blobSize * 2);
      this.slice = 2 * Math.PI / this.blobComplexity;

      // const radius = blobSize;
      let pointIndex = this.blobComplexity;

      while (pointIndex > 0) {
        // const pointRadius = radius;
        this.points.push(this.createBlobPoint(pointIndex));
        pointIndex--;
      }

      this.blobPath = document.createElementNS(viewModel.svgNamespace, 'path');
      // this.blobPath.setAttribute('fill', '#4735E2');
      viewModel.canvas.appendChild(this.blobPath);
    }

    createBlobPoint(pointIndex)
    {
      const angle = pointIndex * this.slice;
      const pointRadius = this.radius + (Math.random() - Math.random()) * this.blobSize;

      const position = {
        x: this.centerPoint.x + pointRadius * Math.cos(angle),
        y: this.centerPoint.y + pointRadius * Math.sin(angle)
      };

      return {
        position: position,
        anchor: {
          x: position.x,
          y: position.y
        },
        velocity: {
          x: 0,
          y: 0
        },
        randomSeed: Math.random() * 1000,
        randomSeed2: 15 + Math.random() * 5,
        randomSeed3: 15 + Math.random() * 5,
        randomSeed4: Math.random() * .5 + .5,
        randomSeed5: Math.random() * .5 + .5,
        object: new Point(this.viewModel, {
          position,
          hidden: true
        })
      };
    }
  }

  class Point {
    constructor(viewModel, props)
    {
      this.utils = viewModel.utils;
      this.x = props.position.x;
      this.y = props.position.y;
      this.hidden = props.hidden || false;
      this.body = document.createElementNS(viewModel.svgNamespace, 'circle');

      if (!this.hidden) {
        viewModel.canvas.appendChild(this.body);
      }
    }

    draw()
    {
      if (!this.hidden) {
        this.utils.setProperties(this.body, {
          cx: this.x,
          cy: this.y,
          r: 2,
          fill: '#202020'
        });
      }
    }
  }

  class BlobCanvas
  {
    constructor(viewModel, blobCount = 10, blobComplexity = 5, blobSize = 20, mouseRadius = 200)
    {
      this.time = 0;
      this.blobs = [];
      this.blobCount = blobCount;
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

      this.fpsInterval = 33.333;
      this.previousTime = window.performance.now();

      this.canvas = document.createElementNS(viewModel.svgNamespace, 'svg');
      this.animationFrameBound = this.animationFrame.bind(this);

      viewModel.$el.appendChild(this.canvas);
      viewModel.canvas = this.canvas;

      this.createBlobs();

      // Start animation
      this.animationFrameBound();

      // Start mousemove listener
      window.addEventListener('mousemove', this.mouseHandler.bind(this));
      window.addEventListener('resize', this.resizeHandler.bind(this));
    }

    createBlobs()
    {
      this.viewModel.utils.setProperties(this.canvas, {
        xmlns: this.viewModel.svgNamespace,
        width: this.viewModel.$parent.$refs.blobsParent.clientWidth,
        height: this.viewModel.$parent.$refs.blobsParent.clientHeight,
        style: 'transform: translate3d(0, 0, 0)'
      });

      let blobCount = this.blobCount;
      const blobSize = this.blobSize + window.innerWidth * .02;

      while (blobCount > 0) {
        const blob = new Blob(this.viewModel, Math.max(3, Math.round(this.blobComplexity * .5 + this.blobComplexity * .5 * Math.random())), blobSize, this.blobs.length);
        this.blobs.push(blob);
        blobCount--;
      }
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

    resizeHandler(event)
    {
      this.resizing = true;

      this.canvas.classList.add('is-hidden');

      this.resizeTimeout && clearTimeout(this.resizeTimeout);

      this.resizeTimeout = window.setTimeout(this.timeOutHandler.bind(this), 1000);
    }

    timeOutHandler()
    {
      this.resizeTimeout = window.setTimeout(() => {
        this.destroy();
        this.createBlobs();
        this.canvas.classList.remove('is-hidden');
      }, 500);
    }

    animationFrame(newTime)
    {
      window.requestAnimationFrame(this.animationFrameBound);

      const timeElapsed = (newTime | 0) - this.previousTime;

      if (timeElapsed < this.fpsInterval) {
        return;
      }

      this.previousTime = newTime - (this.previousTime % this.fpsInterval);

      const mouseRect = [
        this.mousePosition.y - this.mouseRadiusHalf, // 0 Top
        this.mousePosition.x + this.mouseRadiusHalf, // 1 Right
        this.mousePosition.y + this.mouseRadiusHalf, // 2 Bottom
        this.mousePosition.x - this.mouseRadiusHalf  // 3 Left
      ];

      this.blobs.forEach(blob => {
        let pointIndex = blob.blobComplexity - 1;

        while (pointIndex > -1) {
          const angle = pointIndex * blob.slice;
          const point = blob.points[pointIndex];
          const currentFrame = point.randomSeed + this.time;

          point.velocity.x += Math.cos(angle) * point.randomSeed4 * Math.cos(currentFrame / point.randomSeed2) * .4;
          point.velocity.y -= Math.sin(angle) * point.randomSeed5 * Math.sin(currentFrame / point.randomSeed3) * .4;

          // Check bluntly if the point is in distance to be affected by the mouse radius
          if (point.position.x > mouseRect[3] && point.position.x < mouseRect[1] && point.position.y > mouseRect[0] && point.position.y < mouseRect[2]) {
            const deltaX = point.position.x - this.mousePosition.x;
            const deltaY = point.position.y - this.mousePosition.y;
            const strength = Math.max(0, this.mouseRadiusHalf - Math.hypot(deltaX, deltaY)) * .02;
            const mouseAngle = Math.atan2(deltaY, deltaX);

            point.velocity.x += Math.cos(mouseAngle) * strength;
            point.velocity.y += Math.sin(mouseAngle) * strength
          }

          point.velocity.x += (point.anchor.x - point.position.x) * .02;
          point.velocity.y += (point.anchor.y - point.position.y) * .02;

          point.position.x += point.velocity.x;
          point.position.y += point.velocity.y;

          point.velocity.x *= .7;
          point.velocity.y *= .7;

          point.object.x = point.position.x;
          point.object.y = point.position.y;

          point.object.draw();

          pointIndex--;
        }

        // Draw body
        let pathParts = '';
        pointIndex = 0;

        // Move to first point
        const lastPoint = blob.points[blob.blobComplexity - 1].position;
        const firstPoint = blob.points[0].position;

        const startPoint = {
          x: (lastPoint.x + firstPoint.x) / 2,
          y: (lastPoint.y + firstPoint.y) / 2
        };

        pathParts = pathParts.concat(`M${startPoint.x}, ${startPoint.y}`);

        const blobComplexityMinusOne = blob.blobComplexity - 1;

        // Create continuous bezier curve parts
        while (pointIndex < blobComplexityMinusOne) {
          const currentPoint = blob.points[pointIndex].position;
          const nextPoint = blob.points[pointIndex + 1].position;

          const controlPoint = {
            x: (currentPoint.x + nextPoint.x) / 2,
            y: (currentPoint.y + nextPoint.y) / 2
          };

          pathParts = pathParts.concat(` Q${currentPoint.x}, ${currentPoint.y}`);
          pathParts = pathParts.concat(` ${controlPoint.x}, ${controlPoint.y}`);

          pointIndex++;
        }

        // Add last curve
        const currentPoint = blob.points[blobComplexityMinusOne].position;

        const endPoint = {
          x: (currentPoint.x + firstPoint.x) / 2,
          y: (currentPoint.y + firstPoint.y) / 2
        };

        pathParts = pathParts.concat(` Q${currentPoint.x}, ${currentPoint.y}`);
        pathParts = pathParts.concat(` ${endPoint.x}, ${endPoint.y}`);

        blob.blobPath.setAttribute('d', pathParts);
      });

      this.time++;
    }

    destroy()
    {
      this.canvas.querySelectorAll('path').forEach(path => {
        this.canvas.removeChild(path);
      });

      this.blobs = [];
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

    path {
      fill: #4735E2;
    }

    path:first-child {
      fill: #F0834A;
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
