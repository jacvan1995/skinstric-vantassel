const StepWrapper = ({ children, next }) => (
  <div className="skinstric-wrapper">
    <header className="skinstric-logo-row">
      <h1 className="skinstric-logo-text">SKINSTRIC</h1>
      <span className="skinstric-info-text">[ INTRO ]</span>
    </header>

    <main>{children}</main>

    <footer>
      <button onClick={next}>Next</button>
    </footer>
  </div>
);

export default StepWrapper;