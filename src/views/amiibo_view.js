
const AmiiboView = function(container, amiibo) {
  this.amiibosContainer = container
  this.amiibo = amiibo
}

AmiiboView.prototype.render = function () {
const name = this.createAmiiboHeading()
this.amiibosContainer.appendChild(name)
const amiibosList = this.createAmiibosList()
this.amiibosContainer.appendChild(amiibosList)
const amiiboImage = this.createAmiiboImage()
this.amiibosContainer.appendChild(amiiboImage)
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

AmiiboView.prototype.createAmiiboImage = function () {
const amiiboImage = document.createElement('img');
amiiboImage.src = this.amiibo.image;
return amiiboImage
};

AmiiboView.prototype.populateList = function (list) {

  const listItemGameSeries = document.createElement('li')
  listItemGameSeries.textContent = `Game Series: ${this.amiibo.gameSeries}`
  list.appendChild(listItemGameSeries)
};



module.exports = AmiiboView