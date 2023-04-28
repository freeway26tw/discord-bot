const puppeteer = require('puppeteer')

module.exports.question = async function (type) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const site = `https://www.explainthis.io/zh-hant/interview-guides/${type}`
  let randomNumber
  await page.goto(site)


  const titles = await page.evaluate(
    () => Array.from(
      document.querySelectorAll('.border-t>ul>li'),
      a => a.textContent
    )
  )

  randomNumber = Math.floor(Math.random() * titles.length)
  await browser.close()
  return titles[randomNumber]
}
