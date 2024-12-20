<script>
	import { liveQuery } from 'dexie';
	import { db } from '../database/db.js';

	let taskCount = liveQuery(() => db.tasks.count());
</script>

{$taskCount == null ? 'loading...' : $taskCount + ' tasks in total'}
