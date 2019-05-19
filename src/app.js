const AmiiboListView = require('./views/amiibo_list_view.js')
const Amiibos = require('./models/amiibos.js')
const SelectView = require('./views/select_view.js')
const url = ('https://www.amiiboapi.com/api/amiibo')



document.addEventListener('DOMContentLoaded', () =>{
    console.log('Javascript Loaded')

    const selectedContainer = document.querySelector('div#amiibos')
    const amiiboListView = new AmiiboListView(selectedContainer)
    amiiboListView.bindEvents()

    const selectedContainer2 = document.querySelector('select#amiibos')
    const selectView = new SelectView(selectedContainer2);
    selectView.bindEvents();

    const amiibos = new Amiibos(url)
    amiibos.getData()
  })