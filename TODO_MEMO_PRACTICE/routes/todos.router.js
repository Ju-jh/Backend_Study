const express = require("express");
const Todo = require("../models/todo.js");

const router = express.Router();

router.get("/", (req,res)=> {
    res.send("Hi");
})

// 할 일 추가 API
router.post("/todos", async(req,res)=>{
    const {value} = req.body;
    const maxOrderByUserId = await Todo.findOne().sort("-order").exec();

    const order = maxOrderByUserId 
        ? maxOrderByUserId.order + 1  // maxOrderByUserId 있을 때
        : 1; // maxOrderByUserId 없을 때

    const todo = new Todo({value, order});
    await todo.save();

    res.send({ todo });
})

// 할 일 목록 조회 API
router.get("/todos", async(req,res)=>{
    const todos = await Todo.find().sort("-order").exec();

    res.send({ todos });
})

// 할 일 순서 변경 API
router.patch("/todos/:todoId", async (req,res)=> {
    const {todoId} = req.params;
    const {order} = req.body;

    // 1. todoId에 해당하는 할 일이 있는가?
    // 1-1. todoId에 해당하는 할 일이 없으면, 저희는 에러를 출력해야합니다.
    const currentTodo = await Todo.findById(todoId);
    if (!currentTodo) {
        return res.status(400).json({"errorMessage":"존재하지 않는 할 일 입니다."})
    }

    if (order) {
        const targetTodo = await Todo.findOne({order}).exec();
        if(targetTodo) {
            targetTodo.order = currentTodo.order;
            await targetTodo.save();
        }
        currentTodo.order = order;
        await currentTodo.save();

    }

    res.send();
})

// 할 일 삭제 API
router.delete("/todos/:todoId", async (req, res) => {
    const { todoId } = req.params;
  
    const todo = await Todo.findById(todoId).exec();
    await todo.delete();
  
    res.send({});
  });


module.exports = router;