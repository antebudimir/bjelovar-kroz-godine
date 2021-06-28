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
	const hamburger = document.querySelector('#hamburger');

	hamburger.addEventListener('click', () => {
		const menuOverlay = document.querySelector('#menu-overlay'),
			icon = document.querySelector('#menu-icon'),
			body = document.querySelector('body');

		if (menuOverlay.style.right === '' || menuOverlay.style.right === '-100%') {
			menuOverlay.style.right = '1rem';
			body.style.overflow = 'hidden';
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
			icon.style.transition = 'all 300ms ease-in';
		} else {
			menuOverlay.style.right = '-100%';
			body.style.overflow = 'unset';
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
		}

		menuOverlay.addEventListener('click', () => {
			menuOverlay.style.right = '-100%';
			body.style.overflow = 'unset';
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
		});
	});
}

// Move logo markup to Desktop wrapper
if (window.innerWidth > 1023) {
	const header = document.querySelector('header'),
		nav = document.querySelector('#nav'),
		overlay = document.querySelector('#menu-overlay');

	header.append(nav);
	overlay.remove();
}

// Date
const currentYear = document.querySelector('#currentYear');
currentYear.innerText = new Date().getFullYear();

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
	const scrollToTop = document.querySelector('.scrollButton');

	window.addEventListener('scroll', () => {
		if (
			document.body.scrollTop > 1000 ||
			document.documentElement.scrollTop > 1000
		) {
			scrollToTop.style.display = 'block';
		} else {
			scrollToTop.style.display = 'none';
		}
	});

	scrollToTop.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
}
