const publicSubjectModule = require('../src/dislexicon');
const subjectModule = publicSubjectModule.private;

const runSimpleTest = (
  subjectModule,
  methodName,
  paramsAndExpectedResults,
  expectationMethod
) => {
  describe(`#${methodName}`, () => {
    const testMethod = (param, expectedResult) => {
      test(
        `when ${JSON.stringify(param)}
        should return ${JSON.stringify(expectedResult)}`,
        expectationMethod(subjectModule, methodName, param, expectedResult)
      );
    };

    paramsAndExpectedResults.forEach((pair) => {
      testMethod(pair.param, pair.expectedResult);
    });
  });
};

const simpleExpectation = (subjectModule, methodName, param, expectedResult) =>
  () => expect(subjectModule[methodName](param)).toEqual(expectedResult);

const simpleExpectationWithMultipleParams =
  (subjectModule, methodName, param, expectedResult) =>
    () => expect(subjectModule[methodName](...param)).toEqual(expectedResult);

describe('Dislexicon.public', () => {
  test('only truth', () => {
    expect(publicSubjectModule.truth()).toEqual(true);
  });
});
