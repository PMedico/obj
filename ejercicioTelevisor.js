var Televisor = /** @class */ (function () {
    function Televisor(on, vol, chn) {
        if (on === void 0) { on = false; }
        if (vol === void 0) { vol = 0; }
        if (chn === void 0) { chn = 0; }
        this.isOn = on;
        this.volume = Math.max(0, Math.min(vol, 100)); // Limit volume between 0 and 100
        this.channel = Math.max(1, Math.min(chn, 99)); // Limit channel between 1 and 99
    }
    Televisor.prototype.switchOnOff = function () {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "encendido" : "apagado");
    };
    Televisor.prototype.volUp = function () {
        if (this.isOn) {
            this.volume = Math.min(this.volume + 1, 100);
            console.log("vol up");
        }
    };
    Televisor.prototype.volDown = function () {
        if (this.isOn) {
            this.volume = Math.max(this.volume - 1, 0);
            console.log("vol down");
        }
    };
    Televisor.prototype.channelUp = function () {
        if (this.isOn) {
            this.channel = this.channel < 99 ? this.channel + 1 : 1;
            console.log("channel up");
        }
    };
    Televisor.prototype.channelDown = function () {
        if (this.isOn) {
            this.channel = this.channel > 1 ? this.channel - 1 : 99;
            console.log("channel down");
        }
    };
    Televisor.prototype.pickChannel = function (channel) {
        if (this.isOn) {
            this.channel = Math.max(1, Math.min(channel, 99));
            console.log("Cambiaste al canal", this.channel);
        }
    };
    Televisor.prototype.info = function () {
        if (this.isOn) {
            console.log("Canal: ".concat(this.channel, ", Volumen: ").concat(this.volume, ", Hora actual: ").concat(new Date().toLocaleTimeString()));
        }
        else {
            console.log("El televisor está apagado.");
        }
    };
    return Televisor;
}());
var tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);
tv01.volUp();
tv01.volDown();
tv01.channelUp();
tv01.channelDown();
tv01.pickChannel(99);
tv01.volUp();
tv01.info();
