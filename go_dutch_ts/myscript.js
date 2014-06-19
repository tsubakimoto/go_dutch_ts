var Dutch = (function () {
    function Dutch(amount, num, p) {
        this.amount = amount;
        this.num = num;
        this.result = p;
    }
    Dutch.prototype.toNumber = function (s) {
        return +s;
    };

    Dutch.prototype.calc = function () {
        var amount = this.toNumber(this.amount.value);
        var num = this.toNumber(this.num.value);
        var unit = 100;

        this.result.innerHTML = '';
        this.writeShortage(amount, num, unit);
        this.writeExtra(amount, num, unit);
    };

    Dutch.prototype.writeShortage = function (amount, num, unit) {
        var x = Math.floor((amount / num) / unit) * unit;
        var y = amount - (x * num);
        this.result.innerHTML += '一人' + x + '円だと' + y + '円足りません。';
    };

    Dutch.prototype.writeExtra = function (amount, num, unit) {
        var x = Math.ceil((amount / num) / unit) * unit;
        var y = (x * num) - amount;
        this.result.innerHTML += '一人' + x + '円だと' + y + '円余ります。';
    };
    return Dutch;
})();

window.onload = function () {
    var amount = document.getElementById('amount');
    var num = document.getElementById('num');
    var result = document.getElementById('result');
    var dutch = new Dutch(amount, num, result);
    document.getElementById('calc').onclick = function () {
        return dutch.calc();
    };
};
//# sourceMappingURL=myscript.js.map
