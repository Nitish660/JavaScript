function person(fname,lname){
    this.firstname =fname
    this.Lastname = lname

}

const person1 = new person('Nitish','Kumar')

person1.getFullName = function(){
    return this.firstname + ' ' + this.Lastname
}
console.log(person1.getFullName())