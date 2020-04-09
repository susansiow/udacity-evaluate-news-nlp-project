export function handleSubmit(event) {
    
    event.preventDefault()

    // Form Input and Output Variables

    let urlInput = document.querySelector('#url-input').value;
    let polarity = document.querySelector('#polarity');
    let scannedTexts = document.querySelector('#scanned-texts');

    // If input doesn't match Url format, return alert

    if (Client.simpleUrlCheck(urlInput) === false) {

        alert('Please enter an url.');

        // If polarity and scannedTexts has value, return null

        if (polarity.innerHTML && scannedTexts.innerHTML != null) {
            polarity.innerHTML = '';
            scannedTexts.innerHTML = '';
        }

        // Discontinue if the above if statement is true

        return;
    }

    fetch('http://localhost:8081/aylien-api', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({urlInput}) // Convert Url input into a string for server
    })

    .then(res => {
        return res.json()
    })

    .then(data => {

        // If input doesn't match Aylien Url validation, return alert and remove previous results

        if (data.validation != null) {

            alert(data.validation);
            console.log(`*** ${data.validation} ***`);

            polarity.innerHTML = '';
            scannedTexts.innerHTML = '';

        } else {

            // console.log(data); // For initial development stage only

            // Form output with Aylien API data

            polarity.innerHTML = `<h2>Polarity</h2><div class='results result-polarity'>${data.polarity}.</div>`;
            scannedTexts.innerHTML = `<h2>Scanned Texts</h2><div class='results result-scanned-texts'>${data.text}</div>`;

            // Log: Successful message

            console.log('*** Sucessful form input and output. ***')

        }
    })
}