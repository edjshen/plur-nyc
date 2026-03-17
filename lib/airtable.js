/**
 * Airtable API utility for fetching events from the "Published Events" base.
 * Reads the Personal Access Token from process.env.AIRTABLE.
 */

const AIRTABLE_PAT = process.env.AIRTABLE;


/**
 * Fetch all records from the first table in the given base.
 * Airtable tables are listed via the meta API; we pick the first one.
 */
async function fetchRecords(baseId) {
  // The user specified the exact table name
  const tableName = 'Published Events';

  // Fetch records
  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}?pageSize=100`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${AIRTABLE_PAT}` },
  });

  if (!res.ok) {
    console.warn(`Airtable records fetch failed (${res.status}). Returning placeholders.`);
    return [];
  }

  const data = await res.json();
  return data.records ?? [];
}

/**
 * Returns a normalized array of event objects.
 */
export async function getEvents() {
  if (!AIRTABLE_PAT) {
    console.warn('No AIRTABLE env var set — returning placeholder events');
    return getPlaceholderEvents();
  }

  try {
    // Use the explicit Base ID provided by the user
    const baseId = process.env.AIRTABLE_BASE_ID || 'appu8RPrw3wZtD59p';

    // Fetch records
    const records = await fetchRecords(baseId);
    if (!records.length) return getPlaceholderEvents();

    // Geocode addresses sequentially to respect Nominatim rate limits (max 1 req/sec)
    const events = [];
    for (const r of records) {
      const f = r.fields;
      const eventName = f['event name'] || f.Name || 'Untitled Event';
      const venueName = f['venue name'] || '';
      const address = f['venue address'] || '';
      const date = f['show date'] || '';
      
      let lat = null;
      let lng = null;

      // Geocode the address using OpenStreetMap Nominatim
      if (address) {
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`, {
            headers: {
              'User-Agent': 'PLUR-NYC-Build-Script/1.0',
            }
          });
          const geodata = await res.json();
          if (geodata && geodata.length > 0) {
            lat = parseFloat(geodata[0].lat);
            lng = parseFloat(geodata[0].lon);
          }
          // Sleep to respect Nominatim's strict rate limits
          await new Promise(resolve => setTimeout(resolve, 1100));
        } catch (err) {
          console.error(`Geocoding error for ${address}:`, err);
        }
      }

      events.push({
        id: r.id,
        name: eventName,
        date: date,
        description: '',
        location: venueName ? `${venueName}${address ? ` (${address})` : ''}` : address,
        lat: lat,
        lng: lng,
        imageUrl: null,
      });
    }
    
    return events;
  } catch (err) {
    console.error('Airtable fetch error:', err);
    return getPlaceholderEvents();
  }
}

function getPlaceholderEvents() {
  return [
    {
      id: '1',
      name: 'Frequency Check',
      date: '2025-09-20',
      description: 'Warehouse techno night in Bushwick. Two rooms, six DJs, one frequency.',
      location: 'Bushwick, Brooklyn',
      lat: 40.6944,
      lng: -73.9213,
      imageUrl: null,
    },
    {
      id: '2',
      name: 'Bass Cathedral',
      date: '2025-11-15',
      description: 'A subterranean bass music experience beneath the Manhattan Bridge.',
      location: 'DUMBO, Brooklyn',
      lat: 40.7033,
      lng: -73.9893,
      imageUrl: null,
    },
    {
      id: '3',
      name: 'Neon Drift',
      date: '2026-01-10',
      description: 'Progressive house on a rooftop overlooking the East River. Heated, covered, unreal.',
      location: 'Williamsburg, Brooklyn',
      lat: 40.7081,
      lng: -73.9571,
      imageUrl: null,
    },
    {
      id: '4',
      name: 'Concrete Bloom',
      date: '2026-03-21',
      description: 'Spring equinox celebration. Ambient to hard techno sunrise set.',
      location: 'Ridgewood, Queens',
      lat: 40.7003,
      lng: -73.9059,
      imageUrl: null,
    },
    {
      id: '5',
      name: 'Phantom Frequency',
      date: '2026-06-14',
      description: 'Secret location, released 2 hours before. Minimal techno, maximal vibes.',
      location: 'Undisclosed, NYC',
      lat: 40.7282,
      lng: -73.7949,
      imageUrl: null,
    },
  ];
}
