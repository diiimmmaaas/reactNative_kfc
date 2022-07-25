import React from "react";
import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet} from "react-native";
import {Header} from "./src/components/Header/Header";
import {Recommendation} from "./src/components/Recommendation/Recommendation";
import {Menu} from "./src/components/Menu/Menu";
import {Offers} from "./src/components/Offers/Offers";
import {Footer} from "./src/components/Footer/Footer";

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Header/>
            <Recommendation/>
            <Menu/>
            <Offers/>
            <Footer/>
            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
});
