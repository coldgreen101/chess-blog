<script>
  export default function Greeting({ messages }) {
    const randomMessage = () =>
      messages[Math.floor(Math.random() * messages.length)];
    const [greeting, setGreeting] = messages[0];

    return (
      <dialog open>
        <article>
          <header>
            <button aria-label="Close" rel="prev"></button>
            <h3>{greeting}<strong>Thank You for Visiting!</strong></h3>
          </header>
          <button onClick={() => setGreeting(randomMessage())}>
            New Greeting
          </button>
        </article>
      </dialog>
    );
  }
</script>
