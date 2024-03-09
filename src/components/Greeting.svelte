<script>
  import { onMount } from 'svelte';

  let messages = [];
  let greeting = '';

  const randomMessage = () => {
    greeting = messages[Math.floor(Math.random() * messages.length)];
  }

  onMount(() => {
    randomMessage();
  });
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
