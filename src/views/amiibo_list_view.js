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

AmiiboListView.prototype.render = function () {
   this.container.innerHTML = ''

  this.amiibos.forEach((amiibo)=>{
    const amiiboView = new AmiiboView(this.container, amiibo)
    amiiboView.render()
  })
};

module.exports = AmiiboListView