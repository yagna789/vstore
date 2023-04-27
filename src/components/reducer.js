export const initialState={
    cartList:[],
    productList:[{
        title:'Village Decor Handmade earthen Natural Clay Drinking Water Pot (Pot With Stand)',
        price:'1189',
        rating:'5.0',
        imageURL:'https://m.media-amazon.com/images/I/51aqWxQNHvL._SX522_.jpg'
    },
{
    title:'VETAS Kulo Bamboo Tray Muram for Puja and Kitchen',
    price:'399',
    rating:'4.1',
    imageURL:'https://m.media-amazon.com/images/I/81L56xRiZqL._SX425_.jpg'
},
{
    title:'Montelal Store Korai Pai Organic River Grass Endurable 3 Fold Sleeping Mat - 54" X 78", Multicolour',
    price:'1549',
    rating:'4.4',
    imageURL:'https://m.media-amazon.com/images/I/71zwqjb3yQL._SX425_.jpg'
},
{
    title:'Ugaoo Organic Potting Garden Soil Mix for Plants Home Garden 5 Kg',
    price:'249',
    rating:'4.2',
    imageURL:'https://m.media-amazon.com/images/I/61lUcSQCl6L._SL1200_.jpg'
},
{
    title:'village decor earthen tulasi pot (brownB* H - 6.5 inch *8.5 inch)',
    price:'789',
    rating:'4.1',
    imageURL:'https://m.media-amazon.com/images/I/61-E94Tj5YS._SX679_.jpg'
}
]
}

export const reducer =(state,action) =>{
    switch(action.type) 
    {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList:[...state.cartList,action.payload]
            }
            case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartList:state.cartList.filter(item => item.id !== 
                    action.payload)
            }
            default :
            return state;
    }
}