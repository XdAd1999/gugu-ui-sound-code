<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="标签1">内容1</Tab>
    <Tab title="标签2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("标签1");
    return {
      x,
    };
  },
};
</script>