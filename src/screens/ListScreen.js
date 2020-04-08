import React from "react";
import { View, Text, StyleSheet, FlatList, InteractionManager} from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "Broons" },
        { name: "Caniel" },
        { name: "Stinky" },
        { name: "Kitas" },
        { name: "Benny" },
        { name: "Beef" },
        { name: "Jackie" },
        { name: "Paltrow" },
        { name: "Beatrice" },
    ];

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name}</Text>
            }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        margin: 50
    }
});

export default ListScreen;