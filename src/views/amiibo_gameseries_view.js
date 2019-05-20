const PubSub = require('../helpers/pub_sub.js');
const AmiiboView = require('../views/amiibo_view.js');

const AmiiboGameSeriesView = function(container) {
  this.container = container;
};

AmiiboGameSeriesView.prototype.bindEvents = function() {
  PubSub.subscribe('Amiibos:selected-gameseries-ready', (evt) => {
    const amiiboArrayOfObjects = evt.detail;
    this.render(amiiboArrayOfObjects);
  });
  
};

AmiiboGameSeriesView.prototype.render = function (amiiboArray) {
  this.container.innerHTML = ''
  amiiboArray.forEach((amiibo)=>{
    const amiiboView = new AmiiboView(this.container, amiibo)
    amiiboView.render()
  })
}

module.exports = AmiiboGameSeriesView