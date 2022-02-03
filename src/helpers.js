function choice(items) {
	const idx = Math.floor(Math.random() * items.length);
	return items[idx];
}

function remove(items, item) {
	for (let i of items) {
		if (i === item) {
			return items.filter((i) => i !== item);
		}
	}
	return undefined;
}

export { choice, remove };
