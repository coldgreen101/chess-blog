<script>
  export let messages;

  import { onMount } from 'svelte';
  let greeting = messages[0];

  const randomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    if messages[randomIndex] == greeting {
      greeting = messages[randomIndex]
    } else {
      greeting = messages[0];
    }
  };

  onMount(() => {
    randomMessage();
  });
</script>

<dialog open>
  <article>
    <header>
      <button aria-label="Close" rel="prev"></button>
      <h3><strong>{greeting}! Thank You for Visiting!</strong></h3>
    </header>
    <button onClick={randomMessage}> New Greeting </button>
  </article>
</dialog>
