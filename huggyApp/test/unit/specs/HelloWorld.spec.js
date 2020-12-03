import Vue from 'vue'
import body from '@/components/body'

describe('body.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(body)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('titulo').textContent)
      .toEqual('ShortHuggy')
  })
})
