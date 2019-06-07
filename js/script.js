class Search {
  constructor (newList) {
    this.list = newList
  }

  searchedVal = val => {
    let vals = ''
    this.list.map(l => {
      if (val === '') {
        document.querySelector('ul').style.display = 'none'
      } else if (l.toLowerCase().includes(val.toLowerCase())) {
        let onclick = 'MySearch.fill("' + l + '")'
        vals += '<li onclick=' + onclick + '>' + l + '</li>'
      }
    })
    if (vals === '') {
      return '<li>Nenalezeno!</li>'
    }
    return vals
  }

  search = picked => {
    if (picked) {
      document.querySelector('ul').innerHTML = ''
      document.querySelector('ul').style.display = 'none'
      return
    }
    document.querySelector('ul').style.display = 'inherit'
    document.querySelector('ul').innerHTML = MySearch.searchedVal(
      document.querySelector('.search-bar>input').value
    )
  }
  fill = val => {
    document.querySelector('.search-bar>input').value = val
    this.search(true)
  }
}

let myList = [
  'Ananas',
  'Banán',
  'Citrón',
  'Deštník',
  'Ementál',
  'Fyzika',
  'Gramatika',
  'Házená',
  'Iglů',
  'Jezero',
  'Kokos',
  'Lenochod',
  'Mandarinka',
  'Nektar',
  'Oko',
  'Pes',
  'Rada',
  'Salám',
  'Taška',
  'Ucho',
  'Vesnice',
  'Web',
  'Zajíc'
]

let MySearch = new Search(myList)
