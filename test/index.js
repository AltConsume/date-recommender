const DateOrderRecommender = require(`../src`)
const { Storage } = require(`@takeamos/deck`)

const storage = new Storage.FS(`/home/maddie/Dump/socialmedia`)

const recommend = new DateOrderRecommender(`twitter`, storage)

;(async () => {
  await recommend.run()
})()
