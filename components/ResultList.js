import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";

export default function ResultList({ title, results }) {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
