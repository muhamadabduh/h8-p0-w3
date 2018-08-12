function targetTerdekat(arr) {
    var posisiO = []; //menampung posisi o pada array
    var posisiX = []; //menampung posisi x pada array
    var i = 0;
    while(i < arr.length){
        if(arr[i] === 'o'){
            posisiO.push(i);

        } else if (arr[i] === 'x'){
            posisiX.push(i);
        }
        i++;
    }

    var jarakXO = [];
    for (var j = 0; j < posisiX.length; j++){
        if(posisiX === [] || posisiO === []){
            return 0;
        } else {
            jarakXO.push(Math.abs(posisiX[j]-posisiO));
        }
    }

    jarakXO.sort();
    
    if(jarakXO[0] === undefined){
        return 0;
    } else {
        return jarakXO[0];
    }
    

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2