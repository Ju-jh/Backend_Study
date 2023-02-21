# node_express_study

항해99 팀원들과 스터디로 학습하며, express 사용에 있어서 전반적인 flow 나 logic 천천히 복습 해 보는 시간 갖기 위해 만들어짐.

GitHub 이용하여 repo에 commit, push하고 GitHub 친숙해지기

해당 주소에 Express 용어 정리 해놨음 ===> https://jrogrammer.tistory.com/182

해당 주소에 req.params 와 req.body의 차이 정리해놈 ===> https://jrogrammer.tistory.com/189

# node_posting_assignment 과제제출용

🚩 **Requirement: 과제에 요구되는 사항이에요.**

- `1) 서비스 완성`, `2) Directory Structure`, `3) AWS 배포` 세 가지를 모두 완수해야 합니다.

  ✅ 서비스 완성

  1. 전체 게시글 목록 조회 API
     - 제목, 작성자명, 작성 날짜를 조회하기
     - 작성 날짜 기준으로 내림차순 정렬하기
  2. 게시글 작성 API
     - 제목, 작성자명, 비밀번호, 작성 내용을 입력하기
  3. 게시글 조회 API
     **`(2월 6일(월)까지 17:00완료)`**
     - 제목, 작성자명, 작성 날짜, 작성 내용을 조회하기
       (검색 기능이 아닙니다. 간단한 게시글 조회만 구현해주세요.)
  4. 게시글 수정 API
     - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 수정되게 하기
  5. 게시글 삭제 API
     - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 삭제되게 하기
  6. 댓글 목록 조회
     - 조회하는 게시글에 작성된 모든 댓글을 목록 형식으로 볼 수 있도록 하기
     - 작성 날짜 기준으로 내림차순 정렬하기
  7. 댓글 작성
     **`(2월 7일(화)까지 17:00완료)`** - 댓글 내용을 비워둔 채 댓글 작성 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기 - 댓글 내용을 입력하고 댓글 작성 API를 호출한 경우 작성한 댓글을 추가하기
  8. 댓글 수정
     - 댓글 내용을 비워둔 채 댓글 수정 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
     - 댓글 내용을 입력하고 댓글 수정 API를 호출한 경우 작성한 댓글을 수정하기
  9. 댓글 삭제
     **`(2월 8일(수)까지 17:00완료)`** - 원하는 댓글을 삭제하기

  ✅ Directory Structure

  ```
  .
  ├── app.js
  ├── routes
  │   ├── index.js
  │   ├── comments.js
  │   └── posts.js
  └── schemas
      ├── index.js
      ├── comment.js
      └── post.js
  ```

  1. Directory Structure
     - 위와 같은 Directory Structure로 서비스를 구현하기
     - Middleware를 이용하여 Router를 분리해주세요.

  ✅ AWS 배포

  1. EC2 배포
     - Ubuntu EC2 를 구매한 뒤, 노드 포트(3000)를 80번 포트로 포워딩해서 포트 번호 없이도 서비스에 접속 가능하도록 하기
       → 수업시간에 배웠던 iptable을 사용하기
     - mongoDB를 EC2 내부에 설치해서 연결하기
     - 배포 후 ip 주소를 제출해주세요!

❓ **Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.**

1. 수정, 삭제 API에서 Resource를 구분하기 위해서 Request를 어떤 방식으로 사용하셨나요? (`param`, `query`, `body`)
2. HTTP Method의 대표적인 4가지는 `GET`, `POST`, `PUT`, `DELETE` 가있는데 각각 어떤 상황에서 사용하셨나요?
3. RESTful한 API를 설계했나요? 어떤 부분이 그런가요? 어떤 부분이 그렇지 않나요?
4. 역할별로 Directory Structure를 분리하였을 경우 어떠한 이점이 있을까요?
