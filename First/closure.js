// closure is a combination of a function buncled together with refrences to its surrounding state. 
// it is created every time a function is created at fucntion creatiin timer

 function outer(){
    let counter = 0
    function inner (){
        counter++
        console.log(counter)
    }
    return inner
 }
 const fn = outer()
 fn() // Output: 1
    fn()  // Output: 2