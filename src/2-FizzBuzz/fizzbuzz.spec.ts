import { READY_TO_TEST, solve } from './fizzbuzz'

(READY_TO_TEST ? test : test.skip)('2 should return 2', () => {
    let result = solve(2);
    expect(result).toStrictEqual("2");
});

(READY_TO_TEST ? test : test.skip)('1 should return 1', () => {
    let result = solve(1);
    expect(result).toStrictEqual("1");
});

(READY_TO_TEST ? test : test.skip)('3 should return fizz', () => {
    let result = solve(3);
    expect(result).toStrictEqual("fizz");
});

(READY_TO_TEST ? test : test.skip)('6 should return fizz', () => {
    let result = solve(6);
    expect(result).toStrictEqual("fizz");
});

(READY_TO_TEST ? test : test.skip)('5 should return buzz', () => {
    let result = solve(5);
    expect(result).toStrictEqual("buzz");
});

(READY_TO_TEST ? test : test.skip)('15 should return fizzbuzz', () => {
    let result = solve(15);
    expect(result).toStrictEqual("fizzbuzz");
});
