import type { WordPressEvent } from '@/services/wordPressService';

export function centralDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now);
  const value = (type: string) => parts.find(part => part.type === type)?.value;
  return `${value('year')}-${value('month')}-${value('day')}`;
}
export const eventDay = (event: WordPressEvent) => (event.event_date || event.date).slice(0, 10);
export const isPastEvent = (event: WordPressEvent, today = centralDate()) => eventDay(event) < today;
export function selectEvents(events: WordPressEvent[], upcoming = true, today = centralDate()) {
  return events.filter(event => upcoming ? !isPastEvent(event, today) : isPastEvent(event, today)).sort((a, b) => {
    const order = `${eventDay(a)}T${a.event_time || '00:00'}`.localeCompare(`${eventDay(b)}T${b.event_time || '00:00'}`);
    return upcoming ? order : -order;
  });
}
export function formatEventDate(event: WordPressEvent) {
  return new Date(eventDay(event) + 'T12:00:00Z').toLocaleDateString('en-US', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' });
}
export function formatEventTime(event: WordPressEvent) {
  const format = (time: string) => {
    const [hour, minute] = time.split(':').map(Number);
    return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
  };
  if (!event.event_time) return 'Time TBA';
  return `${format(event.event_time)}${event.event_end_time ? ' to ' + format(event.event_end_time) : ''} Central Time`;
}
