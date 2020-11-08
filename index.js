const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');

	document.querySelector('h3').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const linkInput = document.querySelector('#link-input');
	const input = document.querySelector('#message-input');
	const encrypted = btoa(input.value);

	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');

	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
	linkInput.addEventListener('click', () => {
		document.execCommand('copy');
	});
});
