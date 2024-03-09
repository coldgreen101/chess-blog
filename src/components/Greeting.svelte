<script>
  import { onMount } from 'svelte';

  export function Greeting({ messages }) {
    let greeting = messages[0];

    const randomMessage = () => {
      greeting = messages[Math.floor(Math.random() * messages.length)];
    };

    const setGreeting = () => {
      randomMessage();
    };

    onMount(() => {
      randomMessage();
    });

    return {
      greeting,
      setGreeting
    };
  }
</script>
<dialog open>
  <article>
    <header>
      <button aria-label="Close" rel="prev"></button>
      <h3>
        <strong>{greeting}! Thank You for visiting!</strong>
      </h3>
    </header>
    <button on:click={randomMessage}>New Greeting</button>
  </article>
</dialog>
