document.addEventListener("DOMContentLoaded", function () {
    // Utilizamos la API de criptoya.com para obtener los datos del dólar
    const apiUrl = "https://criptoya.com/api/dolar";

    // Realizamos una solicitud a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Muestra las tasas de cambio en la página
            mostrarTasasDeCambio(data);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});

function mostrarTasasDeCambio(tasas) {
    // Actualiza el código según la estructura de datos de la API criptoya.com
    document.getElementById("dolarBlueAsk").innerHTML = `<strong>Dólar Blue (Venta):</strong> $${tasas.blue.ask}`;
    document.getElementById("dolarBlueBid").innerHTML = `<strong>Dólar Blue (Compra):</strong> $${tasas.blue.bid}`;
    document.getElementById("criptoCCBAsk").innerHTML = `<strong>Cripto CCB (Venta):</strong> $${tasas.cripto.ccb.ask}`;
    document.getElementById("criptoCCBBid").innerHTML = `<strong>Cripto CCB (Compra):</strong> $${tasas.cripto.ccb.bid}`;
    document.getElementById("mepAL30").innerHTML = `<strong>Dólar MEP:</strong> $${tasas.mep.al30["48hs"].price}`;
    document.getElementById("mepCI").innerHTML = `<strong>MEP CI:</strong> $${tasas.mep.ci.price}`;
    document.getElementById("cclAL30").innerHTML = `<strong>CCL AL30:</strong> $${tasas.ccl.al30["48hs"].price}`;
    document.getElementById("cclCI").innerHTML = `<strong>CCL CI:</strong> $${tasas.ccl.ci.price}`;
}
