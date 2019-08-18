import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux'
import { addContact } from '../redux/actions';
class AddContact extends React.Component {
  state = {
    name: '',
    phone: '',
  };
  nameHandler = event => {
    this.setState({ name: event });
  };
  phoneHandler = event => {
    this.setState({ phone: event });
  };
  newContactHandler = () => {
    if(this.state.name.trim() && this.state.phone.trim()) {
      this.props.addContact({ ...this.state });
    }
    this.props.newContactHandler();
  };
  render() {
    return (
      <View style={{ padding: 20, justifyContent: 'space-between'}}>
      <Text>Add Contact Here</Text>
        <TextInput
          style={{paddingTop:10}}
          placeholder="Contact Name here"
          value={this.state.name}
          onChangeText={this.nameHandler}
        />
        <TextInput
          style={{paddingTop:10}}
          placeholder="Phone number here"
          value={this.state.phone}
          onChangeText={this.phoneHandler}
          maxLength={10}
          keyboardType="numeric"
        />
        <Button title="press to add" onPress={() => {this.newContactHandler(); this.props.newContactHandler()}} />
      </View>
    );
  }
}

export default connect(null,{addContact:addContact})(AddContact)
