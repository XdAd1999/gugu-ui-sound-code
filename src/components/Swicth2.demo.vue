<demo>
支持 disabled
</demo>

<template>
  <Swicth v-model:value="bool" disabled />
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