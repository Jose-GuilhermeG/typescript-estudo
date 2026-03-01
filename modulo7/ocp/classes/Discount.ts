export abstract class Discount{
    public abstract calculate(value : number) : number;
}

export class FiftyPercentDiscount extends Discount{
    private readonly discount : number = 0.5;
    public calculate(value: number): number {
        return value - value * this.discount; 
    }
}
export class TenPercentDiscount extends Discount{
    private readonly discount : number = 0.1;
    public calculate(value: number): number {
        return value - value * this.discount; 
    }
}
export class TwentyPercentDiscount extends Discount{
    private readonly discount : number = 0.2;
    public calculate(value: number): number {
        return value - value * this.discount; 
    }
}

export class NoDiscount extends Discount{
    private readonly discount : number = 0;
    public calculate(value: number): number {
        return value - value * this.discount; 
    }
}