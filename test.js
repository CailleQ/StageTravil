// import Axios from 'axios'
const Axios = require('axios');

const baseTestUrl= 'http://47.116.78.153/prod-api'
const addItemUrl = '/seller/foreign/merchant/product/create.do'
const updateItemUrl = '/seller/foreign/merchant/product/update.do'
const allUpdateUrl = '/seller/foreign/merchant/stock/allUpdate.do'
const fullUpdateUrl = '/seller/foreign/merchant/stock/fullUpdate.do'

const merchantCode = 'Fam_MCJDUCYd67'
const merchantSecret='ZmFta29vbHMuY29tL3NjYXJldA'
let timestamp = new Date().getTime()


const access_token ='bWVyY2hhbnRfY29kZV90b2tlbl9rZXk6RmFtX01DSkRVQ1lkNjcxNzA2MTc5NTg5MjA0'

function getAccessToken(){
//测试获取token
Axios.post(
    'http://47.116.78.153/prod-api/seller/foreign/merchant/getAccessToken.do', 
    { merchantCode,
        merchantSecret,
        timestamp

    },
    { headers: { 'Content-Type': 'application/json' }}
).then(res => {console.log(res.data)})
.catch(err => console.log(err))
//待问
//access_token = res.data.data.access_token
}



//测试新增商品
function addItem(){

    url = baseTestUrl + addItemUrl
    console.log(url)
    Axios.post (
        url,
        
        {
            merchantCode,
            "spuCode": "FJSLSKL-001",
            "spuTitle": "Hermes Picotin Lock 22 金扣",
            "brandName": "Hermes",
            "spuSubTitle": null,
            "spuDescription": "質地: 牛皮，皮革，金屬",
            "spuDescriptionImg": null,
            "sketch": null,
            "spuListPrice": 888888.00,
            "spuImageList": [
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618BBE7R56W5DHKMKVZ5JROX01J3APC673G.jpg"
            },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618SIVZNJSQ4F11JJ9J957RRSEWRIKN488R.jpg"
            },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618N11F7TRRU0LBJW9P31W7YTP3D1ISV2PU.jpg"
            },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618R1BLFH91U0CBGBPNS5DKDUG6NULIMGC8.jpg"
            },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/20240116185FR4E9AD4WV8VET4AJO1JWLD4PO253JP.jpg"
            }
            ],
            "skuList": [
                {
                    "skuCode": "7495729",
                    "skuListPrice": 888888.00,
                    "attrSaleList": [
                        {
                            "attributeCode": "COLOR",
                            "attributeFrontName": "颜色",
                            "attributeValueList": [
                                {
                                    "attributeValueName": "蓝色",
                                    "attributeValuePicURL":
                                        "https://res.famkools.com/toryburch/colorGroup/blue.png",
                                    "propertyValueId": "49"
                                }
                            ]
                        },
                        {
                            "attributeCode": "SIZE",
                            "attributeFrontName": "尺码",
                            "attributeValueList": [
                                {
                                    "attributeValueName": "OS",
                                    "attributeValuePicURL": null,
                                    "propertyValueId": "2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },{headers: {
            'Content-Type': 'application/json', 
            'Authorization': access_token,

    }}
           
        
    ).then(res => console.log(res.data))
    .catch(err => console.log(err))
}

//修改商品  
function updateItem(){
    url = baseTestUrl + updateItemUrl
    console.log(url)
    Axios.post (
        url,
      
        {
            merchantCode,
            "spuCode": "FJSLSKL-001",
            "spuTitle": "Hermes Picotin Lock 22 金扣",
            "brandName": "Hermes",
            "spuSubTitle": null,
            "spuDescription": "質地: 牛皮，皮革，金屬",
            "spuDescriptionImg": null,
            "sketch": null,
            "spuListPrice": 888888.00,
            "spuImageList": [
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618BBE7R56W5DHKMKVZ5JROX01J3APC673G.jpg"
                },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618SIVZNJSQ4F11JJ9J957RRSEWRIKN488R.jpg"
                },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618N11F7TRRU0LBJW9P31W7YTP3D1ISV2PU.jpg"
                },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/2024011618R1BLFH91U0CBGBPNS5DKDUG6NULIMGC8.jpg"
                },
                {
                    "mediaType": "1",
                    "mediaUrl":
                        "https://res.famkools.com/resources/item-image/20240116185FR4E9AD4WV8VET4AJO1JWLD4PO253JP.jpg"
                }
            ]
        } ,
        {headers: {
            'Content-Type': 'application/json', 
            'Authorization': access_token,}}
       
    ).then(res => console.log(res.data))
    .catch(err => console.log(err))
}

//批量修改库存
function allUpdate(){
    url = baseTestUrl + allUpdateUrl
    console.log(url)
    Axios.post (
        url,
        {
            merchantCode,
            "skuStockList": [
                {
                    "skuCode": "7495729",
                    "count": 1
                },
                {
                    "skuCode": "1231234",
                    "count": 2
                }
            ]
        },
        {headers: {
            'Content-Type': 'application/json', 
            'Authorization': access_token,}}
       
    ).then(res => console.log(res.data))
    .catch(err => console.log(err))
}

//全量修改库存
function fullUpdate(){
    url = baseTestUrl + fullUpdateUrl
    console.log(url)
    Axios.post (
        url,
        {
            merchantCode,
            skuCode: "7495729",
            skuCode: "1231234",
    
        },
        {headers: {
            'Content-Type': 'application/json', 
            'Authorization': access_token,}}
       
    ).then(res => console.log(res.data))
    .catch(err => console.log(err))
}




//调用函数区


//getAccessToken()
//addItem()
//updateItem()
//allUpdate()
//fullUpdate()