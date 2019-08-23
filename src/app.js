import Vue from 'vue';
import Icon from "./components/icon.vue";
import Button from "./components/button.vue";
import ButtonGroup from "./components/button-group.vue";
import Input from "./components/input.vue";
import Row from "./components/row.vue";
import Col from "./components/col.vue";

new Vue({
    el:"#app",
    components:{
        "s-icon":Icon,
        "s-button":Button,
        "s-button-group":ButtonGroup,
        "s-input":Input,
        "s-row":Row,
        "s-col":Col,
    },
    data(){
        return {
            buttonLoading:true,
        }
    },
    methods:{
        inputChange(e){
            console.log(e.target.value);
        },
        inputInput(e){
            console.log(e.target.value);
        },
        inputBulr(e){
            console.log(e.target.value);
        },
        inputFocus(e){
            console.log(e.target.value);
        }
    }
})