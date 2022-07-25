import React, {FC} from "react";
import {StyleSheet, Image, Text, View, TouchableWithoutFeedback, Linking, ImageBackground} from "react-native";


type MenuItemType = {
    img: string
    name: string
}

export const MenuItem: FC<MenuItemType> = (
    {
        img,
        name,
    }
) => {
    return (
        <View style={styles.menu}>
            <ImageBackground source={{uri: img}} resizeMode="cover" style={styles.image}>
                <Text style={styles.name}>{name}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        width: "45%",
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        backgroundColor: 'white',
        marginVertical: 10
    },
    image: {
        width: "100%",
        height: 110,
    },
    name: {
        padding: 10,
        color: "#fff",
        fontWeight: "bold"
    }
});