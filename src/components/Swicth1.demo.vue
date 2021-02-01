<demo>
常规用法
</demo>

<template>
  <Swicth v-model:value="bool" />
</template>

<script lang="ts">
import { ref } from "vue";
import Swicth from "../lib/Swicth.vue";
export default {
  components: { Swicth },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>