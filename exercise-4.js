//function 
function dataHandling(array2) {
    array2.splice([1], 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    array2.splice([4], 1, "Pria", "SMA Internasional Metro");
    var birthday = array2[3];
    var birthdaySplitted = birthday.split("/");
    // var birthdaySplittedNumber = [ Number(birthdaySplitted[0]), Number(birthdaySplitted[1]), Number(birthdaySplitted[2])];
    var newBirthdayFormat = birthdaySplitted.sort(function(value1, value2) { return value1 < value2 });
    var month = birthdaySplitted[1];
    switch(month){
        case '01' :
        month = 'Januari';
        break;

        case '02' :
        month = 'Februari';
        break;

        case '03' :
        month = 'Maret';
        break;

        case '04' :
        month = 'April';
        break; 

        case '05' : 
        month = 'Mei';
        break;

        case '06' : 
        month = 'Juni';
        break;

        case '07' : 
        month = 'Juli';
        break;

        case '08' : 
        month = 'Agustus';
        break;

        case '09' : 
        month = 'September';
        break;

        case '10' : 
        month = 'Oktober';
        break;

        case '11' : 
        month = 'November';
        break;

        case '12' : 
        month = 'Desember';
        break;

        default:
        text = "wrong month";
    }
    
    console.log(array2);
    console.log(month);
    console.log(newBirthdayFormat);
    // console.log(birthdaySplittedNumber[0].toString());
    
}


var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;

dataHandling(input);