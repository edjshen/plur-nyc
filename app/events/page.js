import { getEvents } from '../../lib/airtable';
import EventsClient from './EventsClient';

export const metadata = {
  title: 'Events — PLUR NYC',
  description: 'Explore PLUR NYC\'s history of underground events. Warehouses, rooftops, and secret locations across all five boroughs.',
};

export default async function EventsPage() {
  const events = await getEvents();

  return <EventsClient events={events} />;
}
