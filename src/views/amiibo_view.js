
const AmiiboView = function(container, amiibo) {
  this.amiibosContainer = container
  this.amiibo = amiibo
}

AmiiboView.prototype.render = function () {
const name = this.createAmiiboHeading()
this.amiibosContainer.appendChild(name)
const amiibosList = this.createAmiibosList()
this.amiibosContainer.appendChild(amiibosList)
  }

AmiiboView.prototype.createAmiiboHeading = function () {
  const name = document.createElement('h2')
  name.textContent = this.amiibo.name
  return name
};

AmiiboView.prototype.createAmiibosList = function () {
  const amiibosList = document.createElement('ul')
  this.populateList(amiibosList)
  return amiibosList
};

AmiibosView.prototype.populateList = function (list) {

  const listItemHeight = document.createElement('li')
  listItemHeight.textContent = `Game Series: ${this.amiibo.gameSeries}`
  list.appendChild(listItemGameSeries)
};



module.exports = AmiiboView