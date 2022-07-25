import React from "react";
import {StyleSheet, Image, Text, View, TouchableWithoutFeedback, Linking} from "react-native";

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.socialNetworks}>
                <View>
                    <Image style={styles.socialItem} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"}}/>
                </View>
                <View>
                    <Image style={styles.socialItem} source={{uri: "https://thumbs.dreamstime.com/b/web-189206689.jpg"}}/>
                </View>
                <View>
                    <Image style={styles.socialItem} source={{uri: "https://thumbs.dreamstime.com/b/facebook-logo-icon-voronezh-russia-november-square-blue-color-164585769.jpg"}}/>
                </View>
            </View>
            <Text style={styles.text}>
                © 2022 KFC International Holdings Inc.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        justifyContent: "space-between",
        borderTopWidth: 1,
        marginBottom: 30
    },
    socialNetworks: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20
    },
    socialItem: {
        width: 30,
        height: 30
    },
    text: {
        textAlign: "center",
    }
});