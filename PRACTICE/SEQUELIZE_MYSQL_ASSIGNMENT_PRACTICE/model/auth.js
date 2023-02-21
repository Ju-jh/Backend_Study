import SQ from 'sequelize';
import { sequelize } from './database.js';

const DataType = SQ.DataTypes;

export const User = sequelize.define(
    // users 라는걸 정의 한다면, 객체에 있는 정보와 같다.
    'users',
    {
        // userId: 회원에게 부여된 숫자번호
        userId: {
            type: DataType.INTEGER, // INTEGER 타입
            autoIncrement: true, // AUTO_INCREMENT
            allowNull: false, // NULL 값은 허용하지 않음
            primaryKey: true, // 기본키
        },
        // nickname: 닉네임
        nickname: {
            type: DataType.STRING(45), // STRING 타입
            allowNull: false, // NULL 값은 허용하지 않음
        },
        // password: 패스워드
        password: {
            type: DataType.STRING(128), // STRING 타입
            allowNull: false, // NULL 값은 허용하지 않음
        },
    },
    {
        timestamps: false,
    }
);

// signup 생성하기
export async function createUser(users) {
    return User.create(users).then((data) => data.dataValues.userId);
}

export async function findByUsername(nickname) {
    return User.findOne({ where: { nickname: nickname } });
}
