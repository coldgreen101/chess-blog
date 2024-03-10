<script>
  export let messages;

  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const greeting = writable(messages[0]);

  const randomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    greeting.set(messages[randomIndex]);
  };

  onMount(() => {
    randomMessage();
  });
</script>

<dialog open>
  <article>
    <header>
      <button aria-label="Close" rel="prev"></button>
      <h3><strong>{$greeting}! Thank You for Visiting!</strong></h3>
    </header>
    <button onClick={randomMessage}> New Greeting </button>
  </article>
</dialog>
