let fruits = [
    {
        id : 1,
        title : 'Apple',
        price : 20,
        img : 'https://freshfruitsandveges.co.nz/wp-content/uploads/2020/04/Apple-Royal-Gala-500gm-700x700.jpg'
    },
    {
        id : 2,
        title : 'Orange',
        price : 30,
        img : 'https://static.libertyprim.com/files/familles/orange-large.jpg?1569271818'
    },
    {
        id : 3,
        title : 'Mango',
        price : 40,
        img : 'https://static.libertyprim.com/files/familles/mangue-large.jpg?1569271798'
    }

]
const toHTML = fruit => `
  <div class="col">
      <div class="card">
        <img src="${fruit.img}"
             class="card-img-top" style="width: 300px;" alt="${fruit.title}">
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посматреть цену</a>
          <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
        </div>
      </div>
    </div>
`

function render () {
    const html = fruits.map (toHTML).join ('')
    document.getElementById ('fruits').innerHTML = html
}

render ()
const priceModal = $.modal ({
    title : 'Цена на Товар',
    closable : true,
    width : '400px',
    footerButtons : [
        {
            text : 'Закрыть', type : 'primary', handler () {
                priceModal.close ()
            }
        },

    ]

})

document.addEventListener ('click', event => {
    event.preventDefault ()

    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find (f => f.id === id)
    if (btnType === 'price') {
        priceModal.setContent (`
        <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open ()
    } else if (btnType === 'remove') {
        $.confirm ({
            title : 'Вы уверены ?',
            content:`<p>Вы удаляете фрукт:<strong>${fruit.title}</strong></p>`
        }).then(()=>{
            fruits=fruits.filter(f=>f.id!==id)
            render()
        }).catch(()=>{

        })
    }
})

