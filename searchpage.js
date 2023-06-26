import { StatusBar } from "expo-status-bar";
import { useState, useContext, useCallback, useEffect } from "react";
import WeatherContext from "./context";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { debounce } from "lodash";
import { FetchLocationData, FetchForecastData } from "./api";
import * as Progress from "react-native-progress";

export default function Search({ navigation }) {
  const { locations, setLocation, weather, setWeather, loading, setLoading } =
    useContext(WeatherContext);

  // FUNCTION TO HANDLE SEARCH FOR CITIES
  const handleSearch = (value) => {
    if (value.length > 2) {
      setLoading(true);
      FetchLocationData({ city: value })
        .then((data) => {
          console.log("location", data);
          setLocation(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else if (value === ""){
      return <Text>Please enter a valid city</Text>
    }
    console.log(value);
  };

  // FUNCTION TO PREVENT MULTIPLE RE-RENDERING
  const handleSearchValue = useCallback(debounce(handleSearch, 800), []);

  // FUNCTION TO HANDLE CITIES FORECAST FOR DAYS
  const handleForecast = (location) => {
    setLocation([]);
    setLoading(true);
    console.log("loading data...");
    FetchForecastData({
      city: location.name,
      days: "5",
    })
      .then((data) => {
        console.log("forecast data", data);
        setWeather(data);
        setLoading(false);
        console.log("data loaded");
      })
      .catch((error) => {
        console.log(error);
      });
  };


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
                onChangeText={handleSearchValue}
                style={styles.input}
                placeholder="SEARCH LOCATION"
                placeholderTextColor="#30505b"
              />
              <View>
                {locations.length > 0 ? (
                  <View style={styles.countries}>
                    {locations.map((location, index) => {
                      return (
                        <TouchableOpacity
                          style={styles.countriesText}
                          onPress={() => {
                            handleForecast(location);
                            navigation.navigate("WeatherApp");
                          }}
                          key={index}
                        >
                          <Text style={styles.countriesText}>
                            {location?.name}, {location?.country}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                ) : null}
              </View>
              {loading ? (
                <ActivityIndicator
                  color="#1b1b1c"
                  size="large"
                  style={{ paddingTop: 30 }}
                />
              ) : null}
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
    paddingTop: 10,
    backgroundColor: "#3E9DB9",
    height: "100%",
    width: "100%",
  },
  safeview: {
    // flex: 1,
    paddingTop: 10,
    backgroundColor: "#3E9DB9",
    height: "100%",
  },
  daysContainer: {
    backgroundColor: "#fff",
    border: "none",
    borderRadius: 40,
    paddingTop: 20,
    marginTop: 30,
    width: "100%",
    height: "42%",
  },
  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    padding: 17,
    width: "80%",
    alignSelf: "center",
  },
  countries: {
    alignItems: "flex-end",
    // flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 40,
    width: "100%",
    paddingBottom: 28,
    paddingRight: 20,
    paddingLeft: 20,
  },
  countriesText: {
    fontSize: 15,
    alignSelf: "flex-start",
    textAlign: "left",
    fontWeight: 400,
    paddingTop: 12,
    paddingLeft: 12,
  },
  headerText: {
    fontSize: 40,
  },
  nextDaysText: {
    fontSize: 28,
    alignSelf: "flex-end",
    fontWeight: 500,
    paddingRight: 15,
    paddingBottom: 18,
  },
});
