<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="big">大号按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">迷你按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">大号按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button size="small" theme="link">迷你按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">大号按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button size="small" theme="text">迷你按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>