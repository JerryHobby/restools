const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('hubs.html', 'utf-8');
const $ = cheerio.load(html);

const hubs = [];
$('table tr').slice(1).each((i, row) => {
    const cols = $(row).find('td');
    if (cols.length >= 4) {
        hubs.push({
            airline: $(cols[0]).text().trim(),
            iata: $(cols[1]).text().trim(),
            airport: $(cols[2]).text().trim(),
            city: $(cols[3]).text().trim()
        });
    }
});

fs.writeFileSync('hubs.json', JSON.stringify(hubs, null, 2));
