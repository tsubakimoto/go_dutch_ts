class Dutch {
    amount: HTMLInputElement;
    num: HTMLInputElement;
    result: HTMLElement;

    constructor(amount: HTMLInputElement, num: HTMLInputElement, p: HTMLElement) {
        this.amount = amount;
        this.num = num;
        this.result = p;
    }

    toNumber(s: string) {
        return +s;
    }

    calc() {
        var amount = this.toNumber(this.amount.value);
        var num = this.toNumber(this.num.value);
        var unit = 100;

        this.result.innerHTML = '';
        this.writeShortage(amount, num, unit);
        this.writeExtra(amount, num, unit);
    }

    writeShortage(amount, num, unit) {
        var x = Math.floor((amount / num) / unit) * unit;
        var y = amount - (x * num);
        this.result.innerHTML += '一人' + x + '円だと' + y + '円足りません。';
    }

    writeExtra(amount, num, unit) {
        var x = Math.ceil((amount / num) / unit) * unit;
        var y = (x * num) - amount;
        this.result.innerHTML += '一人' + x + '円だと' + y + '円余ります。';
    }
}

window.onload = () => {
    var amount = <HTMLInputElement>document.getElementById('amount');
    var num = <HTMLInputElement>document.getElementById('num');
    var result = document.getElementById('result');
    var dutch = new Dutch(amount, num, result);
    document.getElementById('calc').onclick = () => dutch.calc();
}