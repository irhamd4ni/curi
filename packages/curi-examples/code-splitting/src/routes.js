const store = {};

export default [
  {
    name: 'Home',
    path: '',
    preload: () => {
      return import('./components/Home.js')
        .then(home => {
          store['Home'] = home.default;
        });
    },
    call: () => store['Home']
  },
  {
    name: 'Contact',
    path: 'contact',
    preload: () => {
      return import('./components/Contact.js')
        .then(contact => {
          store['Contact'] = contact.default;
        });
    },
    call: () => store['Contact']
  }
];