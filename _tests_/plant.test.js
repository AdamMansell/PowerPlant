import Plant from '../src/js/plant.js';

describe('SolarYears', () => {
  let plant = new Plant();
  
  test('should correctly return the expected value equal to the received value', () => {
    service.function();
    expect(service.received).toEqual(expected);
  });
});
