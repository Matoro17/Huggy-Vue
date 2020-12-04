import { mount, shallowMount } from '@vue/test-utils'
import card from '@/components/card.vue'

describe('card.vue', () => {
    let wrapper;
    let nome = 'TesteCard'
    beforeEach(()=>{
        wrapper = shallowMount(card,{
            propsData: {
                atalho: {
                    name: 'nome',
                    key: 'test',
                    file: 'arquivoTest',
                    text: 'Texto teste do teste',
                    public: true
                  }
            }
          })
    })
    it('Render', ()=>{
        expect(wrapper.exists()).toBe(true)
    })

    /*
    it('Is a Vue instance', () =>{
        const teste = shallowMount(card)
        expect(teste.isVueInstance()).toBe(true)
    })*/

    /*
    it('Renders the name', () =>{
        const teste = shallowMount(card)
        expect(wrapper.html()).toContain('TesteCard')
    })*/
})