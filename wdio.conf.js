/** @type {import("@wdio/types").Options.Testrunner} */
export const config = {
	outputDir: "./out",
	execArgv: ["--inspect"], // debug worker memory leak
	runner: "local",
	specs: ["./spec.js"],
	maxInstances: 1,
	capabilities: [
		{
			maxInstances: 1,
			browserName: "chrome",
			browserVersion: undefined,
		},
	],
	logLevel: "info",
	framework: "mocha",
	reporters: ["spec"],
	/** @type {import('mocha').MochaOptions} */
	mochaOpts: {
		ui: "bdd",
		timeout: 1 * 60 * 60 * 1000, // 1h
	},
	autoCompileOpts: {
		autoCompile: false,
	},
};
