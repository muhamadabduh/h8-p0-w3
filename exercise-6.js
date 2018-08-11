function angkaPalindrome(num) {
    
        if(num < 10){
            num = num + 1;
            return num;
        } else if (num >= 10){
            var check = false;
            while(check === false){
                var stringNum = num.toString();
                var reverseString = stringNum.split('').reverse().join('');
                if(reverseString === stringNum){
                check = true;
            } else {
                num += 1;
            }
            
        }
        return num;
    }

    
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

