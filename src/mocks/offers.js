const AVATAR_URL = `https://i.pravatar.cc/128`;

export default [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Coffee machine`, `Dishwasher`],
  host: {
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 1,
    isPro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
}, {
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 2,
    isPro: true,
    name: `Marc`
  },
  id: 2,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: `img/apartment-02.jpg`,
  price: 200,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
}, {
  bedrooms: 4,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
  host: {
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 3,
    isPro: true,
    name: `Emma`
  },
  id: 3,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 6,
  previewImage: `img/apartment-03.jpg`,
  price: 220,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `house`
}, {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: `Amsterdam`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 4,
    isPro: true,
    name: `Rick`
  },
  id: 4,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `room`
}
];
