let i_value = 0;

window.onload = function () {
    update();
}
function next() {
    $("#maintext").slideUp("slow", function () {
        i_value = validIndex(--i_value);
        update();
        localStorage.setItem('index', i_value);
    });
    $("#maintext").slideDown("slow", function () { });
}
function prev() {
    $("#maintext").slideUp("slow", function () {
        i_value = validIndex(++i_value);
        update();
        localStorage.setItem('index', i_value);
    });
    $("#maintext").slideDown("slow", function () { });
}
function validIndex(value) {
    if (value >= vaaliteema_array.length) {
        value = 0;
    }
    else if (value < 0) {
        value = vaaliteema_array.length - 1;
    }
    return value;
}

function update() {
    document.getElementById('maintext').innerHTML = vaaliteema_array[i_value].text + '<br><br><br>Last update: ' + vaaliteema_array[i_value].date;
    document.getElementById('current_title').innerHTML = vaaliteema_array[i_value].title;
    document.getElementById('prev_title').innerHTML = vaaliteema_array[validIndex(i_value + 1)].title;
    document.getElementById('next_title').innerHTML = vaaliteema_array[validIndex(i_value - 1)].title;
}

// ---------- Array ----------
// Next = newer, Prev = older
//
// Fill from TOP

let vaaliteema_array = [
    {
        'date': '15.4.2024',
        'title': 'Eurovaalit 2024',
        'text': '1. Euroopan yhtenäisyys:<br>' +
            'Eurooppa tarvitsee yhtenäisen rajapolitiikan jotta rajan ylittäminen ja turvapaikan hakeminen olisi yhtä helppoa tai vaikeaa riippumatta minkä maan raja on kyseessä. Myöskin olisi hyvä että turvapaikkojen aiheuttamaa taakkaa jaettaisiin taisesti eu maiden kesken. Tosin ihan kaikkea ei kannatta yhdistää, esimerkiksi uudet pullonkorkit, vesiputki direktiivi taikka suunnitteilla oleva pullojen kierrätys systeemin pakottaminen juuri tietynlaiseksi. Euroopan myös tulisi yhtenäisesti tukea ukrainaa vielä enemmän.<br><br>' +
            '2. Puolustusteollisuus ylös:<br>' +
            'Eurooppassa pitäisi käynnistää ja tukea puolustusteollisuutta sillä nykyinenen maailmantilanne vaatii sitä. Jos meillä ei ole lähettää tarvikkeita ukrainaan niin herää kysymys, onko meillä riittävästi edes itsemme puolustamiseen? Helppo tapa lisätä puolustusteollisuutta olisi mahdollistaa tällaisen toiminnan tukirahoittaminen.<br><br>' +
            '3. Vastuullista rahankäyttöä:<br>' +
            'Koen tärkeänä että rahankäytössä oltaisiin vastuullisia. Vaikka en suoraan kiellä ideaa yhteislainoista, on niitten kohteiden oltava jotain mikä selvästi vaatii yhteislainan eikä sellaisia minkä jokainen maa voisi halutessaan itse ottaa jos kokee sen tarpeellisena. Samoin maataloustukimalli vaatisi uudistamista, sillä nykyinen malli vaikuttaa tehottomalta ja eriarvoistavalta.<br><br>' +
            'Muita kantoja lyhyesti:<br>' +
            'Euroopan hiilivoimalat korvataan ydinvoimalla, suomen oikeus alkon monopoliin on purettava, nuuska ja kannabis on laillistettava kaikissa euroopan maissa.<br><br>' +
            'Liberaalipuolueen <a href="https://liberaalipuolue.fi/europarlamenttivaalit-2024/">Eurovaaliohjelma</a>'

    },
    {
        'date': '2.4.2024',
        'title': 'Kuntavaalit 2025',
        'text': 'TBA'
    }
]