<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Modal from './Modal.astro';

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

<Modal />
