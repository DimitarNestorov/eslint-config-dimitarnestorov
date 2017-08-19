var spacingBeforeAfterFalse = {
	before: false,
	after: false
};

module.exports = {
	rules: {
		"no-undef": "error",
		eqeqeq: "error", // == sucks
		"comma-dangle": ["error", "never"], // I'm working on a solution regarding source control syntax decisions
		"no-const-assign": "error",
		"no-this-before-super": "error",
		"no-unreachable": "error", // break after return in a switch is my favourite
		"no-unused-vars": ["error", {
			args: "all",
			argsIgnorePattern: "^_"
		}], // just because of frameworks
		"constructor-super": "error",
		"valid-typeof": "error", // typeof variable !== undefined, we've all done this
		semi: "error", // CoffeScript is guilty, even TypeScript enforces it
		"wrap-iife": ["error", "outside"],
		"eol-last": ["error", "never"], // I'm working on a solution regarding source control syntax decisions
		"no-trailing-spaces": "error",
		"dot-notation": "error",
		camelcase: "error",
		"prefer-const": "error",
		"no-mixed-operators": ["error", {
			groups: [
				["+", "-", "*", "/", "%", "**"],
				["&", "|", "^", "~", "<<", ">>", ">>>"],
				["==", "!=", "===", "!==", ">", ">=", "<", "<="],
				["&&", "||"],
				["in", "instanceof"]
			],
			allowSamePrecedence: true
		}],
		"no-extra-parens": "error",
		"no-multi-spaces": "error",
		"no-mixed-spaces-and-tabs": "error",
		"space-before-blocks": ["error", {
			functions: "never",
			keywords: "never",
			classes: "always"
		}],
		"arrow-spacing": "error",
		"keyword-spacing": ["error", {
			overrides: {
				do: {
					after: true
				},
				while: spacingBeforeAfterFalse,
				if: spacingBeforeAfterFalse,
				else: spacingBeforeAfterFalse,
				return: {
					after: true
				}
			}
		}],
		"key-spacing": ["error", {
			beforeColon: false,
			afterColon: true,
			mode: "strict"
		}],
		"object-shorthand": ["error", "always", {
			avoidQuotes: true
		}],
		indent: ["error", "tab"], // I'm working on a solution regarding this rule and everyones preference
		"quote-props": ["error", "as-needed"]
	}
};