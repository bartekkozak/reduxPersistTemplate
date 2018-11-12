import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button
} from "react-native";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import UsernameInput from "./src/UsernameInput";
import { store, persistor } from "./src/store/store";

export default class App extends React.Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );

  clearAsyncStorage = async () => {
    console.log("czysci");
    AsyncStorage.clear();
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <View style={styles.container}>
            <UsernameInput />
            <Button
              onPress={this.clearAsyncStorage}
              title="wyczysc asyncStorage"
            >
              <Text>Clear Async Storage</Text>
            </Button>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
