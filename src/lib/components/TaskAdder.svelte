<script>
	import { db } from '../database/db.js';

	export let defaultCreatedAt = new Date();
	export let defaultProgress = 0;
	export let defaultPriority = 1;
	export let defaultStatus = 'todo';
	let title = '';
	let description = '';
	let status = defaultStatus;
	let createdAt = defaultCreatedAt;
	let updatedAt = '';
	let progress = defaultProgress;
	let priority = defaultPriority;
	let parent = '';

	let addStatus = '';

	async function addTask() {
		try {
			const id = await db.tasks.add({
				title,
				description,
				status,
				createdAt,
				updatedAt,
				progress,
				priority,
				parent
			});

			addStatus = `Task added successfully. Got id ${id}`;

			//reset form
			title = '';
			description = '';
			status = defaultStatus;
			createdAt = defaultCreatedAt;
			updatedAt = '';
			progress = defaultProgress;
			priority = defaultPriority;
			parent = '';
		} catch (e) {
			addStatus = `Error adding task: ${e}`;
		}
	}
</script>

<div>
	<p>{addStatus}</p>
	<legend>Add Task</legend>
	<label for="title">Title</label>
	<input type="text" bind:value={title} id="title" name="title" required />
	<br />
	<label for="description">Description</label>
	<textarea bind:value={description} id="description" name="description" required></textarea>
	<br />
	<!-- <label for="status">Status</label> -->
	<input type="hidden" bind:value={status} id="status" name="status" required />

	<br />
	<label for="createdAt">Created At</label>
	<input type="datetime-local" bind:value={createdAt} id="createdAt" name="createdAt" required />
	<br />
	<label for="updatedAt">Updated At</label>
	<input type="datetime-local" bind:value={updatedAt} id="updatedAt" name="updatedAt" required />
	<br />
	<label for="progress">Progress</label>
	<input type="range" bind:value={progress} min="0" max="100" step="10" />
	<br />
	<label for="prioroty">Priority</label>
	<input type="number" bind:value={priority} id="prioroty" name="prioroty" required />
	<br />
	<label for="parent">Parent</label>
	<input type="text" bind:value={parent} id="parent" name="parent" required />
	<br />
	<button on:click={addTask}>Add Task</button>
</div>
