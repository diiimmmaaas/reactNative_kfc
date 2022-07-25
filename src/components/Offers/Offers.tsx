import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {offers} from "../../offers";
import {OffersItem} from "./OffersItem/OffersItem";


export const Offers = () => {
    return (
        <View style={styles.offers}>
            <Text style={styles.title}>
                Offers
            </Text>
            <View style={styles.itemsBlock}>
                {offers.map( (item, index) => (<OffersItem key={index}
                                                           title={item.title}
                                                           subtitle={item.subtitle}
                                                           coupon={item.coupon}/>) )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    offers: {
        marginBottom: 30
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