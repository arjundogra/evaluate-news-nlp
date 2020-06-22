import "@babel/polyfill"
import { CheckURL } from "./nameChecker";
const { TestScheduler } = require('jest');

test('Checking Valid URL', () => {
    expect(CheckURL('https://google.com')).toBe(true);
});

test('Checking For Invalid URL', () => {
    expect(CheckURL('thatisnotaurl')).toBe(false)
});