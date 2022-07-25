import React, {FC} from "react";
import {StyleSheet, Image, Text, View, TouchableWithoutFeedback, Linking} from "react-native";


type RecommendationItemType = {
    img: string
    name: string
    price: string
}

export const RecommendationItem: FC<RecommendationItemType> = (
    {img,
    name,
    price}
) => {
    return (
        <View style={styles.item}>
            <View>
                <Image style={styles.recItemImg} source={{uri: img}}/>
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: "45%",
        padding: 10,
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        backgroundColor: 'white'

    },
    recItemImg: {
        width: "100%",
        height: 110,
    },
    name: {
        marginVertical: 5,
        fontWeight: "bold"
    },
    price: {
        fontWeight: "bold"
    }
});