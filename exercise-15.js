/*

Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.


*/

function groupAnimals(animals) {
    var kelompokBinatang = [];
    animals.sort();
    var hurufDepan = [];
    
    for (var i = 0; i < animals.length; i++){
        hurufDepan.push(animals[i][0]);
    }

    var count = 0;
    for (var j = 0; j < hurufDepan.length; j++){
        if (hurufDepan[j] === hurufDepan[j+1]){
            count += 1;
        }
    }

    for (var k = 0; k <= count; k++){
        kelompokBinatang.push([]);
    }
    kelompokBinatang[0].push(animals[0]);
    // for (var x = 0; x < animals.length; x++){
        
    //     if(animals[x][0] === animals[x+1][0]){
    //         kelompokBinatang.push(animals[x+1]);
    //     } else if (animals)
    // }
    
    // return animals[2][0];
    return kelompokBinatang;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]