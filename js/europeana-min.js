let pageNumber=1,searchTerm="",index=0;const search=async()=>{const e=`?wskey=aroplosuitin&query=${searchTerm}&start=${pageNumber}&rows=20&profile=rich'`,a=await fetch("https://api.europeana.eu/record/v2/search.json"+e);if(200!==a.status)throw new Error("Cannot fetch data. Response status is not 200.");return await a.json()},searchEuropeana=async()=>await search(),searchForm=document.querySelector("#search-form");searchForm.addEventListener("submit",(e=>{e.preventDefault(),searchTerm=searchForm.search.value.trim();const a=document.querySelector(".error");searchEuropeana().then((e=>{updateUI(e)})).catch((e=>{console.log("An error occured:",e),a.innerText="Pretraga nije uspjela. Provjerite jeste li spojeni na mrežu."}))}));const searchAgain=document.createElement("button");searchAgain.setAttribute("class","btn"),searchAgain.setAttribute("type","submit"),searchAgain.setAttribute("title","Pretraži ponovno"),searchAgain.innerText="Pretraži ponovno",searchAgain.addEventListener("click",(()=>{window.location.reload()}));const resultsOutput=document.createElement("p");resultsOutput.setAttribute("class","results");const updateUI=e=>{const a=e.totalResults,n=document.querySelector("#europeana-search"),r=document.querySelector(".filters");if(resultsOutput.innerText=`Sveukupno rezultata: ${a}`,n.append(resultsOutput),a>0){const e=document.querySelector("#search"),a=document.querySelector("#searchButton");e.style.display="none",a.style.display="none",searchForm.append(searchAgain);document.querySelector("#load-more").style.display="block",r.style.display="flex",r.style.flexFlow="row wrap",r.style.justifyContent="center",r.style.gap="0 0.5rem"}const t=e.itemsCount,c=index+t;moreBtn.style.display=a>20&&c<a?"initial":"none",e.items.forEach((e=>{index++;const n=e.title,r=e.edmIsShownBy,t=e.edmPreview?e.edmPreview[0]:"Slika nije raspoloživa.",c=e.year?e.year:"Nije raspoloživa.",l=e.dataProvider,i=e.country,s=e.type.toLowerCase(),o=e.rights,d=e.edmIsShownAt?e.edmIsShownAt:"";let L,p,g,m,u;L=void 0!==e.dcSubjectLangAware?e.dcSubjectLangAware.hr||e.dcSubjectLangAware.hrv||e.dcSubjectLangAware.en||e.dcSubjectLangAware.eng||e.dcSubjectLangAware.def||e.dcSubjectLangAware.sr||e.dcSubjectLangAware.de||e.dcSubjectLangAware.fr||e.dcSubjectLangAware.it||e.dcSubjectLangAware.la||e.dcSubjectLangAware.nl||e.dcSubjectLangAware.es||e.dcSubjectLangAware.sv||e.dcSubjectLangAware.cs||e.dcSubjectLangAware.pl||e.dcSubjectLangAware.pt||e.dcSubjectLangAware.ru||e.dcSubjectLangAware.sl||e.dcSubjectLangAware.hu||e.dcSubjectLangAware.et||e.dcSubjectLangAware.fi||e.dcSubjectLangAware.lv:"Nije raspoloživ.",p=void 0!==e.dcDescriptionLangAware?e.dcDescriptionLangAware.hr||e.dcDescriptionLangAware.hrv||e.dcDescriptionLangAware.en||e.dcDescriptionLangAware.eng||e.dcDescriptionLangAware.def||e.dcDescriptionLangAware.sr||e.dcDescriptionLangAware.de||e.dcDescriptionLangAware.fr||e.dcDescriptionLangAware.it||e.dcDescriptionLangAware.la||e.dcDescriptionLangAware.deu||e.dcDescriptionLangAware.nl||e.dcDescriptionLangAware.es||e.dcDescriptionLangAware.sv||e.dcDescriptionLangAware.cs||e.dcDescriptionLangAware.pl||e.dcDescriptionLangAware.pt||e.dcDescriptionLangAware.ru||e.dcDescriptionLangAware.sl||e.dcDescriptionLangAware.hu||e.dcDescriptionLangAware.et||e.dcDescriptionLangAware.fi||e.dcDescriptionLangAware.lv:"Nije raspoloživ.",g=void 0!==e.edmConceptPrefLabelLangAware?e.edmConceptPrefLabelLangAware.hr||e.edmConceptPrefLabelLangAware.hrv||e.edmConceptPrefLabelLangAware.en||e.edmConceptPrefLabelLangAware.eng||e.edmConceptPrefLabelLangAware.def&&e.edmConceptPrefLabelLangAware.def[0]||e.edmConceptPrefLabelLangAware.sr||e.edmConceptPrefLabelLangAware.de||e.edmConceptPrefLabelLangAware.fr||e.edmConceptPrefLabelLangAware.it||e.edmConceptPrefLabelLangAware.la||e.edmConceptPrefLabelLangAware.nl||e.edmConceptPrefLabelLangAware.sv||e.edmConceptPrefLabelLangAware.es||e.edmConceptPrefLabelLangAware.cs||e.edmConceptPrefLabelLangAware.pl||e.edmConceptPrefLabelLangAware.pt||e.edmConceptPrefLabelLangAware.ru||e.edmConceptPrefLabelLangAware.sl||e.edmConceptPrefLabelLangAware.hu||e.edmConceptPrefLabelLangAware.et||e.edmConceptPrefLabelLangAware.fi||e.edmConceptPrefLabelLangAware.lv:"Nije raspoloživ.",m=void 0!==e.edmPlaceLabelLangAware?e.edmPlaceLabelLangAware.hr||e.edmPlaceLabelLangAware.hrv||e.edmPlaceLabelLangAware.en||e.edmPlaceLabelLangAware.eng||e.edmPlaceLabelLangAware.def&&e.edmPlaceLabelLangAware.def[0]||e.edmPlaceLabelLangAware.sr||e.edmPlaceLabelLangAware.de||e.edmPlaceLabelLangAware.fr||e.edmPlaceLabelLangAware.it||e.edmPlaceLabelLangAware.la||e.edmPlaceLabelLangAware.nl||e.edmPlaceLabelLangAware.sv||e.edmPlaceLabelLangAware.cs||e.edmPlaceLabelLangAware.pl||e.edmPlaceLabelLangAware.pt||e.edmPlaceLabelLangAware.ru||e.edmPlaceLabelLangAware.sl||e.edmPlaceLabelLangAware.hu||e.edmPlaceLabelLangAware.et||e.edmPlaceLabelLangAware.fi||e.edmPlaceLabelLangAware.es:"Nije raspoloživo.",u=void 0!==e.edmTimespanLabelLangAware?e.edmTimespanLabelLangAware.hr||e.edmTimespanLabelLangAware.hrv||e.edmTimespanLabelLangAware.en||e.edmTimespanLabelLangAware.eng||e.edmTimespanLabelLangAware.def||e.edmTimespanLabelLangAware.sr||e.edmTimespanLabelLangAware.de||e.edmTimespanLabelLangAware.fr||e.edmTimespanLabelLangAware.it||e.edmTimespanLabelLangAware.la||e.edmTimespanLabelLangAware.nl||e.edmTimespanLabelLangAware.es||e.edmTimespanLabelLangAware.sv||e.edmTimespanLabelLangAware.cs||e.edmTimespanLabelLangAware.pl||e.edmTimespanLabelLangAware.pt||e.edmTimespanLabelLangAware.ru||e.edmTimespanLabelLangAware.sl||e.edmTimespanLabelLangAware.hu||e.edmTimespanLabelLangAware.et||e.edmTimespanLabelLangAware.fi||e.edmTimespanLabelLangAware.lv:"Nije raspoloživ.";const w=document.querySelector("#output");index<=a&&(w.innerHTML+=`\n\t\t\t<div class="result-group" tabindex="0" data-filter="${s}">\n\t\t\t\t<h3 class="europeana-heading">${index}. ${n}</h3>\n\t\t\t\t<a href="${r}" target="blank" rel="noopener" title="${n}"><img class="image europeana" src="${t}" alt="${n}"></a>\n\t\t\t\t<span class="enlarge-image">Klikni na fotografiju i uvećaj</span>\n\t\t\t\t<br>\n\t\t\t\t<p>Predmet: ${L}</p>\n\n\t\t\t\t<p>Godina: ${c}</p>\n\n\t\t\t\t<p>Opis: ${p}</p>\n\n\t\t\t\t<p>Dodatan opis: ${g}</p>\n\n\t\t\t\t<p>Mjesto: ${m}</p>\n\n\t\t\t\t<p>Izvor: ${l}</p>\n\n\t\t\t\t<p>Zemlja: ${i}</p>\n\n\t\t\t\t<p>Period: ${u}</p>\n\n\t\t\t\t<p>Vrsta datoteke: ${s}</p>\n\n\t\t\t\t<p>Licenca: <a class="underline" href="${o}" target="_blank" rel="noopener" title="Saznajte kako je datoteka zaštićena i kako se možete koristiti njome">Vrsta licence za korištenje datoteke</a></p>\n\n\t\t\t\t<p>Predmet se nalazi u: <a class="underline" href="${d}" target="_blank" rel="noopener" title="Muzej u kojem je predmet izložen">Vanjska poveznica na dotični muzej</a></p>\n\t\t\t</div>\n\t\t`)}));const l=document.querySelectorAll(".filter-btn"),i=document.querySelectorAll(".result-group");l.forEach((e=>{e.addEventListener("click",(()=>{for(let e=0;e<l.length;e++)l[e].classList.remove("active");e.classList.add("active"),i.forEach((a=>{a.style.display="none";let n=e.title;a.getAttribute("data-filter")!==n&&"sve"!==n||(a.style.display="block")}))}))}))},moreBtn=document.querySelector("#moreBtn");moreBtn.addEventListener("click",(()=>{pageNumber++,resultsOutput.innerText="",searchEuropeana().then((e=>{updateUI(e)})).catch((e=>{console.log("An error occured:",e),errorOutput.innerText="Traženi pojam nije pronađen. Provjerite jeste li ga točno upisali ili upišite neki drugi pojam, a provjerite i jeste li spojeni na mrežu."}))}));