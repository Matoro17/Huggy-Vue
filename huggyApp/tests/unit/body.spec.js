import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import body from '@/components/body'
import card from '@/components/card.vue'

describe('body.vue', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallowMount(body,{
      data() {
        return {
          atalhos: [
            {
              name: 'Teste',
              key: 'test',
              file: 'arquivoTest',
              text: 'Texto teste do teste',
              public: true
            }
          ]
        }
      }
    })
  })
  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('Has a card', () => {
    const shortInstace = wrapper.findComponent(card)
    expect(shortInstace.exists()).toBe(true)
  })
  /*
  it('open and close modal', () => {
    const modal = wrapper.findComponent({name: 'addModal'})
    expect(modal.exists()).toBe(false)
    const button = wrapper.findComponent({ref:'addModalButton'})
    expect(button.exists()).toBe(true)
    button.trigger('click')
    modal = wrapper.findComponent({name: 'addModal'})
    expect(modal.exists()).toBe(true)

  })*/
})
