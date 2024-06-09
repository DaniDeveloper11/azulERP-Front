<template>
  <svg-icon class="h-10 w-10" type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowRightBoldOutline } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiArrowRightBoldOutline,
    }
  }
}
</script>
