async function main() {
    function first(){
        console.log("set Time Out이 실행되었습니다.");
    }

    console.log("코드가 실행되었습니다.");
    setTimeout(first, 1000); // 1초 뒤에 first 함수를 실행하라.
    console.log("코드가 종료되었습니다.");


}

main();