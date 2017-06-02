import Expo from 'expo';
import React from 'react';
import {
	List,
	ListItem,
	Text,
	Body,
	Left,
	Right,
	Icon,
	Button,
} from 'native-base';

export default class TodoList extends React.Component {
	complete(index) {
		this.props.dispatch('COMPLETE_TODO', {
			index,
		});
	}
	render() {
		return <List>
			{this.props.todos.map((todo, i) => {
				const buttonProps = {};
				if (todo.completed) {
					buttonProps.success = true;
				}
				else {
					buttonProps.primary = true;
				}
				return <ListItem key={i}>
					<Left>
						<Text>{i+1}</Text>
						<Text>{todo.value}</Text>
						<Text note>{new Date(todo.when).toString().split(' ').slice(0, -2).join(' ')}</Text>
					</Left>
					<Right>
						<Button iconLeft transparent {...buttonProps} onPress={()=>this.complete(i)}>
	                		<Icon name="checkbox" size={30} color="#900" />
	                	</Button>
					</Right>
				</ListItem>
			})}
		</List>
	}
}