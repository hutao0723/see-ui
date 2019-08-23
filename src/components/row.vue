<template>
    <div class="s-row" :style="{marginLeft:`${-gutter/2}px`,marginRight:`${-gutter/2}px`,}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'s-row',
    provide(){
        return {
            gutter:this.gutter
        }
    },
    props:{
        gutter:{
            type:[String,Number]
        }
    },
}
</script>

<style lang="less" scoped>
    .s-row{
        margin-bottom: 10px;
        display: flex;
        flex-wrap: nowrap;
    }
</style>