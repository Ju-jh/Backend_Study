const express = require('express');
const router = express.Router();
const Goods = require('../schemas/goods');

// 상품 목록 조회 API
router.get('/goods', async (req, res) => {
    const { category } = req.query;
    console.log(category); // 전체를 조회할 때, category변수에는 데이터가 존재하지 않는다.

    const goods = await Goods.find(category ? { category } : {}) // 카테고리 값이 존재할 때는 category 형태로 조회 / 존재 X일 때는 모든 데이터를 카테고리 상관없이 조회.
        .sort('-date') // 내림차순으로 정렬
        .exec();

    const results = goods.map((item) => {
        return {
            goodsId: item.goodsId,
            name: item.name,
            price: item.price,
            thumbnailUrl: item.thumbnailUrl,
            category: item.category,
        };
    });
    res.status(200).json({ goods: results });
});

// 상품 상세 조회 API
router.get('/goods/:goodsId', async (req, res) => {
    const { goodsId } = req.params;

    const goods = await Goods.findOne({ goodsId: goodsId })
        .sort('-date') // 내림차순으로 정렬
        .exec();

    const result = {
        goodsId: goods.goodsId,
        name: goods.name,
        price: goods.price,
        thumbnailUrl: goods.thumbnailUrl,
        category: goods.category,
    };
    res.status(200).json({ goods: result });
});

module.exports = router;
