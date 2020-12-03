import { shallowMount } from '@vue/test-utils'
import body from '@/components/body.vue'

describe('body.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'ShorHuggy'
    const wrapper = shallowMount(body, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
