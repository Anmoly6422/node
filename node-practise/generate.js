const fs = require('fs');
const selfsigned = require('selfsigned');

async function generateCert() {
    const attrs = [{ name: 'commonName', value: 'localhost' }];

    // ✅ await the promise
    const pems = await selfsigned.generate(attrs, { days: 365 });

    if (!pems.private || !pems.cert) {
        console.log("❌ Error generating certificate");
        console.log(pems);
        return;
    }

    fs.writeFileSync('key.pem', pems.private);
    fs.writeFileSync('cert.pem', pems.cert);

    console.log("✅ key.pem and cert.pem created successfully");
}

generateCert();