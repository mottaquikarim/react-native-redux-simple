import Expo from 'expo';
import React from 'react';

import {
  Container,
  Content,
  InputGroup,
  Input,
  Header,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
// import { StyleSheet, Text, View } from 'react-native';

import { Store } from './flux/store';
import { actions } from './flux/actions';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

class App extends React.Component {
  state = Store
  dispatch(actionName, options) {
    const actionToDo = actions[actionName];
    if (!actionToDo) return;

    actionToDo(this.state, options)
      .then(newStore => this.setState(newStore));
  }
  render() {
    const sharedProps = {
      dispatch: (...args) => this.dispatch(...args)
    };

    return (<Container>
      <Header>
        <Left />
        <Body>
            <Title>Todo List Flux</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <TodoInput {...this.state} {...sharedProps} />
        <TodoList {...this.state} {...sharedProps} />
      </Content>
    </Container>);
  }
}

Expo.registerRootComponent(App);
