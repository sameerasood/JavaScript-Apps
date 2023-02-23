const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("returns temp 20 when getTemperature() is called", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns temperature 22", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("returns temp 21", () => {
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("returns temp 25", () => {
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("returns temp when power save mode is off", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(30);
  });

  it("returns temp 20", () => {
    thermostat.up();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});
