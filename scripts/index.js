var pastDate = '19950405';
var now = new Date();
var currentDate = [
    now.getFullYear(),
    ('0' + (now.getMonth() + 1)).slice(-2),
    ('0' + now.getDate()).slice(-2),
].join('');
var years = Math.floor((currentDate - pastDate) * 0.0001);

window.onload = function () {
    document.getElementById('aboutmetxt').innerHTML = index_array[0].text + '<br><br><br>Last update: ' + index_array[0].date;
}

// ---------- Array ----------

let index_array = [
    {
        'date': '15.4.2024',
        'text': '<h5  style="margin-bottom: 20px;">Miika Pihkola | Eurovaaliehdokas</h5>' +
            // Lyhyesti minusta
            '<h6  style="margin-bottom: 20px;">Lyhyesti minusta</h6>Olen Lappeenrannassa asusteleva it-tradenomi opiskelija ja ikää on ehtinyt kertyä ' + years + ' vuotta. Opiskelut on vähän venähtäny kun olen etsinyt sitä sopivalta tuntuvaa alaa, mutta nyt koen löytäneeni sen itselleni sopivan. Opintojen ohella olen ollut aktiivinen muutamassa harrasteyhdistyksessä. Pisimpään olen ollut Pikametallimiehet ry:n hallituksessa, jossa olen ollut mukana tekemässä muutosta kerhosta yhdistykseksi vuonna 2018 ja tällähetkellä olen kyseisen yhdistyksen www-vastaava. Olen myös vuonna 2023 piipahtanut Pelikerho Louhi ry:n hallituksessa ja päädyin nykyisten opintojeni alussa opiskelu ryhmäni ryhmänedustajaksi, sekä onnistuin pääsemään 2024 keväällä mensan jäseneksi. Vapaa-ajan, siis sellaisen jota en käytä opiskeluun tai milloin mihinkin hupi projektiin, käytän usein pelaamiseen, kavereitten kanssa lautapelejä taikka sitten koneella jotain mielenkiintoista peliä.<br><br>' +
            // Minä ja Liberaalipuolue
            '<h6  style="margin-bottom: 20px;">Minä ja Liberaalipuolue</h6>Liberaalipuolueen kaakon piiriin liityin vuonna 2023 eduskunta vaalien aikoihin, sillä olen aina kokenut ettei mikään isoista puolueista ole itselleni sopiva, "Miksi pitäisi valita vastuullisen rahankäytön ja liberaalin vapausaatten väliltä?", mutta noissa vaaleissa törmäsin omaa ehdokasta etsiessäni tähän sopivaan pienpuolueeseen. Liittymisen jälkeen jo heti vuonna 2024 päädyin kaakon piirin hallitukseen ja eurovaaliehdokkaaksi.'
    }
]