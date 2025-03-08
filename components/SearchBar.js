import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.searchIcon}
        name="search1"
        size={24}
        color="black"
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        autoCorrect={false}
        keyboardType="visible-password"
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    height: 50,
    margin: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  searchIcon: {
    marginHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    borderColor: "gray",
    fontSize: 18,
  },
});
