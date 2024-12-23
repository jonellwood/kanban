<script>
	let { children } = $props();
	import NavBar from '$lib/components/custom/boards/NavBar.svelte';
</script>

<!-- <slot /> -->

{@render children()}

<style>
	@import 'https://unpkg.com/@picocss/pico@latest/css/pico.min.css';

	:global(body) {
		padding: 2rem;
	}

	:global(input, button) {
		border-radius: 0.25rem;
		padding: 0.5rem;
	}
	:global(button.delete) {
		font-size: medium;
		background-color: tomato;
		color: white;
		border: 1px solid darkred;
	}
	:global(select) {
		padding: 0.4rem;
	}
</style>
