import { defineClientConfig,usePageData } from '@vuepress/client'
import { getRandomValues } from 'crypto'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const pagesData = usePageData()
    console.log(pagesData.value)

  },
  setup() {},
  rootComponents: [],
})