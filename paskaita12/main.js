"use script"

/**
 * naudoti masyva: [0,1,2,3,4,5,6,7,8,9,10,11,12]
 * Naudojant for loop į console atvaizduoti tik tuos
 * elementus kurie dalinasi 4 ( pridėti ženklą "@" ) 
 * ir tuos elementus kurie yra 3 kartotiniai ( pridėti ženklą "*" )
 * 
 * O jeigu abu scenarijai teisingi pridėti ženklą "!"
 */

let x = [0,1,2,3,4,5,6,7,8,9,10,11,12]

for(let i = 0;i <= x.length;i++){
    if(i%4 == 0 && i%3 == 0 && i != 0){
        console.log(i + '!')
    }else if(i%4 == 0 && i != 0){
        console.log(i + '@')
    }else if(i%3 == 0 && i != 0){
        console.log(i + '*')
    }
}

let stringVar = 'abcdefgh';
let endResult = '';
for(let i = 0; i< stringVar.length; i++) {
    endResult=endResult + stringVar[i] + stringVar[i];
}
console.log(endResult)