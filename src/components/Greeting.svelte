<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let messages;

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const greeting = writable(messages[0]);

  onMount(() => {
    greeting.set(messages[0]);
  });

  function setGreeting() {
    greeting.set(randomMessage());
  }
</script>

<dialog open>
  <article>
    <header>
      <button aria-label="Close" rel="prev"></button>
      <p>
        <strong>🗓️ Thank You for Registering!</strong>
      </p>
    </header>
    <button>
      New Greeting
    </button>
  </article>
</dialog>
