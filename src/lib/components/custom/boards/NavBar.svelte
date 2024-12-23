<script>
	import { Plus, ClosePanel, Menu, Cross } from '$lib/icons';
	import { Folder } from 'lucide-svelte';
	import { run } from 'svelte/legacy';

	let isCollapsed;
	let isNavbarCollapsed = $state();
	// run(() => {
	// 	isCollapsed = $isNavbarCollapsed;
	// });
	let open;

	function toggleOpen() {
		open.set(!$open);
	}

	const togglePanel = () => {
		isCollapsed = !isCollapsed;
		$isNavbarCollapsed.set(isCollapsed);
	};
</script>

<nav>
	<div>
		<button>
			<Cross class="size-4" aria-hidden="true" />
		</button>
	</div>
</nav>
