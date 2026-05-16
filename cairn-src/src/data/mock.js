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

// ── Child-development preview fixtures (Children / Today / Pebble) ──
// Mirrors the iOS data contract so preview mode renders the real UI
// without a Firestore round-trip. dateOfBirth is a JS Date (matches
// what data.js maps Firestore Timestamps to).
export const mockChild = {
  id: 'preview-felix',
  name: 'Felix',
  dateOfBirth: new Date('2023-11-15'),
  profilePhotoURL: null,
  pronouns: 'he',
  themeColorHex: '#3D9B8F',
  developmentalFlags: ['speech and language'],
};

export const mockChildren = [mockChild];

// category ∈ motor|language|socialEmotional|cognitive
export const mockMilestones = [
  { id: 'm1', category: 'motor', title: 'Kicks a ball forward', status: 'achieved', ageRangeStartMonths: 18, ageRangeEndMonths: 24 },
  { id: 'm2', category: 'motor', title: 'Walks up stairs holding on', status: 'achieved', ageRangeStartMonths: 18, ageRangeEndMonths: 24 },
  { id: 'm3', category: 'motor', title: 'Jumps with both feet off the ground', status: 'emerging', ageRangeStartMonths: 24, ageRangeEndMonths: 30 },
  { id: 'm4', category: 'motor', title: 'Pedals a tricycle', status: 'notStarted', ageRangeStartMonths: 30, ageRangeEndMonths: 36 },
  { id: 'm5', category: 'language', title: 'Uses two-word phrases', status: 'achieved', ageRangeStartMonths: 18, ageRangeEndMonths: 24 },
  { id: 'm6', category: 'language', title: 'Says first name when asked', status: 'emerging', ageRangeStartMonths: 24, ageRangeEndMonths: 30 },
  { id: 'm7', category: 'language', title: 'Names six body parts', status: 'notStarted', ageRangeStartMonths: 24, ageRangeEndMonths: 30 },
  { id: 'm8', category: 'language', title: 'Uses three-word sentences', status: 'notStarted', ageRangeStartMonths: 30, ageRangeEndMonths: 36 },
  { id: 'm9', category: 'socialEmotional', title: 'Shows affection unprompted', status: 'achieved', ageRangeStartMonths: 18, ageRangeEndMonths: 24 },
  { id: 'm10', category: 'socialEmotional', title: 'Plays alongside other children', status: 'emerging', ageRangeStartMonths: 24, ageRangeEndMonths: 36 },
  { id: 'm11', category: 'socialEmotional', title: 'Takes turns in simple games', status: 'notStarted', ageRangeStartMonths: 30, ageRangeEndMonths: 42 },
  { id: 'm12', category: 'cognitive', title: 'Follows a two-step instruction', status: 'achieved', ageRangeStartMonths: 18, ageRangeEndMonths: 24 },
  { id: 'm13', category: 'cognitive', title: 'Sorts objects by shape or colour', status: 'emerging', ageRangeStartMonths: 30, ageRangeEndMonths: 36 },
  { id: 'm14', category: 'cognitive', title: 'Completes a 4-piece puzzle', status: 'notStarted', ageRangeStartMonths: 30, ageRangeEndMonths: 36 },
];

// type ∈ strength|watching|connection|nudge ; domain incl. cross
export const mockInsights = [
  { id: 'i1', type: 'strength', domain: 'language', title: 'Language is tracking ahead', body: 'Felix is combining words earlier than the typical 24–30 month window — keep the back-and-forth conversations going.', relevanceScore: 0.95 },
  { id: 'i2', type: 'connection', domain: 'cross', title: 'Fine-motor + sorting → pre-literacy', body: 'A strong pincer grip alongside early sorting is a classic pre-literacy signal. Picture books with pointing build on both at once.', relevanceScore: 0.82 },
  { id: 'i3', type: 'nudge', domain: 'language', title: 'Narrate your daily routine', body: '"Now we are washing hands… water on… soap…" — Felix is ready for longer sentence models during everyday moments.', relevanceScore: 0.7 },
];

export const mockDailyCard = {
  id: '2026-05-16',
  title: 'Felix is stringing two words together',
  body: 'You have logged "more milk" and "Daddy go" this week — early two-word speech, right on the edge of the 24–30 month window. Narrating your routine out loud is the single best way to grow sentence length from here.',
  topicForChat: "How can I support Felix's two-word speech?",
};

export const mockChildPebbleMessages = [
  { id: 'p1', role: 'user', content: "Felix isn't saying many words yet — should I be worried at 2.5?", senderUid: 'partner' },
  { id: 'p2', role: 'assistant', content: "At 2½, every child's pace differs. From your logs Felix **uses two-word phrases** and follows two-step instructions — both strong signs. A few practical things to try, and a clear marker for when to mention it at his check-up." },
  { id: 'p3', role: 'user', content: 'Any toddler-friendly ideas for a rainy weekend?', senderUid: 'thomas' },
  { id: 'p4', role: 'assistant', content: 'Rainy days are great for the kind of close-up play that grows language fastest at this stage. A few ideas matched to where Felix is right now.' },
];
