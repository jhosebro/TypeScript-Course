const show3 = (name:string, lastName:string, age:number = 21) : void => {
    if(age){
        console.log(`Hello my name is ${name} and my lastname is ${lastName} and my age is ${age}`);
    }
    else{
    console.log(`Hello my name is ${name} and my lastname is ${lastName}`);
    }
}

show3('Jhoan', 'Rojas');
