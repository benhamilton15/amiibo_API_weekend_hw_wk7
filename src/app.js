const AmiiboListView = require('./views/amiibo_list_view.js')


document.addEventListener('DOMContentLoaded', () =>{
    console.log('Javascript Loaded')

    const selectedContainer = document.querySelector('div#amiibos')
    const amiiboListView = new AmiiboListView(selectedContainer)
    amiiboListView.bindEvents()
  })