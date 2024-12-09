from bs4 import BeautifulSoup
import json

def extract_hubs():
    with open('hubs.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    table = soup.find('table')
    if not table:
        return []
    
    hubs = []
    rows = table.find_all('tr')[1:]  # Skip header row
    
    for row in rows:
        cols = row.find_all('td')
        if len(cols) >= 4:
            hub = {
                'airline': cols[0].get_text(strip=True),
                'iata': cols[1].get_text(strip=True),
                'airport': cols[2].get_text(strip=True),
                'city': cols[3].get_text(strip=True)
            }
            hubs.append(hub)
    
    return hubs

if __name__ == '__main__':
    hubs = extract_hubs()
    with open('hubs.json', 'w', encoding='utf-8') as f:
        json.dump(hubs, f, indent=2)
