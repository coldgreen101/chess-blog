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

<
