/*

Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.


*/

function groupAnimals(animals) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    // var hurufDepan = [];
    var kandangUtama = [];
    
    for(var i = 0; i < abjad.length; i++){
        var kandangKecil = [];
        for(var j = 0; j < animals.length; j++){
            if(animals[j][0] === abjad[i]){
                kandangKecil.push(animals[j]);
            }
        }
        if(kandangKecil.length !== 0){
            kandangUtama.push(kandangKecil);
        }
    }
    
    return kandangUtama;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]