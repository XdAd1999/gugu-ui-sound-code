<template>
  <h1>Dialog</h1>
  <Demo :component="Dialog1Demo" title="打开弹窗" />
  <Demo :component="Dialog2Demo" title="一键打开弹窗" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>