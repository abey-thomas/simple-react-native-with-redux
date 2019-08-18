import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { logInUser } from "../redux/actions";
class UserLogin extends React.Component {

  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.object,
    logInUser: PropTypes.func,
  }

  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    if (this.props.token) {
    this.props.userloginHandler();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
    this.props.userloginHandler();
    }
  }
  onSubmit = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.logInUser("eve.holt@reqres.in", "cityslicka");
    } else {
      this.props.logInUser({ ...this.state });
    }
  };
  usernameHandler = event => {
    this.setState({ username: event });
  };
  passwordHandler = event => {
    this.setState({ password: event });
  };
  render() {
    return (
      <View style={{ padding: 20, justifyContent: "space-between" }}>
        <Text style={{color:'red',alignSelf:'center'}}>{this.props.err}</Text>
        <TextInput
          style={{ paddingTop: 10 }}
          autoCapitalize="none"
          placeholder="username here"
          value={this.state.username}
          onChangeText={this.usernameHandler}
        />
        <TextInput
          style={{ paddingTop: 10 }}
          autoCapitalize="none"
          placeholder="password here"
          secureTextEntry
          value={this.state.password}
          onChangeText={this.passwordHandler}
        />
        <Button title="press to login" onPress={this.onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token : state.user.token,
})

export default connect(
  mapStateToProps,
  { logInUser }
)(UserLogin);
