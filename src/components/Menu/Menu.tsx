import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {MenuItem} from "./MenuItem/MenuItem";

import {menu} from "../../menu";


export const Menu = () => {
    return (
        <View style={styles.menu}>
            <Text style={styles.title}>
                Menu
            </Text>
            <View style={styles.itemsBlock}>
                {menu.map( (item, index) => (<MenuItem key={index} img={item.img} name={item.name}/>) )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
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
        flexWrap: "wrap",
        justifyContent: "space-between",
    }
});