const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Amiibos:all-amiibos-ready', (event) => {
    const allAmiibos = event.detail;
    const filteredAmiibos = this.filterAmiibos(allAmiibos)
    this.populate(filteredAmiibos)
  })

  this.element.addEventListener('change', (evt) => {
    const gameSeriesName = evt.target.value;
    PubSub.publish('SelectView:change', gameSeriesName);
  })
};

SelectView.prototype.filterAmiibos = function (amiibos) {
  return gameSerieses = amiibos
    .map(amiibo => amiibo.gameSeries)
    .filter((gameSeries, index, gameSerieses) => gameSerieses.indexOf(gameSeries) === index);
};

SelectView.prototype.populate = function (gameSerieses) {
  gameSerieses.forEach((gameSeries, index) => {
    const gameSeriesOption = document.createElement('option');
    gameSeriesOption.textContent = gameSeries
    this.element.appendChild(gameSeriesOption)
  })
};

module.exports = SelectView;
