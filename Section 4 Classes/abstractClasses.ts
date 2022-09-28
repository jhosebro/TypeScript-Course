abstract class Father3 {
    abstract getAge(): number;
    abstract getName(): string;
    abstract walk(): void;
    abstract talk(): void;

    sitting(sit:string){
        console.log(`The father is ${sit}`);
    }
}

class child extends Father3 {
    getAge(): number {
        return 25;
    }
    getName(): string {
        return 'Jhoan';
    }
    walk(): void {
        console.log('The child is walking');
    }
    talk(): void {
        console.log('The child is talking');
    }
}

class OtherClass extends Father3 {
    getAge(): number {
        return 30;
    }
    getName(): string {
        return 'Jane';
    }
    walk(): void {
        console.log('The other class is walking');
    }
    talk(): void {
        console.log('The other class is talking');
    }
}