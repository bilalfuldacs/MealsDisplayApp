import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/Dummy_data';
import MealItem from '../components/MealItem';

function MealsOverView({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((item) => {
    return item.categoryIds.includes(catId);
  });
  useEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const navigateToScreen = (categoryId) => {
    navigation.navigate('MealsDetailScreen', { categoryId });
  };

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItems = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      navigation: navigation, // Pass the navigation object
      navigationToScreen: () => navigateToScreen(item.id), // Navigate to the detail screen
    };
    return <MealItem {...mealItems} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
