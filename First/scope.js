let a =10 // Global scope
function outer (){

    let b =20 // Outer scope
    function inner(){
        let c =30 // Inner scope
        console.log(a,b,c)
    }
    inner()
}
outer()