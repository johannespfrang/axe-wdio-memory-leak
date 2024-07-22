import { browser } from "@wdio/globals";
import AxeBuilder from "@axe-core/webdriverio";

describe("Accessibility Test", () => {
	it("should not leak memory", async () => {
		const axe = new AxeBuilder({ client: browser });
		await browser.url("https://example.com/");
		console.info("Attach DevTools now.");
		await browser.pause(5000);
		console.info("Starting...");
		for (let i = 0; i < 50; i++) {
			await axe.analyze();
			const heapSize = process.memoryUsage().heapUsed / 1024 / 1024;
			console.log(`Heap allocated ${heapSize} MB`);
		}
		console.info("Done.");
		await browser.debug();
	});
});
