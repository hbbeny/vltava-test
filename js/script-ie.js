'use strict'

function _instanceof (left, right) {
  if (
    right != null &&
    typeof Symbol !== 'undefined' &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left)
  } else {
    return left instanceof right
  }
}

function _classCallCheck (instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties (target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass (Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

var Search =
  /* #__PURE__ */
  (function () {
    function Search (list) {
      _classCallCheck(this, Search)

      this.list = list
    }

    _createClass(Search, [
      {
        key: 'searchedVal',
        value: function searchedVal (val) {
          var vals = ''

          for (var i = 0; i < this.list.length; i++) {
            if (val === '') {
              document.querySelector('ul').style.display = 'none'
              return
            } else if (
              this.list[i].toLowerCase().indexOf(val.toLowerCase()) != -1
            ) {
              var onclick = 'MySearch.fill("' + this.list[i] + '")'
              vals += '<li onclick=' + onclick + '>' + this.list[i] + '</li>'
            }
          }

          if (vals === '') {
            return '<li>Nenalezeno!</li>'
          }

          return vals
        }
      },
      {
        key: 'search',
        value: function search (picked) {
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
      },
      {
        key: 'fill',
        value: function fill (val) {
          document.querySelector('.search-bar>input').value = val
          this.search(true)
        }
      }
    ])

    return Search
  })()

var list = [
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
var MySearch = new Search(list)
