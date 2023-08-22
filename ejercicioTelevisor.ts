class Televisor {
   private isOn: boolean;
   private volume: number;
   private channel: number;

  constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
    this.isOn = on;
    this.volume = Math.max(0, Math.min(vol, 100)); // Limit volume between 0 and 100
    this.channel = Math.max(1, Math.min(chn, 99)); // Limit channel between 1 and 99
  }

  switchOnOff(): void {
    this.isOn = !this.isOn;
    console.log(this.isOn ? "encendido" : "apagado");
  }

  volUp(): void {
    if (this.isOn) {
      this.volume = Math.min(this.volume + 1, 100);
      console.log("vol up");
    }
  }

  volDown(): void {
    if (this.isOn) {
      this.volume = Math.max(this.volume - 1, 0);
      console.log("vol down");
    }
  }

  channelUp(): void {
    if (this.isOn) {
      this.channel = this.channel < 99 ? this.channel + 1 : 1;
      console.log("channel up");
    }
  }

  channelDown(): void {
    if (this.isOn) {
      this.channel = this.channel > 1 ? this.channel - 1 : 99;
      console.log("channel down");
    }
  }

  pickChannel(channel: number): void {
    if (this.isOn) {
      this.channel = Math.max(1, Math.min(channel, 99));
      console.log("Cambiaste al canal", this.channel);
    }
  }

  info(): void {
    if (this.isOn) {
      console.log(`Canal: ${this.channel}, Volumen: ${this.volume}, Hora actual: ${new Date().toLocaleTimeString()}`);
    } else {
      console.log("El televisor está apagado.");
    }
  }
}

const tv01 = new Televisor();
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
