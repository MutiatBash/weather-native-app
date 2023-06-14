import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function WeatherApp() {
  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#3e9dbd", "#5696aa", "#30505b", "#0a2c37"]}
          style={styles.container}
        >
          {/* <Text style={{ textAlign: "right" }}>🔍</Text> */}
          {/* CURRENT WEATHER DISPLAY */}
          <View style={styles.currentcontainer}>
            <Text style={[styles.bodyText, styles.whiteText]}>
              Today, May 7th 2021
            </Text>
            <Text style={[styles.headerText, styles.whiteText]}>Barcelona</Text>
            <Text style={[styles.subHeadText, styles.whiteText]}>Spain</Text>
          </View>
          <View style={[styles.cloudContainer, styles.shadowProp]}>
            <Text style={styles.cloudHeaderText}>🌧</Text>
            <Text style={styles.cloudHeaderText}>10∘C</Text>
          </View>
          <View>
            <View style={styles.detailsContainer}>
              <View>
                <Text style={[styles.subHeadText, styles.whiteText]}>
                  Wind status
                </Text>
                <Text style={[styles.bodyText, styles.whiteText]}>7 mph</Text>
              </View>
              <View>
                <Text style={[styles.subHeadText, styles.whiteText]}>
                  Visibility
                </Text>
                <Text style={[styles.bodyText, styles.whiteText]}>
                  6.4 miles
                </Text>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <View>
                <Text style={[styles.subHeadText, styles.whiteText]}>
                  Humidity
                </Text>
                <Text style={[styles.bodyText, styles.whiteText]}>85%</Text>
              </View>
              <View>
                <Text style={[styles.subHeadText, styles.whiteText]}>
                  Air pressure
                </Text>
                <Text style={[styles.bodyText, styles.whiteText]}>998 mb</Text>
              </View>
            </View>
          </View>
          <View style={styles.daysContainer}>
            <Text style={styles.nextDaysText}> The Next 5 days</Text>
            <View style={styles.daysFlexContainer}>
              <View style={styles.eachDayContainer}>
                <Text style={styles.bodyText}>Sunday</Text>
                <View style={styles.weatherContainer}>
                  <Text style={styles.cloudText}>🌧</Text>
                  <Text style={styles.bodyText}>10∘C</Text>
                </View>
              </View>
              <View style={styles.eachDayContainer}>
                <Text style={styles.bodyText}>Monday</Text>
                <View style={styles.weatherContainer}>
                  <Text style={styles.cloudText}>🌦</Text>
                  <Text style={styles.bodyText}>8∘C</Text>
                </View>
              </View>
              <View style={styles.eachDayContainer}>
                <Text style={styles.bodyText}>Tuesday</Text>
                <View style={styles.weatherContainer}>
                  <Text style={styles.cloudText}>🌨</Text>
                  <Text style={styles.bodyText}>3∘C</Text>
                </View>
              </View>
              <View style={styles.eachDayContainer}>
                <Text style={styles.bodyText}>Thursday</Text>
                <View style={styles.weatherContainer}>
                  <Text style={styles.cloudText}>🌩</Text>
                  <Text style={styles.bodyText}>5∘C</Text>
                </View>
              </View>
              <View style={styles.eachDayContainer}>
                <Text style={styles.bodyText}>Friday</Text>
                <View style={styles.weatherContainer}>
                  <Text style={styles.cloudText}>☁</Text>
                  <Text style={styles.bodyText}>9∘C</Text>
                </View>
              </View>
            </View>
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 10,
    // backgroundColor: "#3E9DB9",
    alignItems: "center",
    // height: "100vh",
  },
  safeview: {
    // flex: 1,
    paddingTop: 10,
    backgroundColor: "#3E9DB9",
    alignItems: "center",
    // height: "100vh",
  },
  cloudContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    border: "none",
    borderRadius: 100,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 35,
    marginBottom: 20,
    // width: 100,
  },
  currentcontainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 20,
  },
  whiteText: {
    // flexDirection: "column",
    alignSelf: "center",
    color: "#fff",
  },
  eachDayContainer: {
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    padding: 6.5,
    justifyContent: "center",
  },
  daysContainer: {
    // flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    border: "none",
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    paddingTop: 60,
    paddingBottom: 50,
    marginTop: 25,
  },
  weatherContainer: {
    alignItems: "center",
    borderWidth: 0.3,
    borderRadius: 17,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 12,
    paddingLeft: 12,
    marginTop: 7,
  },
  daysFlexContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingBottom: 10,
    width: 400,
    gap: 20,
    // flex: 1,
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
    fontSize: 14,
    alignSelf: "flex-start",
    fontWeight: "bold",
    paddingLeft: 12,
  },
  cloudHeaderText: {
    fontSize: 65,
    color: "#1e2d2f",
  },
  cloudText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 13,
    alignSelf: "center",
  },
  subHeadText: {
    fontSize: 15,
    // textAlign: "center",
    fontWeight: "bold",
  },
});
