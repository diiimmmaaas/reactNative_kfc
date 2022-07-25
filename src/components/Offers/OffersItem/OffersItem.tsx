import React, {FC} from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";


type OffersItemType = {
    title: string
    subtitle: string
    coupon: string

}

export const OffersItem: FC<OffersItemType> = (
    {
        title,
        subtitle,
        coupon,

    }
) => {
    return (
        <View style={styles.offerItem}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.coupon}>{coupon}</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add coupon</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    offerItem: {
        width: "45%",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        backgroundColor: "#e4002b",
    },
    title: {
        color: "#fff",
        textTransform: "uppercase",
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        textAlign: "center"
    },
    subtitle: {
        color: "#fff",
        marginBottom: 10,
        textAlign: "center"
    },
    coupon: {
        color: "#FFD700",
        marginBottom: 10,
        textAlign: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#fff"
    },
    buttonText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000',
        textTransform: "uppercase"
    }
});