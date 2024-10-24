export function kebab(str) {
	return str.replace(/\b([A-Z][a-z]*)+\b/g, (n) => n.replace(/(?<!\b)([A-Z])/g, "-$1").toLowerCase());
}
