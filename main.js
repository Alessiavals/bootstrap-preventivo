// Tariffe orarie associate ai tipi di lavoro
const hourlyRates = {
    '1': 20.50, // Backend Development
    '2': 15.30, // Frontend Development
    '3': 33.60  // Project Analysis
};

// Codici promozionali validi
const validPromoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

// Seleziona elementi HTML
const calculateBtn = document.getElementById('calculateBtn');
const jobTypeElement = document.getElementById('jobType');
const promoCodeElement = document.getElementById('promo');
const priceResult = document.getElementById('priceResult');
const errorResult = document.getElementById('errorResult');

// Aggiungi evento al bottone per calcolare il preventivo
calculateBtn.addEventListener('click', function() {

    // Numero di ore predefinito
    const hours = 10;

    // Leggi il tipo di lavoro e cerca la tariffa
    const jobType = jobTypeElement.value;
    const hourlyRate = hourlyRates[jobType];

    // Se il tipo di lavoro non è valido
    if (!hourlyRate) {
        alert('Seleziona un tipo di lavoro valido.');
        return;
    }

    // Calcola il prezzo base
    let totalPrice = hourlyRate * hours;

    // Verifica il codice promozionale
    const promoCode = promoCodeElement.value.trim();
    if (promoCode && validPromoCodes.includes(promoCode)) {
        totalPrice *= 0.75; // Applica lo sconto del 25%
    } else if (promoCode) {
        // Mostra errore per codice non valido
        errorResult.textContent = 'Errore: Codice promozionale non valido.';
        errorResult.classList.remove('d-none');
    }

    // Mostra il prezzo finale
    priceResult.textContent = `Prezzo finale: € ${totalPrice.toFixed(2)}`;
    priceResult.classList.remove('d-none');
});
