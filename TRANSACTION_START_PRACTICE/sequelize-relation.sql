CREATE TABLE Users
(
    userId    int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email     varchar(255) UNIQUE NOT NULL,
    password  varchar(255)        NOT NULL,
    createdAt datetime            NOT NULL DEFAULT NOW(),
    updatedAt datetime            NOT NULL DEFAULT NOW()
);


CREATE TABLE UserInfos
(
    userInfoId   int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserId       int(11) UNIQUE NOT NULL, -- 1:1 관계 이므로 UNIQUE 조건을 삽입합니다.
    name         varchar(255) NOT NULL,
    age          int(11) NOT NULL,
    gender       varchar(255) NOT NULL,
    profileImage varchar(255) NULL,
    createdAt    datetime     NOT NULL DEFAULT NOW(),
    updatedAt    datetime     NOT NULL DEFAULT NOW()
);

ALTER TABLE UserInfos
    ADD CONSTRAINT FK_UserInfos_Users
        FOREIGN KEY (UserId) REFERENCES Users (userId) ON DELETE CASCADE;


CREATE TABLE Posts
(
    postId    int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserId    int(11) NOT NULL,
    title     varchar(255) NOT NULL,
    content   varchar(255) NOT NULL,
    createdAt datetime     NOT NULL DEFAULT NOW(),
    updatedAt datetime     NOT NULL DEFAULT NOW()
);

ALTER TABLE Posts
    ADD CONSTRAINT FK_Posts_Users
        FOREIGN KEY (UserId) REFERENCES Users (userId) ON DELETE CASCADE;


CREATE TABLE Comments
(
    commentId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserId    int(11) NOT NULL,
    PostId    int(11) NOT NULL,
    comment   varchar(255) NOT NULL,
    createdAt datetime     NOT NULL DEFAULT NOW(),
    updatedAt datetime     NOT NULL DEFAULT NOW()
);

ALTER TABLE Comments
    ADD CONSTRAINT FK_Comments_Posts
        FOREIGN KEY (PostId) REFERENCES Posts (postId) ON DELETE CASCADE;

ALTER TABLE Comments
    ADD CONSTRAINT FK_Comments_Users
        FOREIGN KEY (UserId) REFERENCES Users (userId) ON DELETE CASCADE;