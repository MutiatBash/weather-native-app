import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useContext, useCallback, useEffect } from "react";
import WeatherContext from "./context";
import { FetchForecastData } from "./api";

export default function WeatherApp({ navigation }) {
  const { locations, setLocation, weather, setWeather, loading, setLoading } =
    useContext(WeatherContext);
  const { current, location } = weather;

  // FUNCTION TO SET INITIAL STATE OF THE APP

  const currentWeather = async () => {
    setLoading(true);
    FetchForecastData({
      city: "Lagos, Nigeria",
      days: "5",
    })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    currentWeather();
    console.log("mounting app");
  }, []);


  // currentDate
  let today = new Date().toLocaleDateString("en-us", {month:"long", day:"numeric", year:"numeric"});
  let currentDate = `Today, ${today}`


  return (
    <>
      {loading ? (
        <SafeAreaView style={{ backgroundColor: "#3E9DB9", flex: 1 }}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={[styles.bodyText, styles.whiteText]}>
              Loading data....please wait
            </Text>
          </View>
        </SafeAreaView>
      ) : (
        <>
          <SafeAreaView style={{ backgroundColor: "#3E9DB9", flex: 1 }}>
            <View style={styles.container}>
              <LinearGradient
                colors={["#3e9dbd", "#5696aa", "#30505b", "#0a2c37"]}
                style={styles.container}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Search")}
                  style={styles.search}
                >
                  <Image
                    source={require("./assets/search-icon.png")}
                    style={styles.search}
                  />
                </TouchableOpacity>

                {/* CURRENT WEATHER DISPLAY */}
                <View style={styles.currentcontainer}>
                  <Text style={[styles.bodyText, styles.whiteText]}>
                    {currentDate}
                  </Text>
                  <Text style={[styles.headerText, styles.whiteText]}>
                    {location?.name}
                  </Text>
                  <Text style={[styles.subHeadText, styles.whiteText]}>
                    {location?.country}
                  </Text>
                </View>
                <View style={[styles.cloudContainer, styles.shadowProp]}>
                  <Text style={styles.cloudHeaderText}>🌧</Text>
                  {/* <Image
                // source={("./assets/search-icon.png")}
                source={{ url: "https:" + current?.condition?.icon }}
                // style={styles.cloudIcon}
              /> */}
                  <Text style={styles.cloudHeaderText}>
                    {current?.temp_c}&#176;C
                  </Text>
                </View>

                <View>
                  <View style={styles.detailsContainer}>
                    <View>
                      <Text style={[styles.subHeadText, styles.whiteText]}>
                        Wind status
                      </Text>
                      <Text style={[styles.bodyText, styles.whiteText]}>
                        {current?.wind_mph} mph
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.subHeadText, styles.whiteText]}>
                        Visibility
                      </Text>
                      <Text style={[styles.bodyText, styles.whiteText]}>
                        {current?.vis_miles} miles
                      </Text>
                    </View>
                  </View>
                  <View style={styles.detailsContainer}>
                    <View>
                      <Text style={[styles.subHeadText, styles.whiteText]}>
                        Humidity
                      </Text>
                      <Text style={[styles.bodyText, styles.whiteText]}>
                        {current?.humidity}%
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.subHeadText, styles.whiteText]}>
                        Air pressure
                      </Text>
                      <Text style={[styles.bodyText, styles.whiteText]}>
                        {current?.pressure_mb} mb
                      </Text>
                    </View>
                  </View>
                </View>

                {/* FORECAST TOR DAYS */}
                <View style={styles.daysContainer}>
                  <Text style={styles.nextDaysText}> The Next 5 days</Text>
                  <View style={styles.daysFlexContainer}>
                    {weather?.forecast?.forecastday?.map((item, index) => {
                      let date = new Date(item.date);
                      let options = { weekday: "long" };
                      let dayName = date.toLocaleDateString("en-Us", options);
                      dayName = dayName.split(",")[0];
                      return (
                        <View style={styles.eachDayContainer} key={index}>
                          <Text style={styles.bodyText}>{dayName}</Text>
                          <View style={styles.weatherContainer}>
                            <Text style={styles.cloudText}>🌧</Text>
                            <Text style={styles.bodyText}>
                              {item?.day?.avgtemp_c}&#176;C
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
                <StatusBar style="auto" />
              </LinearGradient>
            </View>
          </SafeAreaView>
          <SafeAreaView
            style={{ backgroundColor: "#fff", flex: 0 }}
          ></SafeAreaView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  loader: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    // width:100,
    // height: "100%",
  },
  safeview: {
    // flex: 1,
    paddingTop: 10,
    backgroundColor: "#3E9DB9",
    alignItems: "center",
    height: "100%",
    // height: "100vh",
  },
  search: {
    alignSelf: "flex-end",
    width: 50,
    height: 50,
    paddingRight: 16,
  },
  cloudContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"center",
    gap:6,
    border: "none",
    borderRadius: 120,
    paddingRight: 10,
    paddingLeft: 10,
    // paddingTop: 14,
    paddingBottom: 3,
    marginBottom: 15,
    width: 220,
    height: 220,
  },
  currentcontainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 5,
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
    padding: 5,
    justifyContent: "center",
  },
  daysContainer: {
    // flexDirection: "row",
    backgroundColor: "#fff",
    border: "none",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 20,
    height: "50%",
    width: "100%",
  },
  weatherContainer: {
    alignItems: "center",
    borderWidth: 0.3,
    borderRadius: 17,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  daysFlexContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 10,
    width: "94%",
    gap: 30,
    paddingLeft: 25,
  },
  headerText: {
    fontSize: 40,
    paddingBottom: 8,
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
    fontSize: 55,
    color: "#1e2d2f",
  },
  // cloudIcon: {
  //   // fontSize: 65,
  //   // color: "#1e2d2f",
  //   width: "100%",
  // },
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
