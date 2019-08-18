import React from 'react'
import { TouchableOpacity, Text, ScrollView } from 'react-native'
import {connect} from 'react-redux'
class ContactList extends React.Component {
  render() {
    return (
      <ScrollView style={{ width: '100%' }}>
        {(this.props.contacts &&
          this.props.contacts.map(contact => {
            return (
              <TouchableOpacity
                key={contact.name}
                style={{ flex: 1, padding: 15 }}
                onPress={() => alert(contact.name)}>
                <Text>{contact.name}</Text>
                <Text>{contact.phone}</Text>
              </TouchableOpacity>
            );
          })) || <Text>'loading...'</Text>}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  contacts : state.contacts,
})

export default connect(mapStateToProps) (ContactList)