<script>
  import { onMount } from 'svelte';

  export let messages;

  function getRandomIndex() {
    return Math.floor(Math.random() * messages.length);
  }

  let randomIndex = getRandomIndex();
  let greeting = messages[randomIndex];

  function changeGreeting() {
    randomIndex = getRandomIndex();
    greeting = messages[randomIndex]
  }
</script>
