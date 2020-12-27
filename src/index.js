const BaseRecommender = require(`@takeamos/recommenders-base`)

class DateOrderRecommender extends BaseRecommender {
  constructor(ref, storage) {
    super(ref, storage)
  }

  async run() {
    const files = []

    for await (let entity of this.read()) {
      files.push(entity)
    }

    files.sort((a, b) => {
      return b.dateCreated - a.dateCreated
    })

    const ids = files.map(({ about: { identifier } }) => identifier)

    return this.write(ids)
  }
}

module.exports = DateOrderRecommender
