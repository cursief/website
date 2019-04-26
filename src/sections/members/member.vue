<template>
  <div class="member">
    <div class="container">
      <div class="member__box">
        <div class="member__title">{{member.title.rendered}}</div>
        <div class="member__labels" v-if="member.tags">
          <member-tag v-for="tag in member.tags" :key="tag.id" :tagName="tag.name" :tagSlug="tag.slug" />
        </div>
        <div class="member__description" v-html="member.biography"></div>
        <div class="member__meta">
          <a v-bind:href="member.portfolio_url" class="button button--secondary">
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M3.939 6.994l.783.784L7.5 5 4.722 2.222l-.783.784 1.433 1.438H0v1.112h5.372L3.94 6.994zM8.889 0H1.11C.494 0 0 .5 0 1.111v2.222h1.111V1.111H8.89V8.89H1.11V6.667H0v2.222A1.11 1.11 0 0 0 1.111 10H8.89C9.5 10 10 9.5 10 8.889V1.11C10 .5 9.5 0 8.889 0z" fill="#FFF" fill-rule="nonzero"/></svg>
            <span>Visit portfolio</span>
          </a>
          <transition name="fade">
	          <a href="#" class="button button--primary" v-if="teamSelection != member.id" @click.prevent="addToStack(member.id)">
	            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M10 5.714H5.714V10H4.286V5.714H0V4.286h4.286V0h1.428v4.286H10z" fill="#FFF" fill-rule="nonzero"/></svg>
	            <span>Add to stack</span>
	          </a>
	        </transition>
        </div>
      </div>
      <members-media :mediaId="member.featured_media" v-if="member.featured_media"/>
    </div>
  </div>
</template>

<script>
	import { EventBus } from '@/event-bus.js';
  import MemberTag from '@/sections/members/member-tag.vue';
  import MembersMedia from '@/sections/members/members-media.vue';

  export default {
    name: 'member',

    components: {
      MemberTag,
      MembersMedia
    },

    props: {
      member: Object,
      index: Number,
      teamSelection: null
    },

    mounted() {
      var delay = this.index ? this.index * 1200 : 600;

      setTimeout(function () {
        this.$el.classList.add('is-visible');
      }.bind(this), delay)
    },

    methods: {

    	addToStack(memberId) {
    		EventBus.$emit('addToStack', memberId);
    	}
    }
  }

</script>

<style lang="scss" scoped>
  @import './src/assets/scss/variables.scss';
  @import './src/assets/scss/animations.scss';
  @import './src/assets/scss/layout/grid.scss';

  .member {
    position: relative;
    width: 100%;
    color: $cl-primary;
    padding-left: 3rem;
    padding-right: 3rem;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      background: {
        repeat: no-repeat;
        size: 100% 100%;
      };
    }

    &:nth-child(1) {
      z-index: 100;
      padding-top: 10rem;
      padding-bottom: 50rem;
      margin-top: -4rem;
      background: {
        image: url("data:image/svg+xml,%3Csvg width='1440' height='917' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='52.511%25' y1='40.976%25' x2='65.054%25' y2='56.708%25' id='a'%3E%3Cstop stop-color='%23FFFFFF' offset='0%25'/%3E%3Cstop stop-color='%23FFFFFF' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M282 161.31C572.242 30.28 877.236-20.925 1196.98 7.695c319.745 28.62 540.87 84.987 663.375 169.101L1722 856.068c-100.779 85.84-216.755 80.982-347.93-14.574C1177.31 698.16 1045.102 698.16 787.488 698.16c-171.742 0-340.238 52.636-505.488 157.908V161.31z' transform='translate(-282)' fill='url(%23a)' fill-rule='evenodd'/%3E%3C/svg%3E");
        size: cover;
        repeat: no-repeat;
        position: top center;
      };
      
      @include md('+') {
        margin-top: -22rem;
      }
      
      .member__box {

        &:before {
          top: 0;
          left: -30%;
          width: 17rem;
          height: 17rem;
          background-image: url("data:image/svg+xml,%3Csvg width='169' height='172' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='67.875%25' y1='22.785%25' x2='26.699%25' y2='94.64%25' id='c'%3E%3Cstop stop-color='%23F0834A' offset='0%25'/%3E%3Cstop stop-color='%23F0834A' stop-opacity='.229' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath d='M714.18 322.366a30.7 30.7 0 0 0-2.1-12.95 66.593 66.593 0 0 0-6.65-12.8 39.215 39.215 0 0 0-5.8-6.85c-3.7-3.5-8.033-5.683-13-6.55-4.8-.7-9.216.3-13.25 3-3.966 2.634-6.866 6.317-8.7 11.05a72.047 72.047 0 0 1-6.25 12.4 62.132 62.132 0 0 1-7.9 10.3c-3.3 3.534-6.85 6.85-10.65 9.95a29.748 29.748 0 0 0-8.4 10.75c-2.1 4.6-2.866 8.9-2.3 12.9.534 3.967 2.084 7.467 4.65 10.5 2.534 3.034 5.8 4.884 9.8 5.55 4 .634 7.917.817 11.75.55 3.8-.3 8.034-.966 12.7-2a57.022 57.022 0 0 0 13.3-4.75c4.2-2.166 8.217-4.583 12.05-7.25 3.9-2.633 7.417-5.7 10.55-9.2 3.067-3.4 5.467-7.2 7.2-11.4a40.5 40.5 0 0 0 3-13.2z' id='b'/%3E%3Cfilter x='-90.3%25' y='-63%25' width='280.7%25' height='276.4%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dy='22' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='22' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3Cfilter x='-76.9%25' y='-49.8%25' width='253.7%25' height='250.1%25' filterUnits='objectBoundingBox' id='d'%3E%3CfeGaussianBlur stdDeviation='11.5' in='SourceAlpha' result='shadowBlurInner1'/%3E%3CfeOffset dx='-20' dy='-9' in='shadowBlurInner1' result='shadowOffsetInner1'/%3E%3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0' in='shadowInnerInner1'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='translate(-587 -263)' fill-rule='nonzero' fill='none'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='url(%23c)' xlink:href='%23b'/%3E%3Cuse fill='%23000' filter='url(%23d)' xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E");
        }

        &:after {
          z-index: 300;
          top: 50%;
          left: -70%;
          width: 22rem;
          height: 26rem;
          background-image: url("data:image/svg+xml,%3Csvg width='223' height='266' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='.306%25' x2='50%25' y2='100%25' id='c'%3E%3Cstop stop-color='%230076FF' offset='.077%25'/%3E%3Cstop stop-color='%239AC9FF' stop-opacity='.839' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath d='M470.285 586.093c-8.577-8.048-18.545-11.717-29.902-11.007-12.152 1.105-23.39 5.524-33.715 13.256-10.246 7.733-19.578 16.176-27.997 25.328-8.419 9.153-15.726 19.687-21.92 31.601-6.99 13.335-12.232 27.696-15.727 43.082-2.938 12.94-4.606 25.762-5.003 38.465-.318 15.466 3.018 28.564 10.007 39.295 7.148 10.81 16.163 18.384 27.044 22.724 10.88 4.34 25.613 5.286 44.198 2.84 18.506-2.367 33.994-9.902 46.463-22.606 12.549-12.86 19.538-24.933 20.968-36.216 1.509-11.363-.239-22.961-5.242-34.797-5.083-12.072-3.852-25.13 3.693-39.176 7.545-14.045 9.65-27.734 6.314-41.07-3.018-7.968-6.632-15.07-10.841-21.303-2.462-4.024-5.242-7.496-8.34-10.416z' id='b'/%3E%3Cfilter x='-35.5%25' y='-15.1%25' width='158.1%25' height='141.3%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dx='-10' dy='12' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='13' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='rotate(-47 -393.206 762.575)' fill-rule='nonzero' fill='none'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='url(%23c)' xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E");
        }
      }
      
      .member__media {
        transform: translate3d(0, 0, 0);
        mask-image: url("data:image/svg+xml,%3Csvg width='592' height='534' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cellipse id='a' cx='398' cy='377' rx='229' ry='325'/%3E%3C/defs%3E%3Cuse fill='%23D8D8D8' transform='rotate(-54 239.056 422.093)' xlink:href='%23a' fill-rule='evenodd'/%3E%3C/svg%3E");
        
        @include md('+') {
          transform: translate3d(-10rem, -10rem, 0);
        }
      }
    }

    &:nth-child(2) {
      z-index: 200;
      padding-bottom: 10rem;
      margin-top: -20rem;
      background: {
        color: #F8F7FD;
        size: cover;
        repeat: no-repeat;
        position: top center;
      };
      
      .member__media {
        order: 3;
        transform: translate3d(0, 0, 0);
        mask-image: url("data:image/svg+xml,%0A%3Csvg width='584px' height='546px' viewBox='0 0 584 546' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M425.902344,545.210937 C584.684209,545.210937 584,460.296584 584,304 C584,147.703416 370.179688,-65.9765625 296.5,21 C222.820312,107.976562 -50.3710938,146.371094 9,304 C68.3710937,461.628906 267.120478,545.210937 425.902344,545.210937 Z' id='path-1'%3E%3C/path%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Desktop-HD' transform='translate(-691.000000, -3262.000000)'%3E%3Cg id='Talent' transform='translate(-202.000000, 2411.000000)'%3E%3Cg id='user-2-image' transform='translate(844.000000, 781.000000)'%3E%3Cg id='Group-3' transform='translate(49.000000, 70.000000)'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Oval-2' fill='%23D8D8D8' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        
        @include md('+') {
          transform: translate3d(10rem, -12rem, 0);
        }
      }

      .member__box {

        &:before {
          z-index: 300;
          top: -50%;
          right: -50%;
          width: 19rem;
          height: 15rem;
          background-image: url("data:image/svg+xml,%3Csvg width='188' height='154' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='42.252%25' y1='7.066%25' x2='46.033%25' y2='69.938%25' id='c'%3E%3Cstop stop-color='%234735E2' offset='0%25'/%3E%3Cstop stop-color='%230076FF' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath d='M264.645 19.848c-1.652-5.311-4.361-9.655-8.126-13.03-2.344-2.135-4.898-3.475-7.665-4.021-4.187-.745-8.163.1-11.928 2.532a17.32 17.32 0 0 0-5.533 5.286c-2.92 4.567-4.418 9.829-4.495 15.786a99.161 99.161 0 0 0 .288 8.935 35.696 35.696 0 0 0 1.153 7c.96 3.524 13.918-28.948 11.228-24.58a98.698 98.698 0 0 1-4.264 6.627 509.54 509.54 0 0 1-8.01 11.095 619.23 619.23 0 0 0-8.875 12.062 168.776 168.776 0 0 0-7.492 11.17c-2.689 4.268-4.514 9.058-5.474 14.37-.922 5.361-.884 10.673.115 15.934.96 5.163 2.843 9.58 5.647 13.254 3.343 4.319 7.3 7.272 11.872 8.86 4.533 1.639 9.067 1.987 13.6 1.043 4.188-.893 7.914-3.102 11.18-6.627 3.112-3.375 5.743-7.272 7.895-11.69 2.19-4.567 3.842-9.407 4.956-14.52a90.939 90.939 0 0 0 1.383-7.743 110.67 110.67 0 0 0 1.095-11.765c.23-5.61-.26-12.924.585-15.555 1.69-5.063 2.44-10.4 2.248-16.009-.077-2.928-.538-5.733-1.383-8.414z' id='b'/%3E%3Cfilter x='-109.4%25' y='-49.9%25' width='351.3%25' height='239.8%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dx='10' dy='22' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='22' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='rotate(53 175.94 -76.76)' fill-rule='nonzero' fill='none'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='url(%23c)' xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E");
        }

        &:after {
          z-index: 300;
          top: -40%;
          right: -40%;
          width: 38rem;
          height: 19rem;
          background-image: url("data:image/svg+xml,%3Csvg width='388' height='192' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='54.784%25' y1='22.785%25' x2='43.764%25' y2='94.64%25' id='c'%3E%3Cstop stop-color='%23F0834A' offset='0%25'/%3E%3Cstop stop-color='%23F0834A' stop-opacity='.229' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath d='M234.563 51.24c-3.251-8.089-8.58-14.704-15.99-19.844-4.611-3.251-9.638-5.292-15.081-6.124-8.24-1.134-16.065.151-23.474 3.856-4.385 2.04-8.013 4.725-10.886 8.051-5.745 6.955-8.694 14.968-8.845 24.04a117.04 117.04 0 0 0 .567 13.608 43.26 43.26 0 0 0 2.268 10.66 204.268 204.268 0 0 0 6.35 15.875c3.553 7.787 5.632 15.99 6.237 24.608.605 8.24-.718 16.178-3.969 23.813a186.527 186.527 0 0 1-1.587 3.742c-3.63 7.863-8.09 15.12-13.381 21.773a152.18 152.18 0 0 1-8.392 10.092 818.675 818.675 0 0 1-15.762 16.896 1001.867 1001.867 0 0 0-17.463 18.37 264.062 264.062 0 0 0-14.742 17.01c-5.292 6.502-8.883 13.797-10.773 21.886-1.814 8.165-1.739 16.254.227 24.268 1.89 7.862 5.594 14.59 11.113 20.184 6.577 6.577 14.364 11.076 23.36 13.495 8.92 2.494 17.841 3.024 26.762 1.587 8.24-1.36 15.573-4.725 21.999-10.092a75.875 75.875 0 0 0 15.535-17.804c4.31-6.955 7.56-14.326 9.753-22.112a110.56 110.56 0 0 0 2.721-11.794 131.63 131.63 0 0 0 2.155-17.916c.453-8.543.491-17.086.113-25.628a665.564 665.564 0 0 0-1.587-24.494c-.605-8.014-.19-16.065 1.247-24.154a120.754 120.754 0 0 1 7.257-24.948c3.024-7.56 6.2-15.082 9.526-22.566a3786.88 3786.88 0 0 1 7.71-17.123 277.996 277.996 0 0 0 5.33-12.02c3.327-7.711 4.801-15.838 4.423-24.38a37.018 37.018 0 0 0-2.721-12.815z' id='b'/%3E%3Cfilter x='-45%25' y='-18.6%25' width='203.3%25' height='152.2%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset dx='10' dy='22' in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='22' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='rotate(-107 151.469 141.324)' fill-rule='nonzero' fill='none'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='url(%23c)' xlink:href='%23b'/%3E%3C/g%3E%3C/svg%3E");
        }
      }

      &:before {
        top: -19.9rem; // Subpixel fix Chrome
        height: 20rem;
        background: {
          size: 100% 100%;
          image: url("data:image/svg+xml,%3Csvg width='1440' height='292' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='a'%3E%3Cstop stop-color='%23F8F7FD' offset='0%25'/%3E%3Cstop stop-color='%23F8F7FD' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M1 191.33C0 161.612 186.781 64.758 415.543 19c219.407-43.887 446.925-20.838 756.77 172.33 52.055 32.453 142.284 24.681 270.687-23.314v122.5L3 291.5c-.208-35.778-1.792-93.983-2-100.17z' transform='translate(-3)' fill='url(%23a)' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      }
    }

    .container {
      z-index: 100;
      display: flex;
      position: relative;
    }
  }

  .member__box {
    order: 2;
    position: relative;
    opacity: 0;
    max-width: 60%;
    transition: opacity 1000ms;
    
    &:before,
    &:after {
      content: '';
      position: absolute;
    }

    .member.is-visible & {
      opacity: 1;
    }

    .member:nth-child(odd) & {
      margin-left: auto;
    }

    .member:nth-child(even) & {

      .member__media {
        left: auto;
        right: 0;
      }
    }
  }

  .member__title {
    margin-bottom: 2rem;
    font-family: $font-secondary;
    font-size: 3.8rem;
    font-weight: 700;
  }

  .member__labels {
    margin-bottom: 3rem;
  }

  .member__description {
    line-height: 1.6;
  }

  .member__media {
    order: 1;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    mask-size: contain;
    mask-repeat: no-repeat;
  }

  .member__meta {
    display: flex;
    margin-top: 3rem;

    .button {
      margin: 0 1rem 0 0;
    }
  }
</style>
