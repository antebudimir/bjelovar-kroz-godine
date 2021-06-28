// First set of fetched data starts with page 1
let pageNumber = 1,
	searchTerm = '',
	index = 0;

// 1. Define endpoint, fetch response and return data promise
const search = async () => {
	const key = 'aroplosuitin';
	const endpoint = `https://api.europeana.eu/record/v2/search.json`,
		query = `?wskey=${key}&query=${searchTerm}&start=${pageNumber}&rows=20&profile=rich'`;

	const response = await fetch(endpoint + query);

	// Check response status:
	if (response.status !== 200) {
		throw new Error('Cannot fetch data. Response status is not 200.');
	}

	const data = await response.json();

	return data;
};

// 2. Call search and return data promise
const searchEuropeana = async () => {
	const data = await search();

	return data;
};

// 3. Grab the input and invoke callback to update the UI
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// grab user input
	searchTerm = searchForm.search.value.trim();

	// For errors
	const errorOutput = document.querySelector('.error');

	// Invoke searchEuropeana
	searchEuropeana()
		.then((data) => {
			updateUI(data);
			console.log(data);
		})
		.catch((error) => {
			console.log('An error occured:', error),
				(errorOutput.innerText =
					'Pretraga nije uspjela. Provjerite jeste li spojeni na mrežu.');
		});
});

// 4.1 Create a search again button
const searchAgain = document.createElement('button');
searchAgain.setAttribute('class', 'btn');
searchAgain.setAttribute('type', 'submit');
searchAgain.setAttribute('title', 'Pretraži ponovno');
searchAgain.innerText = 'Pretraži ponovno';

// Refresh the page to search again
searchAgain.addEventListener('click', () => {
	window.location.reload();
});

// 4.2 resultsOutput
const resultsOutput = document.createElement('p');
resultsOutput.setAttribute('class', 'results');

// 4.3 Update the UI with HTML template
const updateUI = (data) => {
	// Total results
	const totalResults = data.totalResults;
	// Output them
	const europeanaSearch = document.querySelector('#europeana-search'),
		filters = document.querySelector('.filters');

	resultsOutput.innerText = `Sveukupno rezultata: ${totalResults}`;
	europeanaSearch.append(resultsOutput);

	// Adapt UI for search results
	if (totalResults > 0) {
		// Remove the search field and the button
		const searchField = document.querySelector('#search'),
			searchButton = document.querySelector('#searchButton');
		searchField.style.display = 'none';
		searchButton.style.display = 'none';

		// Append the search again button
		searchForm.append(searchAgain);

		// Reveal the filters and moreButtons
		const loadMore = document.querySelector('#load-more');
		loadMore.style.display = 'block';
		filters.style.display = 'flex';
		filters.style.flexFlow = 'row wrap';
		filters.style.justifyContent = 'center';
		filters.style.gap = '0 0.5rem';
	}

	// Load more button
	const itemsCount = data.itemsCount,
		numberOfIndexedResults = index + itemsCount;

	if (totalResults > 20 && numberOfIndexedResults < totalResults) {
		moreBtn.style.display = 'initial';
	} else {
		moreBtn.style.display = 'none';
	}

	// Get the properties for each result item
	data.items.forEach((item) => {
		// Indexing result title
		index++;

		// Retrieved data from json.
		// Considering that not all records have the same metadata that I need, ternary operator is used to weed them out
		// and to show the data in Croatian when possible / other languages when not.
		const title = item.title,
			edmIsShownBy = item.edmIsShownBy,
			thumbnail = item.edmPreview
				? item.edmPreview[0]
				: 'Slika nije raspoloživa.',
			year = item.year ? item.year : 'Nije raspoloživa.',
			dataProvider = item.dataProvider,
			country = item.country,
			type = item.type.toLowerCase(),
			rights = item.rights,
			edmIsShownAt = item.edmIsShownAt ? item.edmIsShownAt : '';

		// More complex checks with regular if/else for readability
		// PREDMET:
		let dcSubjectLangAware;
		if (item.dcSubjectLangAware !== undefined) {
			dcSubjectLangAware =
				item.dcSubjectLangAware.hr ||
				item.dcSubjectLangAware.hrv ||
				item.dcSubjectLangAware.en ||
				item.dcSubjectLangAware.eng ||
				item.dcSubjectLangAware.def ||
				item.dcSubjectLangAware.sr ||
				item.dcSubjectLangAware.de ||
				item.dcSubjectLangAware.fr ||
				item.dcSubjectLangAware.it ||
				item.dcSubjectLangAware.la ||
				item.dcSubjectLangAware.nl ||
				item.dcSubjectLangAware.es ||
				item.dcSubjectLangAware.sv ||
				item.dcSubjectLangAware.cs ||
				item.dcSubjectLangAware.pl ||
				item.dcSubjectLangAware.pt ||
				item.dcSubjectLangAware.ru ||
				item.dcSubjectLangAware.sl ||
				item.dcSubjectLangAware.hu ||
				item.dcSubjectLangAware.et ||
				item.dcSubjectLangAware.fi ||
				item.dcSubjectLangAware.lv;
		} else {
			dcSubjectLangAware = 'Nije raspoloživ.';
		}

		// OPIS
		let dcDescriptionLangAware;
		if (item.dcDescriptionLangAware !== undefined) {
			dcDescriptionLangAware =
				item.dcDescriptionLangAware.hr ||
				item.dcDescriptionLangAware.hrv ||
				item.dcDescriptionLangAware.en ||
				item.dcDescriptionLangAware.eng ||
				item.dcDescriptionLangAware.def ||
				item.dcDescriptionLangAware.sr ||
				item.dcDescriptionLangAware.de ||
				item.dcDescriptionLangAware.fr ||
				item.dcDescriptionLangAware.it ||
				item.dcDescriptionLangAware.la ||
				item.dcDescriptionLangAware.deu ||
				item.dcDescriptionLangAware.nl ||
				item.dcDescriptionLangAware.es ||
				item.dcDescriptionLangAware.sv ||
				item.dcDescriptionLangAware.cs ||
				item.dcDescriptionLangAware.pl ||
				item.dcDescriptionLangAware.pt ||
				item.dcDescriptionLangAware.ru ||
				item.dcDescriptionLangAware.sl ||
				item.dcDescriptionLangAware.hu ||
				item.dcDescriptionLangAware.et ||
				item.dcDescriptionLangAware.fi ||
				item.dcDescriptionLangAware.lv;
		} else {
			dcDescriptionLangAware = 'Nije raspoloživ.';
		}

		// DODATAN OPIS:
		let edmConceptPrefLabelLangAware;
		if (item.edmConceptPrefLabelLangAware !== undefined) {
			edmConceptPrefLabelLangAware =
				item.edmConceptPrefLabelLangAware.hr ||
				item.edmConceptPrefLabelLangAware.hrv ||
				item.edmConceptPrefLabelLangAware.en ||
				item.edmConceptPrefLabelLangAware.eng ||
				(item.edmConceptPrefLabelLangAware.def &&
					item.edmConceptPrefLabelLangAware.def[0]) ||
				item.edmConceptPrefLabelLangAware.sr ||
				item.edmConceptPrefLabelLangAware.de ||
				item.edmConceptPrefLabelLangAware.fr ||
				item.edmConceptPrefLabelLangAware.it ||
				item.edmConceptPrefLabelLangAware.la ||
				item.edmConceptPrefLabelLangAware.nl ||
				item.edmConceptPrefLabelLangAware.sv ||
				item.edmConceptPrefLabelLangAware.es ||
				item.edmConceptPrefLabelLangAware.cs ||
				item.edmConceptPrefLabelLangAware.pl ||
				item.edmConceptPrefLabelLangAware.pt ||
				item.edmConceptPrefLabelLangAware.ru ||
				item.edmConceptPrefLabelLangAware.sl ||
				item.edmConceptPrefLabelLangAware.hu ||
				item.edmConceptPrefLabelLangAware.et ||
				item.edmConceptPrefLabelLangAware.fi ||
				item.edmConceptPrefLabelLangAware.lv;
		} else {
			edmConceptPrefLabelLangAware = 'Nije raspoloživ.';
		}

		// MJESTO:
		let edmPlaceLabelLangAware;
		if (item.edmPlaceLabelLangAware !== undefined) {
			edmPlaceLabelLangAware =
				item.edmPlaceLabelLangAware.hr ||
				item.edmPlaceLabelLangAware.hrv ||
				item.edmPlaceLabelLangAware.en ||
				item.edmPlaceLabelLangAware.eng ||
				(item.edmPlaceLabelLangAware.def &&
					item.edmPlaceLabelLangAware.def[0]) ||
				item.edmPlaceLabelLangAware.sr ||
				item.edmPlaceLabelLangAware.de ||
				item.edmPlaceLabelLangAware.fr ||
				item.edmPlaceLabelLangAware.it ||
				item.edmPlaceLabelLangAware.la ||
				item.edmPlaceLabelLangAware.nl ||
				item.edmPlaceLabelLangAware.sv ||
				item.edmPlaceLabelLangAware.cs ||
				item.edmPlaceLabelLangAware.pl ||
				item.edmPlaceLabelLangAware.pt ||
				item.edmPlaceLabelLangAware.ru ||
				item.edmPlaceLabelLangAware.sl ||
				item.edmPlaceLabelLangAware.hu ||
				item.edmPlaceLabelLangAware.et ||
				item.edmPlaceLabelLangAware.fi ||
				item.edmPlaceLabelLangAware.es;
		} else {
			edmPlaceLabelLangAware = 'Nije raspoloživo.';
		}

		// PERIOD:
		let edmTimespanLabelLangAware;
		if (item.edmTimespanLabelLangAware !== undefined) {
			edmTimespanLabelLangAware =
				item.edmTimespanLabelLangAware.hr ||
				item.edmTimespanLabelLangAware.hrv ||
				item.edmTimespanLabelLangAware.en ||
				item.edmTimespanLabelLangAware.eng ||
				item.edmTimespanLabelLangAware.def ||
				item.edmTimespanLabelLangAware.sr ||
				item.edmTimespanLabelLangAware.de ||
				item.edmTimespanLabelLangAware.fr ||
				item.edmTimespanLabelLangAware.it ||
				item.edmTimespanLabelLangAware.la ||
				item.edmTimespanLabelLangAware.nl ||
				item.edmTimespanLabelLangAware.es ||
				item.edmTimespanLabelLangAware.sv ||
				item.edmTimespanLabelLangAware.cs ||
				item.edmTimespanLabelLangAware.pl ||
				item.edmTimespanLabelLangAware.pt ||
				item.edmTimespanLabelLangAware.ru ||
				item.edmTimespanLabelLangAware.sl ||
				item.edmTimespanLabelLangAware.hu ||
				item.edmTimespanLabelLangAware.et ||
				item.edmTimespanLabelLangAware.fi ||
				item.edmTimespanLabelLangAware.lv;
		} else {
			edmTimespanLabelLangAware = 'Nije raspoloživ.';
		}

		// Output HTML template
		const output = document.querySelector('#output');

		if (index <= totalResults) {
			output.innerHTML += `
			<div class="result-group" tabindex="0" data-filter="${type}">
				<h3 class="europeana-heading">${index}. ${title}</h3>
				<a href="${edmIsShownBy}" target="blank" rel="noopener" title="${title}"><img class="image europeana" src="${thumbnail}" alt="${title}"></a>
				<span class="enlarge-image">Klikni na fotografiju i uvećaj</span>
				<br>
				<p>Predmet: ${dcSubjectLangAware}</p>

				<p>Godina: ${year}</p>

				<p>Opis: ${dcDescriptionLangAware}</p>

				<p>Dodatan opis: ${edmConceptPrefLabelLangAware}</p>

				<p>Mjesto: ${edmPlaceLabelLangAware}</p>

				<p>Izvor: ${dataProvider}</p>

				<p>Zemlja: ${country}</p>

				<p>Period: ${edmTimespanLabelLangAware}</p>

				<p>Vrsta datoteke: ${type}</p>

				<p>Licenca: <a class="underline" href="${rights}" target="_blank" rel="noopener" title="Saznajte kako je datoteka zaštićena i kako se možete koristiti njome">Vrsta licence za korištenje datoteke</a></p>

				<p>Predmet se nalazi u: <a class="underline" href="${edmIsShownAt}" target="_blank" rel="noopener" title="Muzej u kojem je predmet izložen">Vanjska poveznica na dotični muzej</a></p>
			</div>
		`;
		}
	});

	// Results filter
	const buttons = document.querySelectorAll('.filter-btn'),
		resultGroups = document.querySelectorAll('.result-group');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove('active');
			}
			button.classList.add('active');

			resultGroups.forEach((resultGroup) => {
				resultGroup.style.display = 'none';
				let filterName = button.title;

				if (
					resultGroup.getAttribute('data-filter') === filterName ||
					filterName === 'sve'
				) {
					resultGroup.style.display = 'block';
				}
			});
		});
	});
};

// 5. Load more results
const moreBtn = document.querySelector('#moreBtn');

moreBtn.addEventListener('click', () => {
	pageNumber++;
	// Don't show number of total results again.
	resultsOutput.innerText = '';

	searchEuropeana()
		.then((data) => {
			updateUI(data);
			console.log(data);
		})
		.catch((error) => {
			console.log('An error occured:', error),
				(errorOutput.innerText =
					'Traženi pojam nije pronađen. Provjerite jeste li ga točno upisali ili upišite neki drugi pojam, a provjerite i jeste li spojeni na mrežu.');
		});
});
