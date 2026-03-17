/**
 * Airtable API utility for fetching events from the "Published Events" base.
 * Reads the Personal Access Token from process.env.AIRTABLE.
 */

const AIRTABLE_PAT = process.env.AIRTABLE;
const BASE_NAME = 'Published Events';

/**
 * List all accessible bases and find the one named "Published Events".
 * Returns the base ID string.
 */
async function findBaseId() {
  const res = await fetch('https://api.airtable.com/v0/meta/bases', {
    headers: { Authorization: `Bearer ${AIRTABLE_PAT}` },
  });

  if (!res.ok) {
    console.error('Airtable meta/bases failed:', res.status, await res.text());
    return null;
  }

  const data = await res.json();
  const base = data.bases?.find((b) => b.name === BASE_NAME);
  return base?.id ?? null;
}

/**
 * Fetch all records from the first table in the given base.
 * Airtable tables are listed via the meta API; we pick the first one.
 */
async function fetchRecords(baseId) {
  // Discover table name
  const metaRes = await fetch(
    `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
    { headers: { Authorization: `Bearer ${AIRTABLE_PAT}` } }
  );

  if (!metaRes.ok) {
    console.error('Airtable tables meta failed:', metaRes.status);
    return [];
  }

  const metaData = await metaRes.json();
  const tableName = metaData.tables?.[0]?.name;
  if (!tableName) return [];

  // Fetch records
  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}?pageSize=100`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${AIRTABLE_PAT}` },
  });

  if (!res.ok) {
    console.error('Airtable records fetch failed:', res.status);
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
    const baseId = await findBaseId();
    if (!baseId) {
      console.warn(`Could not find base "${BASE_NAME}" — using placeholders`);
      return getPlaceholderEvents();
    }

    const records = await fetchRecords(baseId);
    if (!records.length) return getPlaceholderEvents();

    return records.map((r) => {
      const f = r.fields;
      return {
        id: r.id,
        name: f.Name || f.name || f.Title || f.title || 'Untitled Event',
        date: f.Date || f.date || f['Event Date'] || '',
        description: f.Description || f.description || f.Notes || f.notes || '',
        location: f.Location || f.location || f.Venue || f.venue || '',
        lat: parseFloat(f.Latitude || f.latitude || f.Lat || f.lat) || null,
        lng: parseFloat(f.Longitude || f.longitude || f.Lng || f.lng || f.Long || f.long) || null,
        imageUrl: f['Image URL'] || f.imageUrl || f.Image || null,
      };
    });
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
