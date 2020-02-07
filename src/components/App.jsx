import { CurrentModule, React, useApp } from '../CurrentModule';
const App = () => {
  const { state, actions } = useApp();

  return (
    <React.Fragment>
      <section className="todoapp">
        <header className="header">
          <h1>Template </h1>
          <h2>{state.testValue} </h2>
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
