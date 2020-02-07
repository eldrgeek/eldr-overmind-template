import { CurrentModule, React, useApp } from '../CurrentModule';
const App = () => {
  const { state, actions } = useApp();

  return (
    <React.Fragment>
      <section className="todoapp">
        <header className="header">
          <h1>{state.testValue} </h1>
        </header>
        {/* <MediaPlayer />

        <TranslationDisplay /> */}
        <section className="main" />
      </section>
    </React.Fragment>
  );
};

export default App;
CurrentModule(App);
