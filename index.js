const puppeteer = require('puppeteer')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.PORT || 5050

var coinsInfo = {
  SLP: {
    SLPUSD:  0,
    SLPVAR: "",
    SLPVARD: ""
  },
  ETH: {
    ETHUSD: 0,
    ETHVAR: "",
    ETHVARD: "",
  },
  BTC: {
    BTCUSD: 0,
    BTCVAR: "",
    BTCVARD: "",
  },
  LTC: {
    LTCUSD: 0,
    LTCVAR: "",
    LTCVARD: "",
  },
  BRL: {
    BRLUSD: 0,
    BRLVAR: "",
    BRLVARD: ""
  },
  USD: {
    USDVAR: "",
    USDVARD: "",
  }
}

async function slp() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.goto('https://coinmarketcap.com/currencies/smooth-love-potion/')
  
  async function t(){
    coinsInfo.SLP.SLPUSD = parseFloat(((await page.evaluate(() => {
      return document.querySelector(".priceTitle").innerText.substring(1,document.querySelector(".priceTitle").innerText.length - 6)
    }))))
    t()
  }
  t()

  async function j(){
    coinsInfo.SLP.SLPVAR = ((await page.evaluate(() => {
      return document.querySelector(".sc-15yy2pl-0",".feeyND").innerText
    })))
    j()
  }
  j()

  async function d(){
    coinsInfo.SLP.SLPVARD = ((await page.evaluate(() => {
      return (document.querySelector("#__next > div > div.main-content > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > span > span").className).substr(11)
    })))
    d()
  }
  d()

}slp()

async function eth() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.goto('https://coinmarketcap.com/currencies/ethereum/')
  
  async function t(){
    coinsInfo.ETH.ETHUSD = parseFloat(((await page.evaluate(() => {
      return document.querySelector(".priceTitle").innerText.substring(1,document.querySelector(".priceTitle").innerText.length - 6)
    }))).replace(/\,/g,""))
    t()
  }
  t()

  async function j(){
    coinsInfo.ETH.ETHVAR = ((await page.evaluate(() => {
      return document.querySelector(".sc-15yy2pl-0",".feeyND").innerText
    })))
    j()
  }
  j()

  async function d(){
    coinsInfo.ETH.ETHVARD = ((await page.evaluate(() => {
      return (document.querySelector("#__next > div > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > span > span")).className.substr(11)
    })))
    d()
  }
  d()

}eth()

async function btc() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.goto('https://coinmarketcap.com/currencies/bitcoin/')
  
  async function t(){
    coinsInfo.BTC.BTCUSD = parseFloat(((await page.evaluate(() => {
      return document.querySelector(".priceTitle").innerText.substring(1,document.querySelector(".priceTitle").innerText.length - 6)
    }))).replace(/\,/g,""))
    t()
  }
  t()

  async function j(){
    coinsInfo.BTC.BTCVAR = ((await page.evaluate(() => {
      return document.querySelector(".sc-15yy2pl-0",".feeyND").innerText
    })))
    j()
  }
  j()

  async function d(){
    coinsInfo.BTC.BTCVARD = ((await page.evaluate(() => {
      return (document.querySelector("#__next > div > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > span > span")).className.substr(11)
    })))
    d()
  }
  d()

}btc()

async function ltc() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.goto('https://coinmarketcap.com/currencies/litecoin/')
  
  async function t(){
    coinsInfo.LTC.LTCUSD = parseFloat(((await page.evaluate(() => {
      return document.querySelector(".priceTitle").innerText.substring(1,document.querySelector(".priceTitle").innerText.length - 6)
    }))).replace(/\,/g,""))
    t()
  }
  t()
  

  async function j(){
    coinsInfo.LTC.LTCVAR = ((await page.evaluate(() => {
      return document.querySelector(".sc-15yy2pl-0",".feeyND").innerText
    })))
    j()
  }
  j()

  async function d(){
    coinsInfo.LTC.LTCVARD = ((await page.evaluate(() => {
      return (document.querySelector("#__next > div > div.main-content > div.sc-57oli2-0.comDep.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > span > span")).className.substr(11)
    })))
    d()
  }
  d()
}ltc()

async function brl() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.goto('https://www.google.com/search?q=BRL+USD&oq=BRL+USD&aqs=chrome..69i57j0i512l6j69i60.998j0j7&sourceid=chrome&ie=UTF-8')
  
  async function t(){
    coinsInfo.BRL.BRLUSD = parseFloat(((await page.evaluate(() => {
      return document.querySelector(".a61j6", ".vk_gy", ".vk_sh Hg3mWc").value
    }))).replace(/\,/g,""))
    t()
  }
  t()
}brl()

app.get('/', function (req, res) {
  res.json('Hello World!')
})

app.get('/teste', function (req, res) {
  res.json(coinsInfo)
})


app.listen(PORT, () => console.log(`Serve is running in port ${PORT}`))
