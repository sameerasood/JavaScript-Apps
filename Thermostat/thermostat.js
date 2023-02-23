class Thermostat {
  constructor() {
    this.currentTemp = 20;
    this.powerSave = true;
  }

  up() {
    if (this.powerSave && this.currentTemp < 25) {
      this.currentTemp += 1;
    } else if (!this.powerSave && this.currentTemp < 32) {
      this.currentTemp += 1;
    }
  }

  down() {
    if (this.currentTemp > 10) {
      this.currentTemp -= 1;
    }
  }

  getTemperature() {
    return this.currentTemp;
  }

  setPowerSavingMode(OnOff) {
    return (this.powerSave = OnOff);
  }

  reset() {
    return (this.currentTemp = 20);
  }

  energyUsage() {
    if (this.currentTemp < 18) {
      return "low usage";
    } else if (this.currentTemp <= 25) {
      return "medium usage";
    } else {
      return "high usage";
    }
  }
}

module.exports = Thermostat;
