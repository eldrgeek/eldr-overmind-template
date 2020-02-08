console.log('on initialize');
export const onInitialize = ({ state, actions, effects }, instance) => {
  const attributes = state.stateAttributes || Object.keys(state).join(',');
  if (state.devState.restoreState)
    attributes.split(',').forEach(attr => {
      console.log('resotred ' + attr);
      state[attr] = effects.storage.getLocalAttribute(attr);
    });

  // effects.router.initialize({
  //   // '/': () => actions.changeFilter('all'),
  //   // '/active': () => actions.changeFilt('active'),
  //   // '/completed': () => actions.changeFilter('completed'),
  // });
};
