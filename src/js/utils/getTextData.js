export function getTextData(block) {
	// get text data or ''

	if (!block) {
		return "";
	}

	return block.textContent.trim();
}
