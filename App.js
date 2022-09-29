// import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";

export default function App() {
    useEffect(() => {
        StatusBar.setHidden(true);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Home />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
