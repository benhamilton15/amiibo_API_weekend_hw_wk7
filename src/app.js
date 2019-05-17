const AmiiboListView = require('./views/amiibo_list_view.js')
const Amiibos = require('./models/amiibos.js')
const url = ('https://www.amiiboapi.com/api/amiibo')



document.addEventListener('DOMContentLoaded', () =>{
    console.log('Javascript Loaded')

    const selectedContainer = document.querySelector('div#amiibos')
    const amiiboListView = new AmiiboListView(selectedContainer)
    amiiboListView.bindEvents()

    const amiibos = new Amiibos(url)
    amiibos.getData()
  })