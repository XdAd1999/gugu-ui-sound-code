<template>
  <div>
    <h1>Swicth 示例</h1>
    <Demo :component="Swicth1Demo" title="常规用法" />
    <Demo :component="Swicth2Demo" title="支持disabled " />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

import Swicth1Demo from "./Swicth1.demo.vue";
import Swicth2Demo from "./Swicth2.demo.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo },
  setup() {
    const bool = ref(false);
    return { bool, Swicth1Demo, Swicth2Demo };
  },
};
</script>

