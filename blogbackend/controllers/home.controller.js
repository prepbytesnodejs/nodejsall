
const womendata=[
    {
        "id":1,
       "product-name":"MEN'S BETTER THAN NAKED&trade; JACKET",
       "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
       "header-top-right-text":"Shop All",
       "header-top-left-text":"Men's",
       "product-url":"http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
       "header-top-right-url":"http://www.thenorthface.com/en_US/shop-mens/",
       "product-cta-text":"Shop Now"
    },
    {
        "id":2,
       "product-name":"WOMEN'S BETTER THAN NAKED&trade; JACKET",
       "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
       "header-top-right-text":"Shop All",
       "header-top-left-text":"Women's",
       "product-url":"http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
       "header-top-right-url":"http://www.thenorthface.com/en_US/shop-womens/",
       "product-cta-text":"Shop Now"
    },
    {
        "id":3,
       "product-name":"WOMEN'S SINGLE-TRACK SHOE",
       "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
       "header-top-right-text":"Shop All",
       "header-top-left-text":"Running Shoes",
       "product-url":"http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
       "header-top-right-url":"http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
       "product-cta-text":"Shop Now"
    },
    {
        "id":4,
       "product-name":"Enduro Boa&reg; Hydration Pack",
       "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
       "header-top-right-text":"Shop All",
       "header-top-left-text":"Equipment",
       "product-url":"http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
       "header-top-right-url":"http://www.thenorthface.com/en_US/shop-equipment/",
       "product-cta-text":"Shop Now"
    },
{
    "id":5,
    "product-name":"MEN'S BETTER THAN NAKED&trade; JACKET",
    "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
    "header-top-right-text":"Shop All",
    "header-top-left-text":"Men's",
    "product-url":"http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
    "header-top-right-url":"http://www.thenorthface.com/en_US/shop-mens/",
    "product-cta-text":"Shop Now"
 },
 {
    "id":6,
    "product-name":"WOMEN'S BETTER THAN NAKED&trade; JACKET",
    "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
    "header-top-right-text":"Shop All",
    "header-top-left-text":"Women's",
    "product-url":"http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
    "header-top-right-url":"http://www.thenorthface.com/en_US/shop-womens/",
    "product-cta-text":"Shop Now"
 },
 { 
    "id":7,
    "product-name":"WOMEN'S SINGLE-TRACK SHOE",
    "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
    "header-top-right-text":"Shop All",
    "header-top-left-text":"Running Shoes",
    "product-url":"http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
    "header-top-right-url":"http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
    "product-cta-text":"Shop Now"
 },
 {
    "id":8,
    "product-name":"Enduro Boa&reg; Hydration Pack",
    "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
    "header-top-right-text":"Shop All",
    "header-top-left-text":"Equipment",
    "product-url":"http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
    "header-top-right-url":"http://www.thenorthface.com/en_US/shop-equipment/",
    "product-cta-text":"Shop Now"
 }
]

const GetHomePageData=(req,res)=>{
   // console.log(req.query); //url query params 
    //console.log(req.params); //route params


    res.json({
        data:womendata
    })

}

const GetSingleProduct=(req,res)=>{

    const id=req.params.productid;

    const dataForId=womendata.find(ele=>ele.id==id);
    console.log(dataForId);

    res.json({
        message:"Success",
        data:dataForId
    })


 
}
const array=[
    {
        type:"bollywood",
        data:"Arjun Kapoor"
    },
    {
        type:"hollywood",
        data:"Natalie Portman"
    },

    {
        type:"technology",
        data:"Elon Musk"
    }

]
const GetData=(req,res)=>{
    const type=req.params.type;

    const findTypeData=array.filter(ele=>ele.type==type);

    res.json({
        data:findTypeData
    })
    

}

module.exports={
    GetHomePageData,
    GetSingleProduct,
    GetData

}