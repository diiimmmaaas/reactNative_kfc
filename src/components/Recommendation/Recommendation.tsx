import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {RecommendationItem} from "./RecommendationItem/RecommendationItem";

import {recommendation} from "../../recommendation";


export const Recommendation = () => {
    return (
        <View style={styles.recommendation}>
            <Text style={styles.title}>
                Recommended for you
            </Text>
            <View style={styles.itemsBlock}>
                {recommendation.map( (item, index) => (<RecommendationItem key={index} img={item.img} name={item.name} price={item.price}/>) )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    recommendation: {
        marginTop: 10,
        marginBottom: 20
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20
    },
    itemsBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});