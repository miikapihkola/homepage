var pastDate = '19950405';
var now = new Date();
var currentDate = [
    now.getFullYear(),
    ('0' + (now.getMonth() + 1)).slice(-2),
    ('0' + now.getDate()).slice(-2),
].join('');
var years = Math.floor((currentDate - pastDate) * 0.0001);

window.onload = function () {
    document.getElementById('aboutmetxt').innerHTML = index_array[0].text;
}

// ---------- Array ----------

let index_array = [
    {
        'date': '2.4.2024',
        'text': '<h5  style="margin-bottom: 20px;">Miika Pihkola</h5>Olen Lappeenrannassa asusteleva it-tradenomi opiskelija ja ikää on jo ehtinyt kertyä ' + years + ' vuotta.'
    }
]