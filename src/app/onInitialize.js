export const onInitialize = ({ state, actions, effects }, instance) => {
  state.localAttributes
    .split(',')
    .forEach(attr => (state[attr] = effects.storage.getLocalAttribute(attr)));

  // console.log('on initializw');

  // effects.router.initialize({
  //   // '/': () => actions.changeFilter('all'),
  //   // '/active': () => actions.changeFilt('active'),
  //   // '/completed': () => actions.changeFilter('completed'),
  // });
};
//