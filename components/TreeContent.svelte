<script>
  import { onMount } from 'svelte'
  
  export let tree

  console.log('test')

  onMount(async () => {
    const res = await fetch('http://localhost:8787/api/trees')
      .then(res => res.json())
    console.dir(res)
  })
</script>

