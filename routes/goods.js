// terminal 에 npm i express
const express = require("express");
const router = express.Router();

const goods = [
{
    goodsId: 4,
    name: "상품 4",
    thumbnailUrl:
    "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
    category: "drink",
    price: 0.1,
},
{
    goodsId: 3,
    name: "상품 3",
    thumbnailUrl:
    "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
    category: "drink",
    price: 2.2,
},
{
    goodsId: 2,
    name: "상품 2",
    thumbnailUrl:
    "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
    category: "drink",
    price: 0.11,
},
{
    goodsId: 1,
    name: "상품 1",
    thumbnailUrl:
    "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
    category: "drink",
    price: 6.2,
},
];

// 상품 목록 조회 API
router.get("/goods", (req,res) =>{
    res.json({ goods: goods });
})

// 상품 상세 조회 API
router.get("/goods/:goodsId", (req,res)=>{
    const {goodsId} = req.params;
    const [detail] = goods.filter((goods)=>goods.goodsId === Number(goodsId));
    res.json({ detail });
});

//장바구니에 추가할 때
const Cart = require("../schemas/cart.js")
router.post("/goods/:goodsId/cart", async(req,res)=>{
    const {goodsId} = req.params;
    const {quantity} = req.body;

    // 장바구니에 상품이 존재한다면?
    const existsCarts = await Cart.find({goodsId});
    if (existsCarts.length){
        return res.status(400).json({
            success:false,
            errorMessage:"이미 장바구니에 해당하는 상품이 존재합니다."
        });
    }

    // 장바구니에 상품이 존재하지 않는다면? 아래 실행
    await Cart.create({goodsId, quantity});

    res.json({result: "success"});
})

// 장바구니 수정할 때
router.put("/goods/:goodsId/cart", async(req,res)=>{
    const {goodsId} = req.params;
    const {quantity} = req.body;

    const existsCarts = await Cart.find({goodsId});
    // 값이 존재할 때에만 실행
    if(existsCarts.length){
        await Cart.updateOne(
            {goodsId: goodsId},
            {$set: {quantity:quantity}}
            )
    }
    
    // 장바구니에 값이 존재하던 존재하지 않던 --> true로 실행
    res.status(200).json({success:true});
})

// 장바구니 제거할 때
router.delete("/goods/:goodsId/cart", async(req, res)=> {
    const {goodsId} = req.params;

    const existsCarts = await Cart.find({goodsId});
    if(existsCarts.length){
        await Cart.deleteOne({goodsId});
    }

    res.json({result:"success"});
})

// 상품 목록 추가
const Goods = require("../schemas/goods.js");
router.post("/goods/", async (req,res)=>{
    const {goodsId, name, thumbnailUrl, category, price} = req.body;

    const goods = await Goods.find({goodsId});

    if( goods.length){
        return res.status(400).json({
            success:false,
            errorMessage:"이미 존재하는 GoodsId입니다."
        });
    }

    const createdGoods = await Goods.create({goodsId, name, thumbnailUrl, category, price});

    res.json({goods: createdGoods});

})

// 라우터를 밖으로 추출
module.exports = router;


