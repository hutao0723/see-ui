<template>
    <div class="s-button-group">
        <slot />
    </div>
</template>

<script>
export default {
    name:'s-button-group',  
    mounted(){
        let nodeList = this.$el.children
        if(nodeList.length != 0){
            for(let item of nodeList){
                if(item.nodeName != "BUTTON"){
                    console.warn(`button-group组件内部应为button元素,不应该是${item.nodeName}`)
                }
            }
        }else{
            console.warn("button-group组件内部组件不能为空")
        }
    }
}
</script>

<style lang="less" >
    @import url("./../assets/style.less");
    .s-button-group{
        display: inline-flex;
        vertical-align: middle;
        font-size: 0;
        .s-button{
            margin-left: -1px;
            border-radius: 0;
            margin-right: 0;
            &:first-child{
                margin-left: 0;
                border-top-left-radius: @border-radius;
                border-bottom-left-radius: @border-radius;
            }
            &:last-child{
                border-top-right-radius: @border-radius;
                border-bottom-right-radius: @border-radius;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>

