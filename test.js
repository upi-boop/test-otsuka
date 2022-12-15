let message = `tonasi order sesuai `
let MOQ = 22;

if (MOQ < 21 || MOQ > 24){

    let DetailMessage = `Order Harus dengan range 21-24`;
    message = `Order Tidak Sesuai ${DetailMessage}`

}else if(MOQ < 42 || MOQ > 48){

    let DetailMessage = `Order Harus dengan range 42-48`;
    message = `Order Tidak Sesuai ${DetailMessage}`

}

let Point = `Tonase Input ${MOQ}`
console.log(message, Point)