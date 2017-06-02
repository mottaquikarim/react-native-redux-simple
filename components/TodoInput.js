import Expo from 'expo';
import React from 'react';
import {
	Container, 
	Content, 
	InputGroup, 
	Input, 
	Item,
	Button,
	Text,
	Form,
} from 'native-base';

export default class TodoInput extends React.Component {
	state = {
		currentVal: ''
	}
	handleChange(text) {
		this.setState({
			currentVal: text,
		})
	}
	handlePress(e) {
		this.props.dispatch('ADD_TODO', {
			text: this.state.currentVal,
		});
		this.handleChange('');
	}
	render() {
		const {currentVal} = this.state;
		const InputProps = {
			onChangeText: (text) => this.handleChange(text),
			placeholder: 'Add todo...',
			value: currentVal,
		}
		const ButtonProps = {
			onPress: (e) => this.handlePress(e),
		}
		return (<Form>
			<Item regular>
	        	<Input {...InputProps} />
	    	</Item>
			<Button block full {...ButtonProps}>
            	<Text>Add</Text>
            </Button>
	    </Form>)
	}
}