<template>
  <div class="banner" ref="blobsParent">
    <blobs />
    <div class="intro">
      <transition name="fade-up" appear>
        <h1>We help you make the best digital products.</h1>
      </transition>

      <transition name="fade-up-1" appear>
        <div class="container container--small">
          <p>We design, build and launch products for startups, established companies and ourselves. We help businesses grow through effective design and strategy.<br>
          Let’s make great things together!</p>
        </div>
      </transition>

      <transition name="fade-up-1" appear>
        <div class="banner__scroll">
          <span>Scroll down</span>
          <svg width="30" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.912.36L15.64 13.088a1.333 1.333 0 0 1-1.886 1.886L1.027 2.245A1.333 1.333 0 0 1 2.913.36z"/><path d="M26.809.36L14.08 13.088a1.333 1.333 0 0 0 1.886 1.886L28.693 2.245A1.333 1.333 0 1 0 26.808.36z"/></g></svg>
        </div>
      </transition>
    </div>

    <transition name="fade-up-1" appear>
      <div class="banner__bottom-blob"></div>
    </transition>
  </div>
</template>

<script>
  import Blobs from '@/components/blobs.vue'

  export default {
    name: 'banner',
    data() {
      return {
        rootElement: this.$el
      }
    },
    components: {
      Blobs
    }
  }
</script>

<style scoped lang="scss">
  @import 'src/assets/scss/variables.scss';
  @import 'src/assets/scss/animations.scss';

  @keyframes arrowDown {
    from {
      transform: translate3d(0, 0, 0);
    } to {
      transform: translate3d(0, 1rem, 0);
    }
  }

  .banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 6rem);
    min-height: 120rem;
    padding-bottom: 20rem;
    background-position: left bottom;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3Csvg width='1440' height='801' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='40.373%25' y1='48.113%25' x2='54.713%25' y2='63.767%25' id='b'%3E%3Cstop stop-color='%234735E2' offset='0%25'/%3E%3Cstop stop-color='%233D3398' offset='100%25'/%3E%3C/linearGradient%3E%3Cellipse id='a' cx='1458' cy='684' rx='1458' ry='684'/%3E%3ClinearGradient x1='17.923%25' y1='16.854%25' x2='34.379%25' y2='83.467%25' id='f'%3E%3Cstop stop-color='%230076FF' stop-opacity='.12' offset='0%25'/%3E%3Cstop stop-color='%234735E2' stop-opacity='.5' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath d='M1197.202 775.659c-16.91-10.717-34.798-19.27-53.662-25.659l-.54 623h499a930.757 930.757 0 0 0-17.656-35.938c-7.145-13.705-17.888-23.34-32.229-28.905-14.032-5.41-28.681-8.27-43.947-8.578a426.854 426.854 0 0 0-61.219 3.168 341.353 341.353 0 0 0-51.195 9.12c-15.01 3.864-29.761 3.35-44.256-1.546-16.192-5.616-25.135-17.054-26.832-34.315a978.48 978.48 0 0 0-4.394-36.942c-.669-4.74-2.365-9.043-5.09-12.907-9.765-13.602-23.36-20.455-40.786-20.558-17.27-.103-33.436-4.07-48.496-11.902-7.71-4.019-13.313-9.97-16.809-17.853-4.112-9.12-4.754-18.6-1.927-28.441a610.847 610.847 0 0 1 14.11-42.739c4.985-13.5 3.906-26.277-3.239-38.334-9.355-15.869-9.098-31.893.771-48.071a250.496 250.496 0 0 0 19.661-39.957c7.196-18.703 10.229-38.076 9.098-58.119-1.13-20.043-5.654-39.158-13.57-57.346-7.864-17.93-18.376-34.212-31.534-48.844-13.21-14.788-28.296-27.566-45.259-38.334z' id='e'/%3E%3Cfilter x='-15%25' y='-12%25' width='130.1%25' height='124.1%25' filterUnits='objectBoundingBox' id='d'%3E%3CfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='25' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3ClinearGradient x1='78.172%25' y1='64.592%25' x2='60.023%25' y2='37.621%25' id='i'%3E%3Cstop stop-color='%232D247F' offset='0%25'/%3E%3Cstop stop-color='%232D247F' stop-opacity='.171' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath d='M2638 666c-1.058 3.569-2.843 6.84-5.355 9.814a124.774 124.774 0 0 1-2.876 3.173c-8.33 8.658-18.378 14.936-30.146 18.836-18.576 5.882-31.666 17.58-39.269 35.094-6.412 14.936-6.478 30.038-.198 45.305 4.363 10.575 4.231 21.116-.397 31.625-3.503 7.864-7.933 14.473-13.288 19.827-9.784 9.781-22.642 15.366-38.575 16.754a2164.3 2164.3 0 0 1-64.853 2.776 1061.629 1061.629 0 0 0-64.655 4.362 866.65 866.65 0 0 0-4.066.396 2842.667 2842.667 0 0 0-62.077 7.733c-21.618 3.007-41.054 6.576-60.093 11.004-19.7 4.494-37.617 11.434-53.747 20.818-16.197 9.385-26.576 19.2-31.138 29.444-4.561 10.178-4.66 22.339-.297 36.482 4.297 14.077 14.213 25.148 29.749 33.21 15.47 8.064 30.642 13.814 45.516 17.25a114.943 114.943 0 0 1 15.272 4.461c9.453 3.503 18.709 8.196 27.766 14.078 13.816 8.988 22.146 17.382 24.989 25.18 2.843 8.163 4.132 15.07 4.066 21.414-.132 6.477-2.248 14.375-6.347 23.693-2.578 5.816-6.61 11.401-12.098 16.754-3.305 3.305-7.173 6.51-11.602 9.617-11.635 8.26-24.295 15.3-37.98 21.116-13.75 5.75-35.732 11.665-65.944 17.745-10.181 1.983-19.7 4.197-28.56 6.642-17.519 4.692-32.426 10.178-44.723 16.457-18.643 9.385-27.7 19.1-27.17 29.146.462 9.98 8.263 17.778 23.402 23.396 15.073 5.551 24.692 11.434 28.857 17.646 4.099 6.279 3.57 13.086-1.587 20.422-5.156 7.336-19.138 13.714-41.946 19.133-22.808 5.354-44.26 11.963-64.358 19.828-30.278 12.094-58.275 28.22-83.992 48.378-3.438 2.71-6.082 6.08-7.933 10.112a26.15 26.15 0 0 0-.893 1.983c-1.454 3.833-1.818 7.798-1.09 11.896H2638V666z' id='h'/%3E%3Cfilter x='-8.5%25' y='-8.3%25' width='116.9%25' height='116.6%25' filterUnits='objectBoundingBox' id='g'%3E%3CfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='20' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3ClinearGradient x1='50%25' y1='45.52%25' x2='84.366%25' y2='51.626%25' id='j'%3E%3Cstop stop-color='%232D247F' offset='0%25'/%3E%3Cstop stop-color='%235039CC' offset='100%25'/%3E%3C/linearGradient%3E%3ClinearGradient x1='24.958%25' y1='37.497%25' x2='37.177%25' y2='55.806%25' id='k'%3E%3Cstop stop-color='%230076FF' stop-opacity='.5' offset='0%25'/%3E%3Cstop stop-color='%230076FF' stop-opacity='.099' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(-1143 -567)' fill='none' fill-rule='evenodd'%3E%3Cmask id='c' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='url(%23b)' xlink:href='%23a'/%3E%3Cg fill-rule='nonzero' mask='url(%23c)'%3E%3Cuse fill='%23000' filter='url(%23d)' xlink:href='%23e'/%3E%3Cuse fill='url(%23f)' xlink:href='%23e'/%3E%3C/g%3E%3Cg fill-rule='nonzero' mask='url(%23c)'%3E%3Cuse fill='%23000' filter='url(%23g)' xlink:href='%23h'/%3E%3Cuse fill='url(%23i)' xlink:href='%23h'/%3E%3C/g%3E%3Cpath d='M2129.386 698.82c34.669-.834 68.827-3.4 102.475-7.7a1248.986 1248.986 0 0 1 69.489-6.598c25.056-1.733 49.93-1.4 74.626 1 23.073 2.3 44.103 7.215 63.09 14.747 16.223 6.4 28.78 14.615 37.673 24.646 9.674 10.965 17.815 22.313 24.425 34.045 4.807 8.532 10.545 16.88 17.214 25.046 10.034 11.998 24.425 22.03 43.172 30.095 6.549 2.8 13.699 5.1 21.45 6.899V507H1534v63.99c12.738 9.098 28.42 16.497 47.047 22.196 20.128 6.033 41.038 11.149 62.729 15.348 17.485 3.366 35.45 5.116 53.896 5.249 23.614.133 49.45-1.233 77.51-4.1 28-2.899 47.738-3.865 59.215-2.899a935.938 935.938 0 0 1 33.617 3.35c10.936 1.233 25.927 4.282 44.974 9.148 18.987 4.866 37.914 11.115 56.781 18.747 9.674 3.9 18.807 7.932 27.399 12.098 8.171 3.933 15.862 7.982 23.073 12.148a1468.282 1468.282 0 0 0 35.69 19.947c9.674 5.233 20.7 9.282 33.077 12.148 8.052 1.867 16.494 3.2 25.326 4 4.927.366 9.944.516 15.052.45z' fill='url(%23j)' fill-rule='nonzero' opacity='.364' mask='url(%23c)'/%3E%3Cpath d='M2331.3 698.85a313.093 313.093 0 0 0 56.85-7.7 396.155 396.155 0 0 1 38.55-6.6c13.9-1.733 27.7-1.4 41.4 1 12.8 2.3 24.467 7.217 35 14.75 9 6.4 15.967 14.617 20.9 24.65a240.643 240.643 0 0 1 13.55 34.05 218.758 218.758 0 0 0 9.55 25.05c5.567 12 13.55 22.033 23.95 30.1 3.633 2.8 7.6 5.1 11.9 6.9V507H2001v64c7.067 9.1 15.767 16.5 26.1 22.2a238.26 238.26 0 0 0 34.8 15.35 94.36 94.36 0 0 0 29.9 5.25c13.1.133 27.433-1.233 43-4.1 15.533-2.9 26.483-3.867 32.85-2.9 6.333.933 12.55 2.05 18.65 3.35 6.067 1.233 14.383 4.283 24.95 9.15 10.533 4.867 21.033 11.117 31.5 18.75a216.141 216.141 0 0 1 15.2 12.1c4.533 3.933 8.8 7.983 12.8 12.15 6.5 6.767 13.1 13.417 19.8 19.95 5.367 5.233 11.483 9.283 18.35 12.15a62.362 62.362 0 0 0 14.05 4c2.733.367 5.517.517 8.35.45z' fill='url(%23k)' fill-rule='nonzero' mask='url(%23c)'/%3E%3C/g%3E%3C/svg%3E");
  }

  .banner__bottom-blob {
    z-index: 300;
    position: absolute;
    left: calc(50% - 8rem);
    bottom: 20rem;
    width: 29.5rem;
    height: 24rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='354' height='291' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='c'%3E%3Cstop stop-color='%2300AEFF' offset='0%25'/%3E%3Cstop stop-color='%230076FF' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath d='M2012.563 1173.24c-3.251-8.089-8.58-14.704-15.99-19.844-4.611-3.251-9.638-5.292-15.081-6.124-8.24-1.134-16.065.151-23.474 3.856-4.385 2.04-8.013 4.725-10.886 8.051-5.745 6.955-8.694 14.968-8.845 24.04a117.04 117.04 0 0 0 .567 13.608 43.26 43.26 0 0 0 2.268 10.66 204.268 204.268 0 0 0 6.35 15.875c3.553 7.787 5.632 15.99 6.237 24.608.605 8.24-.718 16.178-3.969 23.813a186.465 186.465 0 0 1-1.587 3.742c-3.63 7.863-8.09 15.12-13.381 21.773a152.181 152.181 0 0 1-8.392 10.092 818.687 818.687 0 0 1-15.762 16.896 1001.847 1001.847 0 0 0-17.463 18.37 264.064 264.064 0 0 0-14.742 17.01c-5.292 6.502-8.883 13.797-10.773 21.886-1.814 8.165-1.739 16.254.227 24.268 1.89 7.862 5.594 14.59 11.113 20.184 6.577 6.577 14.364 11.076 23.36 13.495 8.92 2.494 17.841 3.024 26.762 1.587 8.24-1.36 15.573-4.725 21.999-10.092a75.875 75.875 0 0 0 15.535-17.804c4.31-6.955 7.56-14.326 9.753-22.112a110.56 110.56 0 0 0 2.721-11.794 131.63 131.63 0 0 0 2.155-17.916 263.43 263.43 0 0 0 .113-25.628 665.552 665.552 0 0 0-1.587-24.494c-.605-8.014-.19-16.065 1.247-24.154a120.754 120.754 0 0 1 7.257-24.948c3.024-7.56 6.2-15.082 9.526-22.566 2.57-5.745 5.14-11.453 7.711-17.123a278.003 278.003 0 0 0 5.33-12.02c3.326-7.711 4.8-15.838 4.422-24.38a37.018 37.018 0 0 0-2.721-12.815z' id='b'/%3E%3Cfilter x='-45%25' y='-18.6%25' width='203.3%25' height='152.2%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dx='10' dy='22' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='22' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='rotate(107 1498.925 75.217)' fill-rule='nonzero' fill='none'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='url(%23c)' xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E");
  }

  .banner__scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate3d(0, 8rem, 0);
    
    span {
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    svg {
      animation: arrowDown 1000ms infinite alternate;
    }
  }

  h1 {
    margin: 0 0 1rem;
    font-size: 5.4rem;
    color: $cl-white;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0 0 1.5rem rgba(0,0,0,0.20);
  }

  .intro {
    position: relative;
    z-index: 2;
    font-size: 1.8rem;
    text-align: center;

    p {
      line-height: 2.8rem;
      text-shadow: 0 0 1.5rem rgba(0,0,0,0.50);
    }

    .button {
      margin: 3rem auto 0;
    }
  }
</style>
