<template>
    <i :class="['iconfont',`icon-${name}`]"></i>
</template>

<script>
export default {
    name:'s-icon' ,
    props:["name"]
}
</script>

<style lang="less" scoped>
    @import url('//at.alicdn.com/t/font_864940_61tflvhpaj7.css');
    @import url("./../assets/style.less");
    .iconfont{
        font-size: @font-size;
    }
</style>
