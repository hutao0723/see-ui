<template>
    <div :class="[
                    `s-col`,
                    span?`s-col-${span}`:'',
                    offset?`offset-${offset}`:``,
                    xl?`xl-${xl}`:``,
                    lg?`lg-${lg}`:``,
                    md?`md-${md}`:``,
                    sm?`sm-${sm}`:``,
                    xs?`xs-${xs}`:``
                ]" 
         :style="{paddingLeft:`${gutter/2}px`,paddingRight:`${gutter/2}px`}"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"s-col",
        inject: ['gutter'],
        props:{
            span:{
                type:[Number,String],
            },
            offset:{
                type:[Number,String],
            },
            xl:{
                type:[Number,String],   
            },
            lg:{
                type:[Number,String],   
            },
            md:{
                type:[Number,String],   
            },
            sm:{
                type:[Number,String],   
            },
            xs:{
                type:[Number,String],   
            }
        },
    }
</script>

<style lang="less" scoped>
    .loop(@counter) when (@counter > 0) {
        &.s-col-@{counter}{
            width:(@counter/24)*100% ;
        }
        &.offset-@{counter}{
            margin-left:(@counter/24)*100% ;
        }
        .loop((@counter - 1)); 
    };
    // xl样式
    .xl(@counter) when (@counter > 0) {
        &.xl-@{counter}{
            width:(@counter/24)*100% ;
        }
        .xl((@counter - 1)); 
    };
    // xl样式
    .lg(@counter) when (@counter > 0) {
        &.lg-@{counter}{
            width:(@counter/24)*100% ;
        }
        .lg((@counter - 1)); 
    };
    // xl样式
    .md(@counter) when (@counter > 0) {
        &.md-@{counter}{
            width:(@counter/24)*100% ;
        }
        .md((@counter - 1)); 
    };
    // xl样式
    .sm(@counter) when (@counter > 0) {
        &.sm-@{counter}{
            width:(@counter/24)*100% ;
        }
        .sm((@counter - 1)); 
    };
    .xs(@counter) when (@counter > 0) {
        &.xs-@{counter}{
            width:(@counter/24)*100% ;
        }
        .xs((@counter - 1)); 
    };
    
    div{
        flex-shrink: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        .loop(24)
    }
     @media screen and (min-width: 1920px) {
        div{
            .xl(24)
        }
    }
    @media screen and (max-width: 1919px) {
        div{
            .xl(24)
        }
    }
    @media screen and (max-width: 1200px) {
        div{
            .lg(24)
        }
    }
    @media screen and (max-width: 992px) {
        div{
            .md(24)
        }
    }
    @media screen and (max-width: 768px) {
        div{
            .sm(24)
        }
    }
    @media screen and (max-width: 768px) {
        div{
            .xs(24)
        }
    }
</style>