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
};

SelectView.prototype.filterAmiibos = function (amiibos) {
  return characters = amiibos
    .map(amiibo => amiibo.gameSeries)
    .filter((character, index, characters) => characters.indexOf(character) === index);
};

SelectView.prototype.populate = function (characters) {
  characters.forEach((character, index) => {
    const characterOption = document.createElement('option');
    characterOption.textContent = character
    this.element.appendChild(characterOption)
  })
};

module.exports = SelectView;
