import { browser } from "@wdio/globals";
import AxeBuilder from "@axe-core/webdriverio";

describe("Accessibility Test", () => {
	it("should not leak memory", async () => {
		const axe = new AxeBuilder({ client: browser });
		await browser.url("https://example.com/");
    console.info("Attach DevTools now.")
    await browser.pause(10000)
		for (let i = 0; i < 20; i++) {
			await axe.analyze();
		}
	});
});
