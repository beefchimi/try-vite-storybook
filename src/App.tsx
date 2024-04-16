import {Controlled, Uncontrolled} from './demo';
import {Brand} from './sections';
import {placeholderText} from './utilities';

import './App.css';

function App() {
  const isControlled = false;
  const contentMarkup = placeholderText(10).map((text) => (
    <p key={text}>{text}</p>
  ));

  return (
    <>
      <header>
        <h1>Floating UI — Popover</h1>
        <p>
          Originally forked from:{' '}
          <a
            href="https://floating-ui.com/docs/popover"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://floating-ui.com/docs/popover
          </a>
        </p>
      </header>

      <main>
        <h2>Popover Demo</h2>

        <Brand />

        <section className="Demo">
          {isControlled ? <Controlled /> : <Uncontrolled />}
        </section>

        <article className="Typography">{contentMarkup}</article>
      </main>

      <footer>
        <h6>&copy; All rights belong to some guy on a computer.</h6>
      </footer>
    </>
  );
}

export default App;
