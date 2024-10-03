// app.js
function checkVulnerabilities() {
    const targetSite = document.getElementById('targetSite').value;
    const resultDiv = document.getElementById('result');

    // Check for CORS vulnerability
    const corsRequest = new XMLHttpRequest();
    corsRequest.open('GET', targetSite, true);
    corsRequest.onload = function() {
        if (corsRequest.status === 200) {
            resultDiv.innerHTML += '<p>Target site is not vulnerable to CORS.</p>';
        } else {
            resultDiv.innerHTML += '<p>Target site is vulnerable to CORS.</p>';
        }
    };
    corsRequest.onerror = function() {
        resultDiv.innerHTML += '<p>Target site is not vulnerable to CORS.</p>';
    };
    corsRequest.send();

    // Check for XXS vulnerability
    try {
        const img = document.createElement('img');
        img.src = targetSite + '?param=' + encodeURIComponent('<img src=x onerror=alert(document.domain)>');
        document.body.appendChild(img);
        resultDiv.innerHTML += '<p>Target site is vulnerable to XXS.</p>';
    } catch (error) {
        resultDiv.innerHTML += '<p>Target site is not vulnerable to XXS.</p>';
    }
}
