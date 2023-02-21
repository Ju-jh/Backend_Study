function solution(cipher, code) {
    let screte = '';
    
     for (let i = 1; i < cipher.length + 1 ; i++) {
        
             screte += String(cipher.charAt(code * i - 1));
         } 
         return screte;
}

//120892 반례 abc,1 