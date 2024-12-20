import Dexie from 'dexie';

export const db = new Dexie('kanbanDb');
db.version(1).stores({
	tasks: '++id, title, description, status, createdAt, updatedAt, progress, priority, parentId'
});
