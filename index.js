const ccxt = require('ccxt');

(async function () {
    let kraken = new ccxt.kraken()
    let bitfinex = new ccxt.bitfinex({ verbose: true })
    let huobi = new ccxt.huobipro()
    let okcoinusd = new ccxt.okcoinusd({
        apiKey: 'YOUR_PUBLIC_API_KEY',
        secret: 'YOUR_SECRET_PRIVATE_KEY',
    })

    // console.log(kraken.id, await kraken.loadMarkets())
    // console.log(bitfinex.id, await bitfinex.loadMarkets())
    // console.log(huobi.id, await huobi.loadMarkets())

    // console.log(kraken.id, await kraken.fetchOrderBook(kraken.symbols[0]))
    // console.log(bitfinex.id, await bitfinex.fetchTicker('BTC/USD'))
    // console.log(huobi.id, await huobi.fetchTrades('ETH/CNY'))

    // console.log(okcoinusd.id, await okcoinusd.fetchBalance())

    // // 以市价卖出 1BTC，并立马得到1比特币等值的欧元
    // console.log(okcoinusd.id, await okcoinusd.createMarketSellOrder('BTC/USD', 1))

    // // 以 $2500 购买 1 BTC, 当该订单成交时，你会付出 $2500 美金并获得 1BTC 
    // console.log(okcoinusd.id, await okcoinusd.createLimitBuyOrder('BTC/USD', 1, 2500.00))

    // 传递/重定义特定交易所的订单自定义参数：类型，数量，价格 等等
    // 使用一个交易所专有的订单类型
    bitfinex.createLimitSellOrder('BTC/USD', 1, 10, { 'type': 'trailing-stop' })
})();