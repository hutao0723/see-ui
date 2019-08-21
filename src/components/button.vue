<template>
    <button class="s-button" @click="$emit('click')">
        <s-icon :name="icon" :class="['icon',`${iconPosition}`]" v-if="icon && !loading"></s-icon>
        <s-icon name="loading" :class="['loading',`${iconPosition}`]" v-if="loading"></s-icon>
        <span class="conetnt">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    import Icon from "./icon.vue";
    export default {
        name:"s-Button",  
        components:{
            "s-icon":Icon
        },
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator:value=>value =="left" || value == "right"
            },
            loading:{
                type:Boolean,
                default:false,    
            }
        },
    }
</script>

<style lang="less" scoped>
    @import url("./../assets/style.less");
    @keyframes rotate {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }
    .s-button{
        margin: 0 5px;
        outline: none;
        vertical-align: middle;
        font-size: @font-size;
        color: @font-color;
        line-height: 32px;
        border-radius: @border-radius;
        padding: 0 1em;
        border:1px solid @border-color;
        background: #fff;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover{
            border-color: @border-color-hover;
            color: #1890ff;
        }
        &:active{
            background-color: #eee;
        }
        .icon{
            order: 1;
            margin-right: 0.3em;
            &.right{
                order: 3;
                margin-right: 0;
                margin-left: 0.3em;
            }
        }
        .loading{
            animation: rotate 1s infinite linear;
            order: 1;
            margin-right: 0.3em;
            &.right{
                order: 3;
                margin-right: 0;
                margin-left: 0.3em;
            }
        }
        .conetnt{
            order: 2;
        }
    }
</style>


