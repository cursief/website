<template>
  <img :src="media.source_url">
</template>

<script>
  export default {
    name: 'work-media',

    props: {
      media: {}
    }
  }

</script>