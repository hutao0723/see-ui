import Vue from 'vue';
import Icon from "./components/icon.vue";
import Button from "./components/button.vue";
import ButtonGroup from "./components/button-group.vue";

new Vue({
    el:"#app",
    components:{
        "s-icon":Icon,
        "s-button":Button,
        "s-button-group":ButtonGroup
    },
    data(){
        return {
            buttonLoading:true,
        }
    }
})