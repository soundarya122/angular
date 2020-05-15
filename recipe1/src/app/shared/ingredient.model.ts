export class Ingredient{
    public name: string;
    public amount: number;

    constructor(n: string, a: number){
        this.amount = a;
        this.name = n;
    }
}