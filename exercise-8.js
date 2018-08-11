function pasanganTerbesar(num) {
    var stringNum = num.toString();
    var pasanganAngka = [];
    for (var i = 0; i < stringNum.length-1;i++){
        pasanganAngka.push(stringNum[i] + stringNum[i+1]);
    }

    pasanganAngka.sort();
    var maxAngka = pasanganAngka[pasanganAngka.length-1];
    return Number(maxAngka);
  }
  
  // TEST CASES
    console.log(pasanganTerbesar(641573)); // 73
    console.log(pasanganTerbesar(12783456)); // 83
    console.log(pasanganTerbesar(910233)); // 91
    console.log(pasanganTerbesar(71856421)); // 85
    console.log(pasanganTerbesar(79918293)); // 99
