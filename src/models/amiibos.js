const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Amiibos = function(url) {
this.url = url
this.amiibos = []
}


Amiibos.prototype.getData = function() {
  const request = new RequestHelper(this.url)
  request.get()
  .then((data) => {
    this.amiibos = data.amiibo
    PubSub.publish('Amiibos:all-amiibos-ready', this.amiibos)
  })
};

module.exports = Amiibos