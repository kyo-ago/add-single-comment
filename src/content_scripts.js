window.addEventListener(`keydown`, (event) => {
	if (!event.metaKey) {
		return;
	}
	if (event.key !== `Enter`) {
		return;
	}

	let button = document.querySelector(`[name="single_comment"]:not([disabled])`);
	if (!button) {
		return;
	}
	event.preventDefault();
	event.stopImmediatePropagation();
	event.stopPropagation();

	var evt = new MouseEvent(`click`, {
		bubbles: true,
		cancelable: true,
		view: window
	});
	button.dispatchEvent(evt);
}, true);
