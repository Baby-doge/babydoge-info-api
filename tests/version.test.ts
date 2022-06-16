import { version } from "../package.json";

test('check project version is current', () => {
  expect(version).toBe("1.0.0");
});