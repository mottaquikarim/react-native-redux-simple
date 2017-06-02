import {
	appendTodo,
	completeTodo,
} from './reducers';

export const actions = {
	'ADD_TODO': (oldStore, props) => appendTodo(oldStore, props),
	'COMPLETE_TODO': (oldStore, props) => completeTodo(oldStore, props),
}