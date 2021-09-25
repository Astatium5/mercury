import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from 'react-native';
import { StyleSheet } from "react-native";

const Landing = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Text</Text>
            <Button title={"Login"} onPress={null}></Button>
            <Button title={"Register"} onPress={null}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {

    },
});

export default Landing;