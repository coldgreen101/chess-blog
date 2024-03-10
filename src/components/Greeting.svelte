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

  function closeDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
  }
</script>

<dialog open>
  <article>
    <header>
      <button aria-label="Close" rel="prev" on:click={closeDialog}></button>
      <h3>
        <strong>{$greeting}! Thank you for visiting!</strong>
      </h3>
    </header>
    <button on:click={setGreeting}> New Greeting</button>
  </article>
</dialog>
