import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <dialog open>
      <article>
        <header>
          <button aria-label="Close" rel="prev"></button>
          <h3>
            <strong>{greeting}!  Thank You for Visiting!</strong>
          </h3>
        </header>
        <button onClick={() => setGreeting(randomMessage())}>
          New Greeting
        </button>
      </article>
    </dialog>
  );
}
