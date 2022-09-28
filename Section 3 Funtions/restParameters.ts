const dessertMenu = (dessert:string, ...fruits:string[]) : void => {
    console.log(`My favorite dessert is ${dessert} and this dessert has this ${fruits}`);
}

dessertMenu('Ice Cream', 'Banana', 'Apple', 'Orange', 'Strawberry');