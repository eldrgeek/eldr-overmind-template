// import page from 'page';
// console.log('loading effects!');
export const storage = (() => {
  return {
    initialize(state) {},
    async saveLocalAttribute(attr, value) {
      console.log('saving ', attr, value);
      localStorage.setItem(attr, JSON.stringify(value));
    },

    getLocalAttribute(attr, value) {
      let saved = localStorage.getItem(attr);
      console.log('recovered', attr, saved, JSON.parse(saved));
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.log(saved);
        console.log(e);
        return value;
      }
    },
  };
})();

// export const router = {
//   initialize(routes) {
//     Object.keys(routes).forEach(url => {
//       page(url, ({ params }) => routes[url](params));
//     });
//     page.start();
//   },
//   goTo(url) {
//     page.show(url);
//   },
// };

// export const ids = {
//   create() {
//     return Date.now().toString();
//   },
// };
