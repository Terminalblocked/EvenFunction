function even(a) { // ֆունկցիա որը վերադարձնում է իրեն տրված արժեքը զույգ է թե կենտ
    if(typeof(a) == "number") { // ստուգում ենք, a - ն թիվ է թե ոչ
        if(a % 2 == 0) { // եթե թիվ է և եթե զույգ է
            alert("Number is even"); // տպում ենք որ զույգ է
            console.log("There are several other even numbers before this number " + a); // հիմա տպում ենք թե a - ից առաջ քանի զույգ թիվ կա
            for(let i = 1; i < a; i++) {
                if(i % 2 == 0) {
                    console.log(i);
                }
            }
        } else { // եթե թիվ է բայց զույգ չէ
            alert("Number is odd"); // տպում ենք որ կենտ է
            console.log("There are several other odd numbers before number " + a); // հիմա տպում ենք թե a - ից առաջ քանի կենտ թիվ կա
            for(let i = 1; i < a; i++) {
                if(i % 2 !== 0) {
                    console.log(i);
                }
            }
        }
    } else { // եթե թիվ չէ հակառակ դեպքում
        alert("Not a number!"); // տպում ենք որ թիվ չէ
    }
    
}

function call() { // ֆունկցիա որը կանչում է even ֆունկցիան
    const answer = +prompt("Enter a number"); // user - ից ստանում ենք թիվ
    if(isNaN(answer)) { // ստուգում ենք եթե user - ը թիվ չի մուտքագրել
        alert("Not a number!"); // տպում ենք որ մուտքագրված արժեքը թիվ չէ
        even(+prompt("Enter a number")); // նորից կանչում ենք even ֆունկցիան
    } else { // եթե ֆսյո տակի թիվ է մուտքագրել user - ը
        even(answer); // կանչում ենք even - ֆունկցիան իր մուտքագրած արժեքով
    }
}

call(); // կանչում ենք call ֆունկցիան