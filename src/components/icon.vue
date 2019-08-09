<template>
    <i :class="['iconfont',`icon-${name}`]"></i>
</template>

<script>
export default {
    name:'icon' ,
    props:["name"]
}
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_864940_k4v9os5xc5.css');

</style>
