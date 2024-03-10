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

<script context="module">
  export { closeDialog } from './Modal.astro';
</script>

<script>
  import Modal from './Modal.astro';
</script>


