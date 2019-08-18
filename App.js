import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Ionicons } from "@expo/vector-icons";
import ContactList from "./screens/contactList";
import UserLogin from "./screens/userLogin";
import AddContact from "./screens/addContact";
class Home extends React.Component {
  state = {
    loggedIn: false,
    contacts: null,
    addContact: false
  };

  userloginHandler = () => {
    this.setState({ loggedIn: true });

    // fetch("https://reqres.in/api/login", {
    //   method: "post",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({
    //     email: "eve.holt@reqres.in",
    //     password: "cityslicka"
    //   })
    // }).then(response => {
    //   if (response.ok) {
    //     this.setState({ loggedIn: true });
    //     return;
    //   }
    // });
  };

  newContactHandler = () => {
    console.log("gotcha");
    this.setState({ addContact: false });
  };
  render() {
    return (
      <View style={{ paddingTop: 50, paddingLeft: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "red" }}>Contacts</Text>
          {this.state.loggedIn && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "45%"
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ addContact: true })}
              >
                <Ionicons name={"ios-add"} size={25} color="red" />
              </TouchableOpacity>
              <Button
                title="log out"
                onPress={() => this.setState({ loggedIn: false })}
              />
            </View>
          )}
        </View>
        {this.state.loggedIn ? (
          this.state.addContact ? (
            <AddContact newContactHandler={this.newContactHandler} />
          ) : (
            <ContactList />
          )
        ) : (
          <UserLogin
            username={this.state.username}
            password={this.state.password}
            usernameHandler={this.usernameHandler}
            passwordHandler={this.passwordHandler}
            userloginHandler={this.userloginHandler}
          />
        )}
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}
