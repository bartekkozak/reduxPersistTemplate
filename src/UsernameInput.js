import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { updateUsername } from "./store/actions/index";

class UsernameInput extends React.Component {
  state = {
    username: this.props.user.username || ""
  };

  handleChange = username => {
    this.setState({ username });
  };

  handleSubmit = () => {
    this.props.onUpdateUsername(this.state.username);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Choose a Username"
          onChangeText={this.handleChange}
          // value={this.state.username}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
        <Text>{this.props.user.username}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    onUpdateUsername: name => dispatch(updateUsername(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameInput);
