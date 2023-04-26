import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { APPS } from "./constants/CONST";

export default function App() {
  const [currentApp, setCurrentApp] = useState(null);
  function selectApp(app) {
    setCurrentApp(app);
  }
  function closeApp() {
    setCurrentApp(null);
  }
  console.log(StatusBar);
  return (
    <>
      <StatusBar style="auto" />

      {!currentApp && (
        <View style={styles.container}>
          <FlatList
            data={APPS}
            renderItem={(itemData) => {
              return (
                <View style={styles.btnContainer}>
                  <Button
                    title={itemData.item.name}
                    onPress={() => selectApp(itemData?.item)}
                  />
                </View>
              );
            }}
          />
        </View>
      )}
      {currentApp && (
        <View style={styles.appContainer}>{currentApp.render}</View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#9c74cc",
  },
  btnContainer: {
    paddingVertical: 5,
  },
  appContainer: {
    flex: 1,
  },
});
