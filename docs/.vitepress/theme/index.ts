import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import Comments from './components/Comments.vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Comments)
    })
  }
}
