import React from "react";
import { Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../../data/meals/meals-data";
import CateoryItemTile from "../../components/MealsApp/CategoryItemTile";

function renderItem(itemData) {
  return (
    <CateoryItemTile title={itemData.item.title} color={itemData.item.color} />
  );
}

const MealsHome = ({}) => (
  <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    numColumns={2}
  />
);

export default MealsHome;
