// localStorage.setItem('name', 'Cavidan')
// localStorage.setItem('email', 'cavi98@icloud.com')

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('email'));

// localStorage.clear()

const basket = [{
        productName: 'Iphone 10',
        price: '20',
        count: '1',
        seller: 'alma store'
    },
    {
        productName: 'Mac Book Pro',
        price: '4000',
        count: '3',
        seller: 'Contact Home'
    }
]


localStorage.setItem('basketDatas', JSON.stringify(basket))