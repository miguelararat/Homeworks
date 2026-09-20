

export class Person{
    name : string;
    withdrawalAmount : number | null;
    arrivalDate :  number = Math.random();

    constructor(name : string, withdrawalAmount : number | null){
        this.name = name;
        this.withdrawalAmount = withdrawalAmount;
    }
}