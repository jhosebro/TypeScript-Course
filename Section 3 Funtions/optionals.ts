const optionals = (name:string, lastName:string, age?:number) : void => {
    if(age){
        console.log(`Hello my name is ${name} and my lastname is ${lastName} and my age is ${age}`);
    }
    else{
    console.log(`Hello my name is ${name} and my lastname is ${lastName}`);
    }
}

optionals('Jhoan', 'Rojas');
optionals('Jhoan', 'Rojas', 22);