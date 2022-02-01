const { expect } = require("@jest/globals");
const { doesNotMatch } = require("assert");
const { default: expectationResultFactory } = require("jest-jasmine2/build/expectationResultFactory");
const { testNameToKey } = require("jest-snapshot/build/utils");

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test('Testa se a função uppercase está funcionando', (done) => {
    uppercase('gustavo', (str) => {
        try {
            expect(str).toBe('GUSTAVO');
            done();
        } catch(error) {
            done(error);
        }
    });
});
