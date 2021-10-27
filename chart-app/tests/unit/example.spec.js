import { shallowMount } from '@vue/test-utils'
import ChartApp from '@/components/ChartApp.vue'

describe('ChartApp.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ChartApp, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
