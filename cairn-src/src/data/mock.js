// Mock data for preview mode. Replaced by Firestore reads once auth + family flow lands.

export const mockUser = {
  uid: 'preview-user',
  displayName: 'Thomas Paris',
  email: 'thomas@example.com',
  photoURL: null,
};

export const mockMembers = [
  { uid: 'thomas', displayName: 'Thomas', circles: ['immediate'], hue: 198 },
  { uid: 'partner', displayName: 'Élise', circles: ['immediate'], hue: 8 },
  { uid: 'kid1', displayName: 'Oscar', circles: ['immediate'], hue: 142 },
  { uid: 'kid2', displayName: 'Mila', circles: ['immediate'], hue: 44 },
  { uid: 'mum', displayName: 'Mum', circles: ['extended'], hue: 320 },
  { uid: 'dad', displayName: 'Dad', circles: ['extended'], hue: 28 },
  { uid: 'sister', displayName: 'Camille', circles: ['extended'], hue: 280 },
  { uid: 'bro-in-law', displayName: 'Sam', circles: ['extended'], hue: 175 },
  { uid: 'niece', displayName: 'Léa', circles: ['extended'], hue: 100 },
];

export const mockTrips = [
  {
    id: 't1',
    title: 'Côte d’Azur, summer',
    location: 'Antibes, France',
    start: '2026-07-12',
    end: '2026-07-21',
    coverGradient: 'linear-gradient(135deg, #6b9ac4 0%, #c98a8a 60%, #d4a843 100%)',
    lodgingHost: 'Airbnb',
    lodgingTitle: 'Villa near Cap d’Antibes',
    attendees: ['thomas', 'partner', 'kid1', 'kid2', 'mum', 'dad'],
    notes: 'Mum + Dad arrive day 2. Dinner reservations at La Guérite booked.',
    visibility: 'extended',
  },
  {
    id: 't2',
    title: 'Half-term in the Alps',
    location: 'Chamonix, France',
    start: '2026-10-24',
    end: '2026-10-31',
    coverGradient: 'linear-gradient(135deg, #7a9e7e 0%, #4a6754 70%, #2c4439 100%)',
    lodgingHost: 'Booking.com',
    lodgingTitle: 'Chalet Les Drus',
    attendees: ['thomas', 'partner', 'kid1', 'kid2'],
    notes: 'Need ski school for the kids — book by September.',
    visibility: 'immediate',
  },
  {
    id: 't3',
    title: 'Camille’s 40th',
    location: 'Lisbon, Portugal',
    start: '2026-09-05',
    end: '2026-09-08',
    coverGradient: 'linear-gradient(135deg, #c67b5c 0%, #d4a843 50%, #c98a8a 100%)',
    lodgingHost: 'Airbnb',
    lodgingTitle: 'Alfama rooftop apartment',
    attendees: ['thomas', 'partner', 'sister', 'bro-in-law'],
    notes: 'Surprise. Don’t mention to Camille.',
    visibility: 'family',
  },
];

export const mockEvents = [
  { id: 'e1', type: 'birthday', date: '2026-05-24', personIds: ['mum'], title: 'Mum’s birthday' },
  { id: 'e2', type: 'anniversary', date: '2026-05-28', personIds: ['mum', 'dad'], title: 'Mum & Dad’s anniversary', subtitle: '38 years' },
  { id: 'e3', type: 'birthday', date: '2026-06-11', personIds: ['kid1'], title: 'Oscar turns 7' },
  { id: 'e4', type: 'birthday', date: '2026-06-30', personIds: ['niece'], title: 'Léa’s birthday' },
];

export const mockFamily = {
  id: 'preview-family',
  name: 'Paris family',
  inviteCode: 'CAIRN-7Q4P',
};
