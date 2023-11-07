import { terser } from "rollup-plugin-terser"
import babel from "rollup-plugin-babel"

export default {
	input: "./src/index.js",
	output: {
		file: "./lib/lonjin-helper.js",
		format: "esm",
		name: "lonjin-helper"
	},
	plugins: [
		babel({
			exclude: "node_modules/**"
		}),
		terser()
	]
}



