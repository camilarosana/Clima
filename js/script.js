const key = 'e093af720b80c65f141746a2ee0efd8c';
const btn = document.querySelector('#btn');


// função
function showData(dados) {
    document.querySelector('.result h2').innerHTML = "Tempo em: " +dados.name;
    document.querySelector('.result p').innerHTML = Math.floor(dados.main.temp) + '°C';
    document.querySelector('.info p').innerHTML = dados.weather[0].description;
    document.querySelector('#umi').innerHTML = "Umidade: " +dados.main.humidity + '%';
}

function clickBtn() {
    const input = document.querySelector('#city').value;
    searchCity(input);
};
async function searchCity(input) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    showData(dados);
};


// evento
btn.addEventListener('click', (e)=>{
    clickBtn();
});