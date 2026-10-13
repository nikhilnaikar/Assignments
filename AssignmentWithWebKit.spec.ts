import {webkit, test} from '@playwright/test'
test('WebKit sample test', async()=>{
    const browser=await webkit.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    const title=await page.title()
    console.log(title)
    await new Promise(()=>{})
})
