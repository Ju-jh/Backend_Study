const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email:{ // 중복이 된다고 했을 때,
        type: String,
        required: true,
        unique: true, // 동일한 정보가 존재할 수 없다.
    },
    nickname:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
})

UserSchema.virtual("userId").get(function () {
    return this._id.toHexString();
})

UserSchema.set("toJSON", {
    virtruals: true, // JSON 형태로 가공할 때, userId를 출력 시켜준다.
})

module.exports = mongoose.model("User",UserSchema);