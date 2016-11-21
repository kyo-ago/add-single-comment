window.addEventListener(`keydown`, (event) => {
	if (!event.metaKey) {
		return;
	}
	if (event.key !== `Enter`) {
		return;
	}

	let button = document.querySelector(`[name="single_comment"]`);
	if (!button) {
		return;
	}
	if (button.disabled) {
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
