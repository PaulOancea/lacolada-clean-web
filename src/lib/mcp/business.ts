export const business = {
  name: "Lavandería LaColada Teruel",
  type: "Self-service laundromat",
  address: "Calle Santa Amalia 15, 44003 Teruel, Spain",
  hours: "Open every day, 8:00 – 22:00",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Calle+Santa+Amalia+15%2C+44003+Teruel%2C+Spain",
  mapUrl: "https://www.google.com/maps?q=Calle+Santa+Amalia+15,+44003+Teruel,+Spain",
  languages: ["es", "en", "ro"],
  highlights: [
    "Open every day",
    "Modern machines",
    "Eco-friendly detergents",
    "Fast 30-minute wash cycles",
  ],
} as const;

export const services = [
  { name: "Express wash", description: "Modern washers with fast 30-minute cycles." },
  { name: "Large capacity machines", description: "Ideal for blankets, duvets and family loads." },
  { name: "Dryers", description: "Powerful dryers that leave clothes ready to wear." },
  { name: "Eco products", description: "Detergent and softener included in every wash." },
] as const;

export const prices = {
  currency: "EUR",
  washing: [
    { machine: "Washer 12 kg", price: 5 },
    { machine: "Washer 16 kg", price: 7 },
  ],
  drying: [{ machine: "Dryer 18 kg", price: 3, note: "from €3" }],
  included: "Detergent and fabric softener are included in every wash.",
} as const;
