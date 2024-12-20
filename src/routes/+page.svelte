<script>
	import TaskAdder from '../lib/components/TaskAdder.svelte';
	import TaskList from '../lib/components/TaskList.svelte';
	import Taskcount from '../lib/components/Taskcount.svelte';
	// import Task from '../lib/components/Task.svelte';
	// import { liveQuery } from 'dexie';
	// import { db } from '../lib/database/db.js';
	// import { onDestroy } from 'svelte';

	// const tasks = db.tasks.toArray();
</script>

<h1>My Kanban App</h1>
<Taskcount />
<div class="main">
	<div class="kanban-board">
		<TaskList />
	</div>
	<TaskAdder />
</div>

<style>
	.main {
		display: grid;
		grid-template-columns: 80% 20%;
		margin: 20px;
		padding: 20px;
	}
	/* ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	} */

	/* span {
		text-transform: capitalize;
	} */

	/* .delete {
		margin: 0;
		background: none;
		border: none;
	} */

	/* .error {
		color: tomato;
	} */
</style>
