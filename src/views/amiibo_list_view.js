const PubSub = require('../helpers/pub_sub.js')
const AmiiboView = require('./amiibo_view.js')

const AmiiboListView = function (container) {
  this.container = container
}

AmiiboListView.prototype.bindEvents = function () {
  PubSub.subscribe('Amiibos:all-amiibos-ready', (event)=>{
    this.amiibos = event.detail
    this.render()
  })
};

MunrosListView.prototype.render = function () {
  this.amiibos.forEach((amiibo)=>{
    const AmiiboView = new AmiiboView(this.container, amiibo)
    AmiiboView.render()
  })
};

module.exports = AmiiboListView