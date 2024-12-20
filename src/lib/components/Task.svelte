<script>
	import { db } from '../database/db.js';
	export let task;
	console.log(task.id);

	export async function deleteTask(id) {
		await db.tasks.delete(id);
	}
	export async function updateStatus(id, val) {
		await db.tasks.where('id').equals(id).modify({ status: val, updatedAt: new Date() });
	}
	export async function updateProgress(id, val) {
		await db.tasks.where('id').equals(id).modify({ progress: val, updatedAt: new Date() });
	}
	export async function updatePriority(id, val) {
		await db.tasks.where('id').equals(id).modify({ prioroty: val, updatedAt: new Date() });
	}
</script>

<div class="task-card {task.status}">
	<p class="progress badge">{task.progress}</p>
	<h2>{task.title}</h2>
	<p>{task.description}</p>
	<select bind:value={task.status} on:change={() => updateStatus(task.id, task.status)}>
		<option value="todo">To Do</option>
		<option value="inprogress">In Progress</option>
		<option value="done">Done</option>
		<option value="backlog">Backlog</option>
	</select>
	<p>Created: {task.createdAt ? task.createdAt.toLocaleDateString() : 'None'}</p>

	<p>Updated: {task.updatedAt ? task.updatedAt.toLocaleDateString() : 'None'}</p>
	<label for="progress">Progress: {task.progress}</label>
	<input
		type="range"
		bind:value={task.progress}
		min="0"
		max="100"
		step="10"
		on:change={() => updateProgress(task.id, task.progress)}
	/>
	<label for="priority">Priority: {task.priority}</label>
	<input
		type="range"
		bind:value={task.priority}
		min="1"
		max="5"
		step="1"
		on:change={() => updatePriority(task.id, task.priority)}
	/>
	<p>Parent: {task.parent ? task.parent : 'None'}</p>
	<button on:click={() => deleteTask(task.id)} class="delete">Delete</button>
</div>

<style>
	.task-card {
		border: 1px solid black;
		padding: 1rem;
		margin: 1rem;
		width: max-content;
		min-width: 400px;
		height: max-content;
		border-radius: var(--pico-border-radius);
		font-size: large;
		position: relative;
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
		p,
		label {
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
		position: absolute;
		margin-left: -50px;
		margin-top: -45px;
		border: 1px solid black;
		border-radius: 100%;
		background-color: inherit;
		padding: 10px;
	}
	.progress:after {
		content: '%';
	}
</style>
