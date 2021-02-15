// localStorage.setItem('name', 'Cavidan')
// localStorage.setItem('email', 'cavi98@icloud.com')

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('email'));

// localStorage.clear()

const productlist = [{
        id: 0,
        productName: 'Iphone 10',
        price: '20',
        count: '1',
        seller: 'alma store'
    },
    {
        id: 1,
        productName: 'Mac Book Pro',
        price: '4000',
        count: '3',
        seller: 'Contact Home'
    }
]



let cardList = '';

productlist.forEach(item => {
    cardList += `<div class="card col-3">
    <h1>${item.productName}</h1>
    <h2>${item.seller}</h2>
    <p>${item.price} AZN</p>
    <i id="fa-shopping-basket-${item.id}" data-productId="${item.id}" class="fas fa-shopping-basket"></i>
    </div>`
})


document.getElementById('card-list').innerHTML = cardList

document.querySelectorAll('.fa-shopping-basket').forEach(product => {
    product.addEventListener('click', (e) => {
        let pr = productlist.find(product => product.id === +e.currentTarget.getAttribute('id').split('-').pop());

        let localData = JSON.parse(localStorage.getItem('basketList'))
        if (localData) {
            if (localData.findIndex(item => item.id === pr.id) === -1) {
                localStorage.setItem('basketList', JSON.stringify([pr, ...localData]))
            } else {
                localData = localData.filter(item => item.id !== pr.id)
                localStorage.setItem('basketList', JSON.stringify(localData))
            }
        } else {
            localStorage.setItem('basketList', JSON.stringify([pr]))
        }


        let cardList = '';

        JSON.parse(localStorage.getItem('basketList')).forEach(item => {
            cardList += `<div class="basket-card">
    <h1>${item.productName}</h1>
    <h2>${item.seller}</h2>
    <p>${item.price} AZN</p>
    <input type="number" value="1">
    <i id="fa-times-${item.id}" data-productId="${item.id}" class="fas fa-times"></i>
</div>`
        })


        document.getElementById('basket-list').innerHTML = cardList

    })
})


document.querySelectorAll('.fa-times').forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.currentTarget);

        let localData = JSON.parse(localStorage.getItem('basketList'));

        localData = localData.filter(item => item.id !== +e.currentTarget.getAttribute('id').split('-').pop());

        localStorage.setItem('basketList', JSON.stringify(localData))
    })
})









// let cardList = '';

// productlist.forEach(product => {
//     cardList += `<div  class="card col-3">
//     <h1>${product.productName}</h1>
//     <h2>${product.seller}</h2>
//     <p>${product.price} AZN</p>
//     <i id="fa-shopping-basket-${product.id}" class="fas fa-shopping-basket"></i>
//     </div>`
// })

// document.getElementById('card-list').innerHTML = cardList

// document.querySelectorAll('.fa-shopping-basket').forEach(item => {
//     console.log(item);
//     item.addEventListener('click', (e) => {
//         let pr = productlist.find(product => product.id === +e.currentTarget.getAttribute('id').split('-').pop())
//             // localStorage usin9g
//         let localBasketItems = JSON.parse(localStorage.getItem('basketItems'))
//         console.log(localBasketItems);
//         if (localBasketItems) {
//             if (localBasketItems.findIndex(item => item.id === pr.id) === -1) {
//                 localStorage.setItem('basketItems', JSON.stringify([pr, ...localBasketItems]))
//                 console.log('-1');
//             } else {
//                 localBasketItems = localBasketItems.filter(item => item.id !== pr.id)
//                 localStorage.setItem('basketItems', JSON.stringify([...localBasketItems]))
//                 console.log('--1');

//             }
//         } else {
//             localStorage.setItem('basketItems', JSON.stringify([pr]))
//         }
//     })
// })