export const appendTodo = (oldStore, options) => {
	return Promise.resolve().then(_ => {
		const {todos} = oldStore;
		todos.push({
			value: options.text,
			when: Date.now(),
		});
		return Object.assign({}, oldStore, {
			todos,
			count: todos.length,
		});
	});
}

export const completeTodo = (oldStore, options) => {
	return Promise.resolve().then(_ => {
		const {todos} = oldStore;
		const [completed, remaining] = todos.reduce((_arr, curr, index) => {
			if (index === options.index) {
				curr.completed = !curr.completed;
			}

			if (curr.completed) {
				curr.completed = true;
				_arr[0].push(curr);
			}
			else {
				_arr[1].push(curr);
			}

			return _arr;
		}, [[], []]);

		completed.sort((a,b) => a.when <= b.when ? -1 : 1);
		remaining.sort((a,b) => a.when <= b.when ? -1 : 1);
		
		return Object.assign({}, oldStore, {
			todos: remaining.concat(completed),
			count: todos.length,
			completed: completed.length,
		});
	});	
}