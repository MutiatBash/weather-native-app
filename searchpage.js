import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Search({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#3E9DB9", flex: 1 }}>
        <View style={styles.container}>
          <LinearGradient
            colors={["#3e9dbd", "#5696aa", "#30505b", "#0a2c37"]}
            style={styles.container}
          >
            <View style={styles.daysContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("WeatherApp")}
                style={styles.nextDaysText}
              >
                <Text style={styles.nextDaysText}>x</Text>
              </TouchableOpacity>

              <TextInput
                style={styles.input}
                placeholder="SEARCH LOCATION"
                placeholderTextColor="#30505b"
              />
            </View>
            <StatusBar style="auto" />
          </LinearGradient>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{ backgroundColor: "#0a2c37", flex: 0 }}
      ></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 10,
    backgroundColor: "#3E9DB9",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  safeview: {
    // flex: 1,
    paddingTop: 10,
    backgroundColor: "#3E9DB9",
    alignItems: "center",
    height: "100%",
  },
  daysContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    border: "none",
    borderRadius: 40,
    padding: 20,
    marginTop: 30,
    width: "100%",
    height: "42%",
  },
  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    padding: 17,
    width: "90%",
  },
  headerText: {
    fontSize: 40,
  },
  shadowProp: {
    shadowColor: "#fefefe",
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  nextDaysText: {
    fontSize: 28,
    alignSelf: "flex-end",
    fontWeight: 500,
    paddingRight: 10,
    paddingBottom: 18,
  },
});
