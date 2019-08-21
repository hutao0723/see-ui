const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/components/input.vue';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('Input存在.', () => {
        expect(Input).to.be.ok
    })
})

describe('Input', () => {
    const Constructor = Vue.extend(Input); 
    let vm ;
    afterEach(() => {
        vm.$destroy()
    })
   
    it('设置Input值.', () => {
        vm = new Constructor({
            propsData:{
                value:"输入值"
            }
        }).$mount();
        const Element = vm.$el.querySelector('input');
        expect(Element.value).to.equal('输入值');
    })
    it('接收 disabled', () => {
        vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
    })
    it('接收 disabled', () => {
        vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
    })
    it('接收 error', () => {
        vm = new Constructor({
            propsData: {
                error: "用户名不能为空"
            }
        }).$mount()
        const elementHTML = vm.$el.querySelector('.err-info').innerText;
        expect(elementHTML).to.equal("用户名不能为空")
    })
})

describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm;
    afterEach(() => {
        vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
        // vm = new Constructor({}).$mount()
        // const callback = sinon.fake();
        // vm.$on("change", callback)
        // //触发input的事件
        // let event = new Event("change");
        // let inputElement = vm.$el.querySelector('input')
        // inputElement.dispatchEvent(event)
        // // 事件被调用
        // expect(callback).to.have.been.called;

        ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.$on(eventName, callback)
            //触发input的事件
            let event = new Event(eventName);
            Object.defineProperty(
                event, 'target', 
                {
                    value: {value: 'hi'}, 
                    enumerable: true
                }
            )
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
    })
})