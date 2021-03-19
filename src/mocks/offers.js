const AVATAR_URL = `https://i.pravatar.cc/128`;

export default [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
    latitude: 52.3809553943508,
    longitude: 4.876309666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/apartment-01.jpg`,
  price: 140,
  rating: 3,
  title: `Amsterdam 1`,
  type: `apartment`
}, {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
  id: 5,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3919553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 5,
  title: `Amsterdam 2`,
  type: `apartment`
}, {
  bedrooms: 2,
  city: {
    location: {
      latitude: 48.856613,
      longitude: 2.352222,
      zoom: 10
    },
    name: `Paris`
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
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 48.857613,
    longitude: 2.332222,
    zoom: 8
  },
  maxAdults: 2,
  previewImage: `img/apartment-02.jpg`,
  price: 200,
  rating: 4.8,
  title: `Paris`,
  type: `apartment`
}, {
  bedrooms: 4,
  city: {
    location: {
      latitude: 50.937531,
      longitude: 6.960279,
      zoom: 10
    },
    name: `Cologne`
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
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 50.947531,
    longitude: 6.960279,
    zoom: 8
  },
  maxAdults: 6,
  previewImage: `img/apartment-03.jpg`,
  price: 220,
  rating: 4.8,
  title: `Cologne`,
  type: `house`
}, {
  bedrooms: 3,
  city: {
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 10
    },
    name: `Brussels`
  },
  description: `3`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: 4,
    isPro: true,
    name: `Rick`
  },
  id: 4,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 50.840346,
    longitude: 4.361721,
    zoom: 8
  },
  maxAdults: 4,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 4.8,
  title: `Brussels`,
  type: `room`
}
];
