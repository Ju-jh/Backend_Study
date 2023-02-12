// - **Posts 테이블 migration 요구사항**
//     - `postId`
//         - 기본키, `AUTO_INCREMENT`
//         - `NULL`은 허용하지 않음
//         - `INTEGER` 타입

//     - `title`
//         - `NULL`은 허용하지 않음
//         - `STRING` 타입

//     - `content`
//         - `NULL`은 허용하지 않음
//         - `STRING` 타입

//     - `password`
//         - `NULL`은 허용하지 않음
//         - `STRING` 타입

//     - `createdAt`
//         - `NULL`은 허용하지 않음
//         - `DATE` 타입
//         - 아무런 값을 입력하지 않았을 때, 현재 시간이 삽입됨

//     - `updatedAt`
//         - `NULL`은 허용하지 않음
//         - `DATE` 타입
//         - 아무런 값을 입력하지 않았을 때, 현재 시간이 삽입됨

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            postId: {
                allowNull: false, // NULL을 허용하지 않음
                autoIncrement: true, // AUTO_INCREMENT
                primaryKey: true, // 기본키
                type: Sequelize.INTEGER, // INTEGER 타입
            },
            title: {
                type: Sequelize.STRING, // STRING 타입
                allowNull: false, // NULL을 허용하지 않음
            },
            content: {
                type: Sequelize.STRING, // STRING 타입
                allowNull: false, // NULL을 허용하지 않음
            },
            password: {
                type: Sequelize.STRING, // STRING 타입
                allowNull: false, // NULL을 허용하지 않음
            },
            createdAt: {
                type: Sequelize.DATE, // DATE 타입
                allowNull: false, // NULL을 허용하지 않음
                defaultValue: Sequelize.fn('now'), // 아무런 값을 입력하지 않을 때, 기본값을 어떤것으로 설정할 것인가?
            },
            updatedAt: {
                type: Sequelize.DATE, // DATE 타입
                allowNull: false, // NULL을 허용하지 않음
                defaultValue: Sequelize.fn('now'), // 아무런 값을 입력하지 않을 때, 기본값을 어떤것으로 설정할 것인가?
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Posts');
    },
};
