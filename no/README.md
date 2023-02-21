# 코딩테스트 (12기 Node.js)


<details>
<summary>목차</summary>
<div markdown="1">
<ul>
  <li><a href="https://github.com/99-12-node/program-us-node#%EC%A4%80%EB%B9%84%ED%95%98%EA%B8%B0">준비하기</a></li>
  <li><a href="https://github.com/99-12-node/program-us-node#%EB%B0%9C%ED%91%9C-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC">발표 히스토리</a></li>
  <li><a href="https://github.com/99-12-node/program-us-node#reference">reference</a></li>
</ul>
</div>
</details>


## 준비하기

### 1. 레포지토리를 자신의 계정으로 fork하기

### 2. fork한 저장소를 자신의 컴퓨터로 clone하기
```
git clone https://github.com/{본인_아이디}/{저장소 아이디}.git

// 프로젝트로 폴더 이동
cd {저장도 아이디}.git 
ex) cd program-us-node
```

### 3. 브랜치 생성
```
git checkout -b {본인 아이디}
```

### 4. 해당되는 문제 풀고 add, commit
`level-0/${영문이름}/${문제번호}.js` 처럼 레벌 폴더 아래에 자신의 영문이름 폴더를 만들고, 문제 번호로 파일에서 문제를 풉니다.
```git status // 변경된 파일 확인
git add -A(또는 .) // 변경된 전체 파일을 한번에 반영
git commit -m "feat: ${문제번호} 풀이 추가" // 작업한 내용을 메시지에 기록
```
### 5. 본인 원격 저장소에 올리기
```
git push origin 브랜치이름
```
### 6. github 서비스에서 Pull Request를 보내기
Pull Request는 original 저장소의 main 브랜치와 앞 단계에서 생성한 브랜치 이름을 기준으로 합니다.
```
Github 에서 작업한 브랜치의 Compare & Pull Request를 보낸다.
브랜치를 작업 브랜치로 변경
브랜치 오른쪽에 있는 "New pull request" 버튼 클릭
```
- Pull Request 제목은 `feat: [$문제번호, $문제번호, ...] $이름`으로 진행합니다.
- 작업한 내용을 입력하고 "Create pull request" 버튼을 클릭해 Pull Request를 보내주세요.
<img width="870" alt="image" src="https://user-images.githubusercontent.com/35288895/213533928-8afdc6e8-f9bd-49db-9bb4-fc33de82d54f.png">


## 발표 히스토리

| 날짜 | 문제번호 | 담당자 | 완료 | 
| --- | --- |  --- | --- | 
| 2023-01-19  | [120898](https://school.programmers.co.kr/learn/courses/30/lessons/120898), [120902](https://school.programmers.co.kr/learn/courses/30/lessons/120902) | 남혜민 | [#1](https://github.com/99-12-node/program-us-node/pull/1) | 
| 2023-01-20  | [120892](https://school.programmers.co.kr/learn/courses/30/lessons/120892) | 남혜민 |  | 
| 2023-01-20  | [120807](https://school.programmers.co.kr/learn/courses/30/lessons/120807), [120805](https://school.programmers.co.kr/learn/courses/30/lessons/120805), [120803](https://school.programmers.co.kr/learn/courses/30/lessons/120803) |  |  |



### reference
[참고자료](https://github.com/woowacourse/woowacourse-docs/tree/main/precourse)
