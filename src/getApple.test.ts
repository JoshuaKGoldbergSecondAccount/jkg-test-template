import { describe, expect, it } from "vitest";

import { getApple } from "./getApple.js";

describe("getApple", () => {
	it("returns 'apple'", () => {
		const actual = getApple();

		expect(actual).toBe("apple");
	});
});
