import { describe, expect, it } from "vitest";

import { getBanana } from "./getBanana.js";

describe("getBanana", () => {
	it("returns 'banana'", () => {
		const actual = getBanana();

		expect(actual).toBe("banana");
	});
});
