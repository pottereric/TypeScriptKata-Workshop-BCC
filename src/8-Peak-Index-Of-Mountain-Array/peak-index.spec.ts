import { READY_TO_TEST, findPeak } from './peak-index'

(READY_TO_TEST ? test : test.skip)('middle of 3', () => {
    let result = findPeak([0,1,0]);
    expect(result).toStrictEqual(1);
});

(READY_TO_TEST ? test : test.skip)('second of 4', () => {
    let result = findPeak([0,2,1,0]);
    expect(result).toStrictEqual(1);
});

(READY_TO_TEST ? test : test.skip)('second of 4b', () => {
    let result = findPeak([0,10,5,2]);
    expect(result).toStrictEqual(1);
});

(READY_TO_TEST ? test : test.skip)('middle of 9', () => {
    let result = findPeak([0,1,2,3,4,5,2,1,0]);
    expect(result).toStrictEqual(5);
});
