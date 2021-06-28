// Initialize the map
const mapOfBjelovar = L.map('bjelovar', {
	center: [45.89875092449054, 16.842175086587552],
	zoom: 17,
});

L.tileLayer(
	// 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
	'https://api.mapbox.com/styles/v1/{username}/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
	{
		zoom: 20,
		maxZoom: 19,
		username: 'abudimir',
		// id: 'mapbox/streets-v11',
		id: 'ckpci73ee44bn17p5yejw5ss7',
		tileSize: 512,
		zoomOffset: -1,
		accessToken:
			'pk.eyJ1IjoiYWJ1ZGltaXIiLCJhIjoiY2todWd5NHljMGtqazJ5cDU5dWRlYnRhdCJ9.q2krRCBYSyCSq5qjVuivUg',
	},
).addTo(mapOfBjelovar);

//Locate control
L.control
	.locate({
		position: 'bottomright',
		strings: {
			title: 'Moja lokacija',
		},
	})
	.addTo(mapOfBjelovar);

//Custom map Icon
const leafletIcon = L.icon({
	iconUrl: './img/open-mailbox-with-raised-flag.ico',
	iconSize: [38, 38],
});

//Markers data
const markerData = {
	'Blivajsova ulica': {
		content:
			'<div class="modal-text">Ulica je nosila naziv po Josipu Blivajsu do početka 1930-tih godina kada postaje Ulica Frana Supila. Vodi od središnjeg Trga Eugena Kvaternika do Šetališta dr. Ivše Lebovića odnosno Dječjeg odjela knjižnice. Neke od najznačajnijih građevina svakako su njezine uglovnice: nekadašnje svratište Zvijezda te kuća Ivana Ružića uz trg, zgrada Prve hrvatske štedionice, zgrada Kraljevskog poštanskog i brzojavnog ureda te gostiona J. Svobode na kraju ulice.</div> <h3 class="modal-years">Oko 1900.</h3> <img class="modal-img" src="./img/full/Blivajsova/01 Blivajsova ulica (oko 1900).jpg"> <h3 class="modal-years">Oko 1902.</h3> <img class="modal-img" src="./img/full/Blivajsova/02 Blivajsova ulica (oko 1902).jpg"> <h3 class="modal-years">Oko 1907.</h3> <img class="modal-img" src="./img/full/Blivajsova/03 Blivajsova ulica (oko 1907).jpg">',
		coordinates: [45.899491, 16.844165],
	},

	'Četvrt vila': {
		content:
			'<div class="modal-text">Prethodno ulica Teodora Georgijevića, dobila je ime Tomaša Masaryka početkom 1930-tih godina. Formirana je širenjem grada u jugoistočnom pravcu, uvjetovanim dolaskom željeznice. Zamišljena je kao reprezentativan pojas historicističkih i secesijskih stambenih vila s kovanim ogradama i zelenilom prema ulici.</div> <h3 class="modal-years">Oko 1909.</h3> <img class="modal-img" src="./img/full/Cetvrt/01 Četvrt vila (oko 1909).jpg"> <h3 class="modal-years">Oko 1912.</h3> <img class="modal-img" src="./img/full/Cetvrt/02 Četvrt vila (oko 1912).jpg"> <h3 class="modal-years">Oko 1914.</h3> <img class="modal-img" src="./img/full/Cetvrt/03 Četvrt vila (oko 1914).jpg">',
		coordinates: [45.896034, 16.845399],
	},

	Gimnazija: {
		content:
			'<div class="modal-text">Kamen temeljac za zgradu položen je 1900. godine, a izgrađena je 1901. godine prema nacrtu službenog gradskog inženjera Srećka Smočinskog. Gradnju je financirao grad Bjelovar zajmom od 5000 kruna. Najznačajniji kompozicijski motiv glavnog pročelja je središnji rizalit i velika dekorativna kupola.</div> <h3 class="modal-years">Oko 1902.</h3> <img class="modal-img" src="./img/full/Gimnazija/01 Gimnazija (oko 1902).jpg"></img> <h3 class="modal-years">Oko 1911.</h3> <img class="modal-img" src="./img/full/Gimnazija/02 Gimnazija (oko 1911).jpg"></img> <h3 class="modal-years">Oko 1915.</h3> <img class="modal-img" src="./img/full/Gimnazija/03 Gimnazija (oko 1915).jpg"></img> <h3 class="modal-years">Oko 1926.</h3> <img class="modal-img" src="./img/full/Gimnazija/04 Gimnazija (oko 1926).jpg"></img> <h3 class="modal-years">Oko 1930.</h3> <img class="modal-img" src="./img/full/Gimnazija/05 Gimnazija (oko 1930).jpg"></img> <h3 class="modal-years">Oko 1935.</h3> <img class="modal-img" src="./img/full/Gimnazija/06 Gimnazija (oko 1935).jpg"></img> <h3 class="modal-years">Oko 1940.</h3> <img class="modal-img" src="./img/full/Gimnazija/07 Gimnazija (oko 1940).jpg"></img>',
		coordinates: [45.896034, 16.84114],
	},

	'Glavni trg': {
		content:
			'<div class="modal-text">U posljednjih 150 godina glavni gradski trg promijenio je ime više puta, od prvog naziva Parade Platz, preko Trga Marije Terezije, Trga kralja Petra, Poglavnikovog trga, Trga Jedinstva do današnjeg Trga Eugena Kvaternika. Uokviruju ga najznačajnije i najstarije građevine grada: katedrala sv. Terezije Avilske s pijarističkim samostanom, Velika vojarna, danas reprezentativna zgrada Gradskog poglavarstva te mnoge druge javne zgrade nekada u funkciji Đurđevačke i Križevačke pukovnije. Poznate barokne skulpture sv. Terezije Avilske, sv. Jurja, sv. Jelene i sv. Ivana Nepomuka postavljene su 1777. i 1778. godine. Obilježja gradskog perivoja trg dobiva sadnjom prvih sadnica kestena krajem 19. stoljeća, kada su formirane i šetališne staze, postavljene klupe i u sredini meteorološki stup. Godine 1943. u središtu trga podignut je glazbeni paviljon od bijelog mramora koji se i danas smatra središtem grada.</div> <h3 class="modal-years">Oko 1900.</h3> <img class="modal-img" src="./img/full/Glavni/01 Glavni trg (oko 1900).jpg"></img> <h3 class="modal-years">Oko 1902.</h3> <img class="modal-img" src="./img/full/Glavni/02 Glavni trg (oko 1902).jpg"></img> <h3 class="modal-years">Oko 1904.</h3> <img class="modal-img" src="./img/full/Glavni/03 Glavni trg (oko 1904).jpg"></img> <h3 class="modal-years">Oko 1905.</h3> <img class="modal-img" src="./img/full/Glavni/04 Glavni trg (oko 1905).jpg"></img> <h3 class="modal-years">Oko 1909.</h3> <img class="modal-img" src="./img/full/Glavni/05 Glavni trg (oko 1909).jpg"></img> <h3 class="modal-years">Oko 1909.</h3> <img class="modal-img" src="./img/full/Glavni/06 Glavni trg (oko 1909).jpg"></img> <h3 class="modal-years">Oko 1911.</h3> <img class="modal-img" src="./img/full/Glavni/07 Glavni trg (oko 1911).jpg"></img>  <h3 class="modal-years">Oko 1915.</h3> <img class="modal-img" src="./img/full/Glavni/08 Glavni trg (oko 1915).jpg"></img>  <h3 class="modal-years">Oko 1916.</h3> <img class="modal-img" src="./img/full/Glavni/09 Glavni trg (oko 1916).jpg"></img>  <h3 class="modal-years">Oko 1919.</h3> <img class="modal-img" src="./img/full/Glavni/10 Glavni trg (oko 1919).jpg"></img>  <h3 class="modal-years">Oko 1922.</h3> <img class="modal-img" src="./img/full/Glavni/11 Glavni trg (oko 1922).jpg"></img>  <h3 class="modal-years">Oko 1925.</h3> <img class="modal-img" src="./img/full/Glavni/12 Glavni trg (oko 1925).jpg"></img>  <h3 class="modal-years">Oko 1926.</h3> <img class="modal-img" src="./img/full/Glavni/13 Glavni trg (oko 1926).jpg"></img>  <h3 class="modal-years">Oko 1935.</h3> <img class="modal-img" src="./img/full/Glavni/14 Glavni trg (oko 1935).jpg"></img>  <h3 class="modal-years">Oko 1937.</h3> <img class="modal-img" src="./img/full/Glavni/15 Glavni trg (oko 1937).jpg"></img>  <h3 class="modal-years">Oko 1951.</h3> <img class="modal-img" src="./img/full/Glavni/16 Glavni trg (oko 1951).jpg"></img>  <h3 class="modal-years">Oko 1958.</h3> <img class="modal-img" src="./img/full/Glavni/17 Glavni trg (oko 1958).jpg"></img>  <h3 class="modal-years">Oko 1970.</h3> <img class="modal-img" src="./img/full/Glavni/18 Glavni trg (oko 1970).jpg"></img>',
		coordinates: [45.89867, 16.842138],
	},

	'Gostiona Crnom orlu': {
		content:
			'<div class="modal-text">Danas srušena, gostiona se nalazila na početku Gajeve ulice. Vlasnik je bio Milan Brcković. U gostioni se 5. srpnja 1930. održala osnivačka skupština Moto kluba. Sastali su se kako bi pokrenuli kupnju motora, organizirali vožnje, napravili poligon za trke i sl. Predsjednik kluba tada je bio Filip Jandroković.</div> <h3 class="modal-years">Oko 1911.</h3> <img class="modal-img" src="./img/full/Gostiona/01 Gostiona Crnom orlu (oko 1911).jpg"></img> <h3 class="modal-years">Oko 1918.</h3> <img class="modal-img" src="./img/full/Gostiona/02 Gostiona Crnom orlu (oko 1918).jpg"></img>',
		coordinates: [45.899208, 16.838543],
	},

	Katedrala: {
		content:
			'<div class="modal-text">Današnji katedralni sklop Bjelovarsko-križevačke biskupije čine crkva sv. Terezije te nekadašnji kompleks pijarističkog samostana i škole. Crkva se pojavljuje na najranijim planovima Bjelovara od 1772. godine pa nadalje što ju svrstava među najstarije sačuvane spomenike grada. Oštećena je u potresu 1880. godine te se djelomično obnavlja prema zamislima Hermana Bollea, međutim sačuvala je svoja dominantna barokna obilježja. Katedralom postaje 2009. godine osnutkom Bjelovarsko-križevačke biskupije.</div> <h3 class="modal-years">Oko 1919.</h3> <img class="modal-img" src="./img/full/Katedrala/01 Katolička crkva (oko 1919).jpg"></img> <h3 class="modal-years">Oko 1926.</h3> <img class="modal-img" src="./img/full/Katedrala/02 Katolička crkva (oko 1926).jpg"></img>',
		coordinates: [45.898319, 16.843039],
	},

	'Kolodvorska ulica': {
		content:
			'<div class="modal-text">Današnja Ulica Matice hrvatske jedna je od najreprezentativnijih ulica grada Bjelovara. Ulica spaja Trg Stanka Vraza s Trgom kralja Tomislava, odnosno autobusnim i željezničkim kolodvorom. Obilježena historicističkom i secesijskom arhitekturom javnih i privatnih vila od kojih se posebno ističu kuće nekadašnjih bjelovarskih trgovaca Nikole Balote i Lavoslava Singera, zgrada nekadašnjeg hotela „Central“, zgrada Kraljevske kotarske oblasti, zgrada Srpskog kreditnog zavoda i dr., s dominantnim volumenom zgrade Gimnazije Bjelovar.</div> <h3 class="modal-years">Oko 1905.</h3> <img class="modal-img" src="./img/full/Kolodvorska/01 Kolodvorska ulica (oko 1905).jpg"></img> <h3 class="modal-years">Oko 1911.</h3> <img class="modal-img" src="./img/full/Kolodvorska/02 Kolodvorska ulica (oko 1911).jpg"></img>  <h3 class="modal-years">Oko 1916.</h3> <img class="modal-img" src="./img/full/Kolodvorska/03 Kolodvorska ulica (oko 1916).jpg"></img>  <h3 class="modal-years">Oko 1918.</h3> <img class="modal-img" src="./img/full/Kolodvorska/04 Kolodvorska ulica (oko 1918).jpg"></img> <h3 class="modal-years">Oko 1920.</h3> <img class="modal-img" src="./img/full/Kolodvorska/05 Kolodvorska ulica(oko 1920).jpg"></img> <h3 class="modal-years">Oko 1931.</h3> <img class="modal-img" src="./img/full/Kolodvorska/06 Kolodvorska ulica (oko 1931).jpg"></img> <h3 class="modal-years">Oko 1939.</h3> <img class="modal-img" src="./img/full/Kolodvorska/07 Kolodvorska ulica (oko 1939).jpg"></img>',
		coordinates: [45.894974, 16.843554],
	},

	'Stan pukovnika Križevačke pukovnije': {
		content:
			'<div class="modal-text">Današnja zgrada Narodne knjižnice "Petar Preradović" na najstarijim je planovima grada iz 18. i 19. stoljeća ucrtana kao stan pukovnika Križevačke pukovnije, a svoj je prepoznatljiv romantičarski Rundbogenstil izgled dobila u drugoj polovici 19. stoljeća. Njena obnova pripisuje se arhitektu Franji Kleinu.</div> <h3 class="modal-years">Oko 1905.</h3> <img class="modal-img" src="./img/full/Knjižnica/01 Komanda mjesta (oko 1905).jpg"></img> <h3 class="modal-years">Oko 1918.</h3> <img class="modal-img" src="./img/full/Knjižnica/02 Komanda mjesta (oko 1918).jpg"></img>  <h3 class="modal-years">Oko 1919.</h3> <img class="modal-img" src="./img/full/Knjižnica/03 Komanda mjesta (oko 1919).jpg"></img>  <h3 class="modal-years">Oko 1933.</h3> <img class="modal-img" src="./img/full/Knjižnica/04 Komanda mjesta (oko 1933).jpg"></img>',
		coordinates: [45.898088, 16.841526],
	},

	'Kupalište Draženovac': {
		content:
			'<div class="modal-text">Kupalište Draženovac dobilo je ime po tadašnjem gradonačelniku Draženu Kvaterniku koji je bio pokretač inicijative za izgradnju gradskog bazena. Ni punu godinu nakon početka izgradnje, bazen je dovršen i otvoren 4. rujna 1932. godine. Zbog velikog interesa za plivanjem već 1934. godine osnovan je Bjelovarski plivački klub. Kontinentalna Hrvatska je u to vrijeme imala samo dva 50-metarska bazena (u Zagrebu i Bjelovaru). Do potrebe za izgradnjom novog bazena došlo je 50 godina kasnije. Na mjestu starog bazena 3. rujna 1982. godine počinje se graditi kompleks koji se sastojao od 3 bazena – olimpijskog, malog bazena i dječjeg bazena.</div> <h3 class="modal-years">Oko 1940.</h3> <img class="modal-img" src="./img/full/Kupaliste/01 Kupalište Draženovac (oko 1940).jpg"></img> <img class="modal-img" src="./img/full/Kupaliste/02 Kupalište Draženovac.jpg"></img>',
		coordinates: [45.89873, 16.835475],
	},

	'Pravoslavna crkva sv.Trojice': {
		content:
			'<div class="modal-text">Kasnobarokna pravoslavna crkva Svete Trojice prvi put se na kartama pojavljuje 1795. godine. Njenu obnovu nakon potresa 1880. godine projektirao je Herman Bolle. Zadržala je svoje prvobitne karakteristike vanjštine izuzev zvonika koji je prije obnove bio sličan zvoniku na crkvi Sv. Terezije Avilske. U interijeru je došlo do značajnih promjena. Cjelokupno uređenje unutrašnjosti povjereno je zagrebačkoj Obrtnoj školi pa je Bjelovar dobio jedan od najzanimljivijih ikonostasa s prijelaza stoljeća u Hrvatskoj, djelo poznatih slikara Celestina Medovića, Marka Peroša i Ivana Tišova koji su ujedno izradili i zidne oslike.</div> <h3 class="modal-years">Oko 1904.</h3> <img class="modal-img" src="./img/full/Pravoslavna/Pravoslavna crkva (oko 1904).jpg"></img> <h3 class="modal-years">Oko 1905.</h3>  <img class="modal-img" src="./img/full/Pravoslavna/Pravoslavna crkva (oko 1905).jpg"></img> <h3 class="modal-years">Oko 1918.</h3> <img class="modal-img" src="./img/full/Pravoslavna/Pravoslavna crkva (oko 1918).jpg"></img>',
		coordinates: [45.898424, 16.840646],
	},

	'Tvornica Prvog hrvatskog dioničarskog društva': {
		content:
			'<div class="modal-text">Bjelovarski paromlin osnovalo je Prvo hrvatsko dioničarsko društvo za promet i preradbu sirovina 1894. godine. U vrijeme izgradnje bio je, uz svilanu, najviša zgrada u gradu.Uz njega su 1968. godine postavljeni silosi koji su danas najviše građevine u gradu. S godinama je mijenjalo vlasnike i nazive - Žitni fond, 5. maj i Prerada (te kao takav ulazio u velike kombinate PIK Bjelovar, Agrokombinat i 5. maj).</div> <h3 class="modal-years">Oko 1904.</h3> <img class="modal-img" src="./img/full//Tvornica/01 Tvornica Prvog hrvatskog dioničarskog društva (oko 1904).jpg"></img> <img class="modal-img" src="./img/full//Tvornica/02 Tvornica Prvog hrvatskog dioničarskog društva (oko 1904).jpg"></img> <h3 class="modal-years">Oko 1910.</h3> <img class="modal-img" src="./img/full//Tvornica/03 Tvornica Prvog hrvatskog dioničarskog društva (oko 1910).jpg"></img> <img class="modal-img" src="./img/full//Tvornica/04 Tvornica Prvog hrvatskog dioničarskog društva.jpg"></img>',
		coordinates: [45.903456, 16.842427],
	},

	Sajmište: {
		content:
			'<div class="modal-text">Bjelovar 1764. godine dobiva sajmište uz sjeverozapadni dio grada, današnji Trg Stjepana Radića i Trg hrvatskih branitelja. Na svakom od ta dva dijela nalazio se javni zdenac za napajanje stoke i opskrbu stanovništva vodom. Radi veterinarskih i higijenskih propisa sajmište je 1908. godine preseljeno u sjeverni dio grada na Logoru, a oblikovanjem cvjetnih partera i sadnjom drveća prostor je preoblikovan u zeleni pojas.</div> <h3 class="modal-years">Oko 1900.</h3> <img class="modal-img" src="./img/full/Sajmiste/01 Sajmište (oko 1900).jpg"></img> <h3 class="modal-years">Oko 1905.</h3> <img class="modal-img" src="./img/full/Sajmiste/02 Sajmište (oko 1905).jpg"></img> <h3 class="modal-years">Oko 1913.</h3> <img class="modal-img" src="./img/full/Sajmiste/03 Sajmište (oko 1913).jpg"></img> <h3 class="modal-years">Oko 1915.</h3> <img class="modal-img" src="./img/full/Sajmiste/04 Sajmište (oko 1915).jpg"></img>',
		coordinates: [45.899909, 16.838222],
	},

	'Strossmayerova ulica': {
		content:
			'<div class="modal-text">Izgradnja u Strossmayerovoj ulici započinje već krajem 18. stoljeća, no definirana je tijekom 19. stoljeća. Godine 1877. na uglu Strossmayerove i Kačićeve ulice podignut je i prvi židovski hram. Ulica je prema trgu definirana zgradom Gradskog muzeja Bjelovar, nekadašnjom Gradskom vijećnicom i zgradom Zagrebačke banke, nekad Kuće Ružić preko puta.</div> <h3 class="modal-years">Oko 1913.</h3> <img class="modal-img" src="./img/full/Strossmayerova/01 Strossmayerova ulica (oko 1913).jpg"></img> <h3 class="modal-years">Oko 1920.</h3> <img class="modal-img" src="./img/full/Strossmayerova/02 Strossmayerova ulica (oko 1913).jpg"></img>  <img class="modal-img" src="./img/full/Strossmayerova/03 Strossmayerova ulica (oko 1920).jpg"></img>  <img class="modal-img" src="./img/full/Strossmayerova/04 Strossmayerova ulica (oko 1927).jpg"></img> <h3 class="modal-years">Oko 1940.</h3> <img class="modal-img" src="./img/full/Strossmayerova/05 Strossmayerova ulica (oko 1940).jpg"></img> <h3 class="modal-years">Oko 1955.</h3> <img class="modal-img" src="./img/full/Strossmayerova/06 Strossmayerova ulica (oko 1955).jpg"></img>',
		coordinates: [45.898819, 16.843951],
	},

	'Sudbeni stol': {
		content:
			'<div class="modal-text">Zgrada se prvi put pojavljuje na karti iz 1860. godine gdje je označena kao Zgrada novog zatvora, a pripisuje se arhitektu Franji Kleinu. Nakon što je 1871. ukinuta Varaždinsko-đurđevačka pukovnija i pripojena novoj Bjelovarskoj županiji, zgrada zatvora preuzima funkciju Kraljevskog sudbenog stola.</div> <h3 class="modal-years">Oko 1905.</h3> <img class="modal-img" src="./img/full/Kraljevski/01 Kraljevski Sudbeni stol (oko 1905).jpg"></img>  <img class="modal-img" src="./img/full/Kraljevski/02 Kraljevski Sudbeni stol (oko 1905).jpg"></img> <h3 class="modal-years">Oko 1922.</h3> <img class="modal-img" src="./img/full/Kraljevski/03 Kraljevski Sudbeni stol (oko 1922).jpg"></img>',
		coordinates: [45.899335, 16.848382],
	},

	'Svratište Toma': {
		content:
			'<div class="modal-text">Kuća svratišta Toma svojom je visinom i istaknutim bočnim rizalitima jedna od najprepoznatljivijih građevina u Masarykovoj ulici poznatoj kao "četvrt vila".</div> <h3 class="modal-years">Oko 1908.</h3> <img class="modal-img" src="./img/full/Svratiste/01 Svratište Toma (oko 1908).jpg"></img> <h3 class="modal-years">Oko 1909.</h3> <img class="modal-img" src="./img/full/Svratiste/02 Svratište Toma (oko 1909).jpg"></img> <h3 class="modal-years">Oko 1911.</h3> <img class="modal-img" src="./img/full/Svratiste/03 Svratište Toma (oko 1911).jpg"></img>',
		coordinates: [45.895385, 16.844766],
	},

	'Trg Stanka Vraza': {
		content:
			'<div class="modal-text">Imovna općina križevačka od osnutka 1874. godine organizirano se bavila šumarskom djelatnošću. Njezina reprezentativna zgrada u Bjelovaru podignuta je krajem 19. stoljeća i danas služi kao zgrada Uprave šuma u Bjelovaru.</div> <h3 class="modal-years">Oko 1902.</h3> <img class="modal-img" src="./img/full/Vraz/01 Trg Stanka Vraza (oko 1902).jpg"></img> <h3 class="modal-years">Oko 1930.</h3> <img class="modal-img" src="./img/full/Vraz/02 Trg Stanka Vraza (oko 1930).jpg"></img> <h3 class="modal-years">Oko 1937.</h3> <img class="modal-img" src="./img/full/Vraz/03 Trg Stanka Vraza (oko 1937).jpg"></img>',
		coordinates: [45.895967, 16.839573],
	},

	'Vila Marija': {
		content:
			'<div class="modal-text">Jedna je od zgrada Opće bolnice Bjelovar u kojoj su smješteni Odjel za neurologiju i Odjel za psihijatriju. U javnosti je poznata kao Vila Marija, a ime je dobila po supruzi doktora Nikole Karlića čijom je zaslugom 1931. godine dovršena gradnja privatnog sanatorija prema projektu inženjera Krausa.</div> <h3 class="modal-years">Oko 1933.</h3> <img class="modal-img" src="./img/full/Vila/01 Sanatorium Vila Marija (oko 1933).jpg"></img> <h3 class="modal-years">Oko 1940.</h3> <img class="modal-img" src="./img/full/Vila/02 Sanatorium Vila Marija (oko 1940).jpg"></img>',
		coordinates: [45.901074, 16.847845],
	},

	'Vojarna Filipović': {
		content:
			'<div class="modal-text">Vojni kompleks s vojarnom u Franjevačkoj ulici izgrađen je 1888. godine. Kompleks je srušen 1969. godine temeljem nove urbanističke osnove iz 1966. godine kojom je na ovom mjestu planiran, kasnije i ostvaren stambeni kompleks.</div> <h3 class="modal-years">Oko 1910.</h3> <img class="modal-img" src="./img/full/Vojarna/01 Vojarna Filipović (oko 1910).jpg"></img> <img class="modal-img" src="./img/full/Vojarna/03 Vojarna Filipović (oko 1947).jpg"></img> <h3 class="modal-years">Oko 1920.</h3> <img class="modal-img" src="./img/full/Vojarna/02 Vojarna Filipović (oko 1920).jpg"></img>',
		coordinates: [45.902664, 16.845474],
	},

	'Željeznički kolodvor': {
		content:
			'<div class="modal-text">Prva lokomotiva u Bjelovar je stigla u travnju 1894. godine. Dolazak željeznice značio je gospodarsku i urbanističku prekretnicu u razvoju grada. Kolodvorska zgrada proširenjima je dobila svoj današnji izgled 1901. godine, a ispred kolodvora formiran je današnji Trg kralja Tomislava.</div> <h3 class="modal-years">Oko 1908.</h3> <img class="modal-img" src="./img/full/Zeljeznicki/01 Željeznički kolodvor (oko 1908).jpg"></img> <h3 class="modal-years">Oko 1922.</h3> <img class="modal-img" src="./img/full/Zeljeznicki/02 Željeznički kolodvor (oko 1922).jpg"></img> <h3 class="modal-years">Oko 1925.</h3> <img class="modal-img" src="./img/full/Zeljeznicki/03 Željeznički kolodvor (oko 1925).jpg"></img> <h3 class="modal-years">Oko 1955.</h3> <img class="modal-img" src="./img/full/Zeljeznicki/04 Željeznički kolodvor (oko 1955).jpg"></img>',
		coordinates: [45.893802, 16.84424],
	},

	'Zgrada čitaonice': {
		content:
			'<div class="modal-text">Zgrada Čitaonice na tadašnjem Šetalištu Marije Valerije prva je kulturna ustanova u gradu Bjelovaru. Izgrađena je sredstvima društva Casino Verein koje je u početku okupljalo časnike pukovnija željne razonode i druženja. Ukidanjem Vojne krajine Casino Verein dobiva i službeni naziv Čitaonice. Zgrada, građena u nekoliko faza, konačno je dovršena 1882. godine te je do danas zadržala svoj prvotni izgled i namjenu. Platane ispred zgrade čitaonice posađene su 1828. godine, a zasadio ih je pukovnik Gruber.</div> <h3 class="modal-years">Oko 1935.</h3> <img class="modal-img" src="./img/full/01 Hrvatska čitaonica (oko 1935).jpg"></img>',
		coordinates: [45.900604, 16.84513],
	},

	'Zgrada Hrvatskog sokola': {
		content:
			'<div class="modal-text">Mnogobrojne sportske aktivnosti društva Hrvatski sokol u Bjelovaru potaknule su društvo na izgradnju dvorane za vježbanje (gombaone). Zgrada Sokolskog doma izgrađena je sredstvima društva i donacijom Grada Bjelovara. Zgradu je projektirao zagrebački arhitekt Dionis Sunko, a podignuli su je sami članovi društva 1911. godine. Šestosiječanjska diktatura 1929. godine dovodi do gašenja svih sokolskih društava s nacionalnim obilježjima. Društvo je odbilo nastaviti rad pod Jugoslovenskim sokolskim savezom i u konačnici donijelo odluku o ukidanju 23. prosinca 1929. godine.</div> <h3 class="modal-years">Oko 1913.</h3> <img class="modal-img" src="./img/full/Sokol/01 Hrvatski sokol (oko 1913).jpg"></img> <h3 class="modal-years">Oko 1914.</h3> <img class="modal-img" src="./img/full/Sokol/02 Hrvatski sokol (oko 1914).jpg"></img> <h3 class="modal-years">Oko 1924.</h3> <img class="modal-img" src="./img/full/Sokol/03 Hrvatski sokol (oko 1924).jpg"></img> <h3 class="modal-years">Oko 1932.</h3> <img class="modal-img" src="./img/full/Sokol/04 Hrvatski sokol (oko 1932).jpg"></img>',
		coordinates: [45.897774, 16.846687],
	},

	'Županijska bolnica': {
		content:
			'<div class="modal-text">Zgrada Internog odjela Opće bolnice Bjelovar najstariji je objekt današnjeg bolničkog kompleksa, izgrađena 1845. godine. Pri svom osnutku nova je bolnica bila pod vojnom upravom, no nakon razvojačenja grada upravljanje bolnicom preuzima gradski liječnik. Gradnja kirurškog paviljona dovršena je 1924. prema projektima Ignjata Fischera (arhitekta Zemaljskog rodilišta u Petrovoj bolnici u Zagrebu) te predstavlja monumentalan primjer secesijskog utjecaja u arhitekturi grada Bjelovara. Izgradnjom i trećeg paviljona, Vile Marije, 1931. godine bjelovarska je bolnica u prvoj polovici 20. stoljeća bila jedna od većih i modernijih bolnica u Hrvatskoj.</div> <h3 class="modal-years">Oko 1918.</h3> <img class="modal-img" src="./img/full/Bolnica/01 Županijska bolnica (oko 1918).jpg"></img> <h3 class="modal-years">Oko 1927.</h3> <img class="modal-img" src="./img/full/Bolnica/02 Županijska bolnica (oko 1927).jpg"></img> <h3 class="modal-years">Oko 1955.</h3> <img class="modal-img" src="./img/full/Bolnica/03 Županijska bolnica (oko 1955).jpg"></img>',
		coordinates: [45.90191, 16.845968],
	},

	'Svratište zvijezda': {
		content:
			'<div class="modal-text">Svratište Zvijezda nalazilo se na uglu Supilove ulice i glavnog gradskog trga. Svratište je ime dobilo prema vlasniku Sternu čije prezime u prijevodu s njemačkog znači zvijezda.</div> <h3 class="modal-years">Oko 1900.</h3> <img class="modal-img" src="./img/full/Zvijezda/01 Svratište Zvijezda (oko 1900).jpg"></img> <h3 class="modal-years">Oko 1920.</h3> <img class="modal-img" src="./img/full/Zvijezda/02 Svratište Zvijezda (oko 1920).jpg"></img> <h3 class="modal-years">Oko 1943.</h3> <img class="modal-img" src="./img/full/Zvijezda/03 Svratište Zvijezda (oko 1943).jpg"></img> <h3 class="modal-years">Oko 1970.</h3> <img class="modal-img" src="./img/full/Zvijezda/04 Svratište Zvijezda (oko 1970).jpg"></img>',
		coordinates: [45.899118, 16.843479],
	},

	Muzej: {
		content:
			'<div class="modal-text">Nekadašnja zgrada Gradske vijećnice sagrađena je 1831. godine kao reprezentativni objekt gradske uprave u sjeveroistočnom uglu glavnog gradskog trga. Kao i u drugim vojnim komunitetima, zgradu vijećnice Bjelovar je dobio kasno i ona je jedna od posljednjih zgrada izgrađena u najužem gradskom središtu. Danas je u njoj smješten Muzej grada Bjelovara.</div> <h3 class="modal-years">Oko 1931.</h3> <img class="modal-img" src="./img/full/Muzej/01 Gradski muzej (oko 1931).jpg"></img> <h3 class="modal-years">Oko 1970.</h3> <img class="modal-img" src="./img/full/Muzej/02 Gradski muzej (oko 1970).jpg"></img>',
		coordinates: [45.898655, 16.843586],
	},

	'Šetalište Marije Valerije': {
		content:
			'<div class="modal-text">Šetalište Marije Valerije formirano je u drugoj polovici 19. stoljeća kao zeleni pojas koji omeđuje središte grada s njegove sjeverne strane. U sjeveroistočnom dijelu uređeno je nasadima drveća uz cestu, dječjim igralištem te reprezentativnom građanskom izgradnjom sa sjeverne strane. Sjeverozapadnim je dijelom do kraja 19. stoljeća prolazio potok, a u novije je vrijeme na tom mjestu organizirana gradska tržnica.</div> <h3 class="modal-years">Oko 1906.</h3> <img class="modal-img" src="./img/full/Setaliste/01 Šetalište Marije Valerije (oko 1906).jpg"></img> <h3 class="modal-years">Oko 1914.</h3> <img class="modal-img" src="./img/full/Setaliste/02 Šetalište Marije Valerije (oko 1914).jpg"></img>',
		coordinates: [45.900477, 16.845667],
	},

	'Mažuranićeva ulica': {
		content:
			'<div class="modal-text">Na planu iz 1772. godine Mažuranićeva ulica zvala se Logoričina ulica jer je vodila prema vojnom taborištu. Polovicom 19. stoljeća Mažuranićeva je ulica bila među najgušće izgrađenim dijelovima grada, bila je glavna ulica Đurđevačke pukovnije s kućama pukovnika, pobočnika suca, liječnika, zgradom Povjereništva financijske straže. Godine 1913. ulica dobiva i svoju najreprezentativniju zgradu, sinagogu, današnji Dom kulture.</div> <h3 class="modal-years">Oko 1903.</h3> <img class="modal-img" src="./img/full/Mazuraniceva/01 Mažuranićeva ulica (oko 1903).jpg"></img> <h3 class="modal-years">Oko 1906.</h3> <img class="modal-img" src="./img/full/Mazuraniceva/02 Mažuranićeva ulica (oko 1906).jpg"></img>',
		coordinates: [45.899768, 16.843103],
	},

	'Poštovska zgrada': {
		content:
			'<div class="modal-text">Zgrada stare pošte nalazila se na uglu Ulice Frana Supila i Ulice Ivana Viteza Trnskog. Vrijedan je primjer historicističke uglovnice čije je prizemlje preoblikovano i rastvoreno za potrebe lokala u drugoj polovici 20. stoljeća. Građena je za dr. Hermana Fischera, liječnika i ravnatelja bolnice.</div> <h3 class="modal-years">Oko 1917.</h3> <img class="modal-img" src="./img/full/01 Poštovska zgrada (oko 1917).jpg"></img>',
		coordinates: [45.899682, 16.844257],
	},

	'Preradovićeva ulica': {
		content:
			'<div class="modal-text">Preradovićeva ulica povezuje Ulicu Matice hrvatske s glavnim gradskim trgom. Na planu iz 1772. godine saznajemo da se ulica zvala Poštarska ulica. Vodila je prema zgradi pošte koja se nalazila na mjestu današnje Gimnazije. Krajem 19. i početkom 20. stoljeća ovo je bio jedan od najreprezentativnijih gradskih prostora s izgradnjama poput zgrade Gimnazije, kuće Nikole Balote, do Narodne kavane prije trga (današnji DM). Radikalne arhitektonske preinake ulica je doživjela 60-tih godina 20. stoljeća, najprije gradnjom 11 katova visokog nebodera 1968. godine, zatim rušenjem autentičnih prizemnica i gradnjom trokatnog objekta duž zapadne strane ulice. Sedamdesetih i osamdesetih godina izgrađena je zgrada tadašnje Bjelovarčanke te ostale stambene katnice.</div> <h3 class="modal-years">Oko 1901.</h3> <img class="modal-img" src="./img/full/Preradoviceva/01 Korzo (oko 1901).jpg"></img> <h3 class="modal-years">Oko 1910.</h3> <img class="modal-img" src="./img/full/Preradoviceva/02 Korzo (oko 1910).jpg"></img> <h3 class="modal-years">Oko 1912.</h3> <img class="modal-img" src="./img/full/Preradoviceva/03 Korzo (oko 1912).jpg"></img> <h3 class="modal-years">Oko 1928.</h3> <img class="modal-img" src="./img/full/Preradoviceva/04 Korzo (oko 1928).jpg"></img> <h3 class="modal-years">Oko 1937.</h3> <img class="modal-img" src="./img/full/Preradoviceva/05 Korzo (oko 1937).jpg"></img> <h3 class="modal-years">Oko 1970.</h3> <img class="modal-img" src="./img/full/Preradoviceva/06 Korzo (oko 1970).jpg"></img>  <img class="modal-img" src="./img/full/Preradoviceva/07 Korzo (oko 1970).jpg"></img>',
		coordinates: [45.897296, 16.842234],
	},

	'Zagrebačka ulica': {
		content:
			'<div class="modal-text">Nekadašnja Zagrebačka, danas Ulica Vladimira Nazora od osnutka grada jedan je od najvažnijih prometnih pravaca grada Bjelovara koji vodi prema Zagrebu. Nakon preseljenja starog sajmišta pred ulazom u grad formiran je zeleni pojas. Ulica je s obje strane izgrađena historicističkim katnicama od kojih se posebno ističe uglovnica trgovca Edmunda Plachtea s kraja 19. stoljeća, rad zagrebačkog arhitekta Martina Pilara. Vizura ulice zadržava se na impozantnom pročelju katedrale sv. Terezije.</div> <h3 class="modal-years">Oko 1903.</h3> <img class="modal-img" src="./img/full/Zagrebacka/01 Zagrebačka ulica (oko 1903).jpg"></img> <h3 class="modal-years">Oko 1908.</h3> <img class="modal-img" src="./img/full/Zagrebacka/02 Zagrebačka ulica (oko 1908).jpg"></img> <h3 class="modal-years">Oko 1909.</h3> <img class="modal-img" src="./img/full/Zagrebacka/03 Zagrebačka ulica (oko 1909).jpg"></img> <h3 class="modal-years">Oko 1917.</h3> <img class="modal-img" src="./img/full/Zagrebacka/04 Zagrebačka ulica (oko 1917).jpg"></img> <h3 class="modal-years">Oko 1930.</h3> <img class="modal-img" src="./img/full/Zagrebacka/05 Zagrebačka ulica (oko 1930).jpg"></img>  <img class="modal-img" src="./img/full/Zagrebacka/06 Zagrebačka ulica (oko 1930).jpg"></img>  <h3 class="modal-years">Oko 1937.</h3> <img class="modal-img" src="./img/full/Zagrebacka/07 Zagrebačka ulica (oko 1937).jpg"></img>  <h3 class="modal-years">Oko 1940.</h3> <img class="modal-img" src="./img/full/Zagrebacka/08 Zagrebačka ulica (oko 1940).jpg"></img> <h3 class="modal-years">Oko 1950.</h3> <img class="modal-img" src="./img/full/Zagrebacka/09 Zagrebačka ulica (oko 1950).jpg"></img>',
		coordinates: [45.900148, 16.838822],
	},

	'Ulica Ferde Rusana': {
		content:
			'<div class="modal-text">Rusanova ulica jedan je od najvažnijih i najstarijih prometnih pravaca grada Bjelovara koji vodi prema Daruvaru. Izgradnja, osobito sa zapadne strane ulice izrazite je arhitektonske i povijesne vrijednosti, većim dijelom formirana početkom 20. stoljeća. Ugao je naglašen romantičarskom vilom Ervina pl. Köröskenya iz 1905. godine na koju se nastavlja secesijska katnica Franje Revellanta i kuća Vojina Bakića. Vizura ulice završava začeljem katedrale sv. Terezije.</div> <h3 class="modal-years">Oko 1926.</h3> <img class="modal-img" src="./img/full/Rusanova/01 Rusanova ulica (oko 1926).jpg"></img> <h3 class="modal-years">Oko 1940.</h3> <img class="modal-img" src="./img/full/Rusanova/02 Rusanova ulica (oko 1940).jpg"></img>',
		coordinates: [45.896762, 16.846483],
	},

	'Hotel Central': {
		content:
			'<div class="modal-text">Na samom uglu Ulice Matice hrvatske i Ulice A. K. Miošića u prvoj polovici 20. stoljeća izgrađena je jedna od najljepših i najskladnijih secesijskih kuća u Bjelovaru, uglovnica Hotela Central, čiji je vlasnik bio D. Wiesner.</div> <h3 class="modal-years">Oko 1930.</h3> <img class="modal-img" src="./img/full/Hotel/01 Hotel Central (oko 1930).jpg"></img> <h3 class="modal-years">Oko 1957.</h3> <img class="modal-img" src="./img/full/Hotel/02 Hotel Central (oko 1957).jpg"></img>',
		coordinates: [45.895639, 16.842218],
	},

	'Kraljevska županijska oblast': {
		content:
			'<div class="modal-text">U 18. stoljeću bila je jednokatnica, u vlasništvu generala baruna Kleefelda. Godine 1783. car Josip II. odsjeo je u kući generala prilikom posjeta Bjelovaru. Zgrada je na prijelazu iz 19. u 20. stoljeće služila za potrebe Kraljevske županijske oblasti, a tom je prilikom i preoblikovana u dvokatnicu temeljem projekta zagrebačkog arhitekta Martina Pilara kada dobiva i današnje kasnohistoricističko pročelje.</div> <h3 class="modal-years">Oko 1928.</h3> <img class="modal-img" src="./img/full/Kraljevska/01 Kraljevska županijska oblast (oko 1928).jpg"></img>',
		coordinates: [45.897759, 16.842728],
	},

	'Velika vojarna': {
		content:
			'<div class="modal-text">Uz katedralni sklop, zgrada vojne komande najstarija je i najznačajnija zgrada u Bjelovaru. Izgrađena krajem 18. stoljeća na najstarijim je kartama grada ucrtana kao Komanda glavne straže. Svojim naglašenim volumenom kasnobaroknih stilskih karakteristika dominira sjeverozapadnim dijelom glavnog trga. Danas služi kao upravna zgrada Grada Bjelovara.</div> <h3 class="modal-years">Oko 1903.</h3> <img class="modal-img" src="./img/full/Zgrada/01 Zgrada Glavne vojarne (oko 1903).jpg"></img> <h3 class="modal-years">Oko 1915.</h3> <img class="modal-img" src="./img/full/Zgrada/02 Zgrada Glavne vojarne (oko 1915).jpg"></img> <h3 class="modal-years">Oko 1928.</h3> <img class="modal-img" src="./img/full/Zgrada/03 Zgrada Glavne vojarne (oko 1928).jpg"></img>',
		coordinates: [45.899163, 16.84129],
	},

	'Ulica Ivana Viteza trnskog': {
		content:
			'<div class="modal-text">Na planu iz 1772. godine saznajemo da se ulica zvala Sunčana ulica. Katastarski plan iz 1892./1893. godine donosi novi naziv ulice - Ulica Ivana viteza Trnskog. Ulica Ivana viteza Trnskog u prošlosti je povezivala Staro Sajmište s Banskim trgom. Na ovoj razglednici prikazuje drugu polovicu ulice s historicističkom zgradom s desne strane u prvom planu. S lijeve strane ulice vidi se dio vojnog opskrbnog skladišta te niz kuća koje su 1960-tih zamijenile višestambene zgrade.</div> <h3 class="modal-years">Oko 1905.</h3> <img class="modal-img" src="./img/full/01 Trnskova ulica (oko 1905).jpg"></img>',
		coordinates: [45.900107, 16.843409],
	},

	'Stara Pošta': {
		content:
			'<div class="modal-text">Zgrada je izgrađena 1899. godine prema projektu inženjera Ignaca Fišera. Godine 1960. dovršena je nova zgrada pošte.</div> <h3 class="modal-years">Oko 1913.</h3> <img class="modal-img" src="./img/full/01 Stara pošta, (oko 1913).jpg"></img>',
		coordinates: [45.898894, 16.841118],
	},

	'Stan potpukovnika Đurđevačke pukovnije': {
		content:
			'<div class="modal-text">Zgrada je ucrtana na najstarijim planovima grada već od kraja 18. stoljeća, najprije kao stan potpukovnika, zatim kao stan prvog majora, pri čemu je imala stambenu i službenu funkciju. Polovicom 19. stoljeća preuređena je u romantičarskom Rundbogenstilu, što se pripisuje poznatom arhitektu Franji Kleinu. Danas se koristi za potrebe Veleučilišta u Bjelovaru.</div> <h3 class="modal-years">Oko 1902.</h3> <img class="modal-img" src="./img/full/Stan potpukovnika Đurđevačke pukovnije (oko 1902).jpg"></img>',
		coordinates: [45.899745, 16.842062],
	},
};

// Adding icon, eventL & Modal window
for (const [title, data] of Object.entries(markerData)) {
	const marker = L.marker(data.coordinates, { icon: leafletIcon }).addTo(
		mapOfBjelovar,
	);

	marker.addEventListener('click', () => {
		L.control.window(mapOfBjelovar, { title }).content(data.content).show();
	});
}
