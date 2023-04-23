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
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {!currentApp ? (
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
        ) : (
          <Button title="Close App" onPress={closeApp} />
        )}
        {currentApp && <>{currentApp.render}</>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: "#9c74cc",
  },
  btnContainer: {
    paddingVertical: 5,
  },
});
