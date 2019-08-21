<template>
    <div :class="[`s-input-container`,error?`error`:``]">
        <input type="text" :value="value" :disabled="disabled"
            @change="$emit('change',$event)"
            @focus="$emit('focus',$event)"
            @blur="$emit('blur',$event)"
            @input="$emit('input',$event)"
        />
        <span class="err-info" v-if="error">{{ error }}</span>
    </div>
</template>

<script>
    import Icon from './icon';
    export default {
        name:"eye-input",
        props:{
            disabled:{
                type:Boolean,
                default:false,
            },
            value:{

            },
            error:{
                type:String,
            
            }
        },
    }
</script>

<style lang="less" scoped>
    @import url("./../assets/style.less");
    .s-input-container{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        margin: 0 10px 10px 0;
        &.error{
            input{
                border-color: #f5222d;
                &:hover{
                    border-color: #f5222d;
                }
                &:focus{
                    border-color: #f5222d;
                    box-shadow: 0 0 5px 0px #f5222d;;
                }
            }
            .err-info{
                position: absolute;
                bottom: -20px;
                line-height: 16px;
                font-size: 14px;
                left: 0;
                color: #f5222d;
            }
        }
        input{
            width: 100%;
            line-height: 32px;
            color: @font-color;
            border:1px solid @border-color;
            border-radius: @border-radius;
            padding: 0 8px;
            outline: none;
            font-size: @font-size;
            &:hover{
                border-color: @border-color-hover;
            }
            &:focus{
                border-color: @border-color-hover;
                box-shadow: 0 0 5px 0px @border-color-hover;;
            }
            &[disabled]{
                cursor: no-drop;
                background-color: #eee;
                border-color: @border-color;
            }
        }
    }
</style>>