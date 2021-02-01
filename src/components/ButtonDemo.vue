<template>
  <h1>Button</h1>
  <div>
    <Demo :component="Button1Demo" title="自定义按钮" />
    <Demo :component="Button2Demo" title="按钮尺寸" />
    <Demo :component="Button3Demo" title="按钮类型" />
    <Demo :component="Button4Demo" title="禁用按钮" />
    <Demo :component="Button5Demo" title="加载按钮" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>