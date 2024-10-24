import { atrWithoutQuote } from "./atrWithoutQuote";
import { kebab } from "./kebab";

function formatObjectToString(object) {
	let string = "";
	Object.keys(object).forEach((key) => {
		if (atrWithoutQuote.includes(key)) {
			string += `${key}=${object[key]} `;
			return;
		}

		string += `${kebab(key)}="${object[key]}" `;
	});

	return;
}
