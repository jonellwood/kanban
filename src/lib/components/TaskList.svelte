<script>
	import { liveQuery } from 'dexie';
	import { db } from '../database/db.js';
	// import Task from './Task.svelte';

	$: tasks = liveQuery(async () => db.tasks.toArray());
	async function deleteTask(id) {
		await db.tasks.delete(id);
	}
	async function updateTask(id, field, val) {
		await db.tasks.where('id').equals(id).modify({ field, val, updatedAt: new Date() });
	}
</script>

{$tasks == null ? 'loading...' : ''}

{#each $tasks as task (task.id)}
	<div class="task-card {task.status}">
		<p class="progress badge">{task.progress}</p>
		<h2>{task.title}</h2>
		<p>{task.description}</p>
		<select bind:value={task.status} on:change={() => updateTask(task.id, { status: task.status })}>
			<option value="todo">To Do</option>
			<option value="inprogress">In Progress</option>
			<option value="done">Done</option>
			<option value="backlog">Backlog</option>
		</select>
		<!-- <p>Created: {task.createdAt ? task.createdAt.toLocaleDateString() : 'None'}</p> -->

		<!-- <p>Updated: {task.updatedAt ? task.updatedAt.toLocaleDateString() : 'None'}</p> -->
		<label for="progress">Progress: {task.progress}</label>
		<input
			type="range"
			bind:value={task.progress}
			min="0"
			max="100"
			step="10"
			on:change={() => updateTask(task.id, { progress: task.progress })}
		/>
		<label for="priority">Priority: {task.priority}</label>
		<input type="range" bind:value={task.priority} min="1" max="5" step="1" />
		<p>Parent: {task.parent ? task.parent : 'None'}</p>
		<button on:click={() => deleteTask(task.id)} class="delete">Delete</button>
	</div>
{/each}

<!-- {:else} -->
<!-- <p>No tasks</p> -->
<!-- {/if} -->
<style>
	.task-card {
		border: 1px solid black;
		padding: 1rem;
		margin: 1rem;
		width: max-content;
		height: max-content;
		border-radius: var(--pico-border-radius);
		font-size: large;
		h2 {
			font-size: larger;
			margin: unset;
			padding: unset;
			padding-bottom: 5px;
		}
	}
	.todo {
		background-color: red;
		color: white;
	}
	.inprogress {
		background-color: yellow;
		color: black;

		h2,
		p {
			color: black;
		}
	}
	.done {
		background-color: green;
	}
	.backlog {
		background-color: blue;
		color: white;
	}
	.badge {
	}
	.progress:after {
		content: '%';
	}
</style>
