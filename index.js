var noSpacing = {
	before: false,
	after: false
};

var spacingAfter = {
	after: true
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
				do: spacingAfter,
				while: noSpacing,
				if: noSpacing,
				else: noSpacing,
				for: noSpacing,
				switch: noSpacing,
				try: spacingAfter,
				catch: noSpacing,
				finally: noSpacing,
				return: spacingAfter
			}
		}], // I'm working on a solution regarding this rule and everyones preference
		"key-spacing": ["error", {
			beforeColon: false,
			afterColon: true,
			mode: "strict"
		}], // I'm working on a solution regarding this rule and everyones preference
		"object-shorthand": ["error", "always", {
			avoidQuotes: true
		}],
		indent: ["error", "tab", {
			SwitchCase: 1
		}], // I'm working on a solution regarding this rule and everyones preference
		"quote-props": ["error", "as-needed"], // I'm working on a solution regarding this rule and everyones preference
		"no-extra-parens": ["error", "all", {
			nestedBinaryExpressions: false
		}],
		"no-multiple-empty-lines": ["error", {
			max: 1
		}],
		"padded-blocks": ["error", "never"],
		"space-before-function-paren": ["error", "never"],
		quotes: ["error", "backtick", {
			avoidEscape: true
		}],
		"no-restricted-globals": [
			"error",
			{
				name: "event",
				message: "Use local parameter instead."
			},
			{
				name: "close",
				message: "Use window.close or define close."
			}
		],
		"no-var": "error",
		"space-in-parens": ["error", "never"]
	}
};