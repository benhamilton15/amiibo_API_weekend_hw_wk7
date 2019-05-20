const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Amiibos = function(url) {
this.url = url
this.amiibos = []
}

Amiibos.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
    gameSeriesList = this.amiibos.filter(amiibo => amiibo.gameSeries === evt.detail);
    PubSub.publish('Amiibos:selected-gameseries-ready', gameSeriesList);
  });
};


Amiibos.prototype.getData = function() {
  const request = new RequestHelper(this.url)
  request.get()
  .then((data) => {
    this.amiibos = data.amiibo
    PubSub.publish('Amiibos:all-amiibos-ready', this.amiibos)
  })
};

Amiibos.prototype.characters = function() {

}

module.exports = Amiibos
