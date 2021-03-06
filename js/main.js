// Register SW
if ('serviceWorker' in navigator) {
	// register him
	navigator.serviceWorker
		.register('/sw.js', {
			updateViaCache: 'none',
			scope: '/',
		})
		.then(() => {
			// finished registering
		})
		.catch((err) => {
			console.warn('Failed to register', err.message);
		});

	// listen for messages
	navigator.serviceWorker.addEventListener('message', ({ data }) => {
		// received a message from the service worker
		console.log(data, 'New message from your service worker.');
	});
}

// SYNC
async function registerPeriodicCheck() {
	const registration = await navigator.serviceWorker.ready;
	try {
		await registration.periodicSync.register('latest-update', {
			minInterval: 24 * 60 * 60 * 1000,
		});
	} catch {
		console.log('Periodic sync could not be registered!');
	}
}

navigator.serviceWorker.ready.then((registration) => {
	registration.periodicSync.getTags().then((tags) => {
		if (tags.includes('latest-update')) skipDownloadingLatestUpdateOnPageLoad();
	});
});

// Hamburger
if (window.innerWidth < 1024) {
	const hamburger = document.querySelector('#hamburger'),
		menu = document.querySelector('.menu'),
		icon = document.querySelector('#menu-icon'),
		body = document.querySelector('body');

	hamburger.addEventListener('click', () => {
		if (menu.style.display === 'none' || menu.style.display === '') {
			setTimeout(() => {
				menu.style.display = 'flex';
				menu.style.flexFlow = 'column nowrap';
				menu.style.justifyContent = 'center';
				menu.style.alignItems = 'center';
				menu.style.animation = 'slideIn 300ms ease-in';
			}, 1);

			body.style.overflow = 'hidden';
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
			icon.style.transition = 'color 300ms ease-in';
		} else {
			slideOut();
		}
	});

	menu.addEventListener('click', () => {
		slideOut();
	});

	function slideOut() {
		menu.style.animation = 'slideOut 350ms ease-in';
		setTimeout(() => {
			menu.style.display = 'none';
		}, 300);

		body.style.overflow = 'unset';
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars');
	}
}

// Move logo markup to Desktop wrapper
if (window.innerWidth > 1023) {
	const header = document.querySelector('header'),
		nav = document.querySelector('#nav');

	header.append(nav);
}

// Date
(function getCurrentYear() {
	const currentYear = document.querySelector('#currentYear');
	currentYear.innerText = new Date().getFullYear();
})();

// Initialize tobii lightbox
const galleryHome = document.querySelector('#gallery-home');

if (document.body === galleryHome) {
	const tobii = new Tobii({
		zoom: false,
	});
}

// SCROLL back to top
const europeanaHome = document.querySelector('#europeana-home');

if (document.body === europeanaHome || document.body === galleryHome) {
	const scrollToTop = document.querySelector('.scrollButton'),
		sharingLinks = document.querySelector('#sharing-links');

	window.addEventListener('scroll', () => {
		// scrollToTop button
		if (
			document.body.scrollTop > 1500 ||
			document.documentElement.scrollTop > 1500
		) {
			scrollToTop.style.display = 'block';
		} else {
			scrollToTop.style.display = 'none';
		}

		// sharingLinks button
		if (
			document.body.scrollTop > 1000 ||
			document.documentElement.scrollTop > 1000
		) {
			sharingLinks.style.display = 'flex';
		} else {
			sharingLinks.style.display = 'none';
		}
	});

	scrollToTop.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
}

// Sharing links
const mapHome = document.querySelector('#map-home');

if (
	document.body === mapHome ||
	document.body === galleryHome ||
	document.body === europeanaHome
) {
	const toggle = document.querySelector('.toggle');

	toggle.addEventListener('click', () => {
		const sharingLinks = document.querySelectorAll('.sharing-link');

		for (let i = 0; i < sharingLinks.length; i++) {
			sharingLinks[i].classList.toggle('open');
		}
	});
}

// Textarea auto resize
const contactHome = document.querySelector('#contact-home');

if (document.body === contactHome) {
	(function autoResize() {
		const textArea = document.querySelector('[data-autoresize]'),
			offset = textArea.offsetHeight - textArea.clientHeight;

		textArea.addEventListener('input', (e) => {
			e.target.style.height = 'auto';
			e.target.style.height = e.target.scrollHeight + offset + 'px';
		});
	})();
}
