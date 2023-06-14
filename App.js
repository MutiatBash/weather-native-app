import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
// import { LinearGradient } from "expo";
import WeatherApp from "./weatherapp";

export default function App() {
  return (
    <WeatherApp />
    // <SafeAreaView>
    //   <View style={styles.container}>
    //     {/* <LinearGradient> */}
    //     {/* <Text style={{ textAlign: "right" }}>🔍</Text> */}
    //     {/* CURRENT WEATHER DISPLAY */}
    //     <View style={styles.currentcontainer}>
    //       <Text style={[styles.bodyText, styles.whiteText]}>
    //         Today, May 7th 2021
    //       </Text>
    //       <Text style={[styles.headerText, styles.whiteText]}>Barcelona</Text>
    //       <Text style={[styles.subHeadText, styles.whiteText]}>Spain</Text>
    //     </View>
    //     <View style={[styles.cloudContainer, styles.shadowProp]}>
    //       <Text style={styles.cloudHeaderText}>🌧</Text>
    //       <Text style={styles.cloudHeaderText}>10∘C</Text>
    //     </View>
    //     <View>
    //       <View style={styles.detailsContainer}>
    //         <View>
    //           <Text style={[styles.subHeadText, styles.whiteText]}>
    //             Wind status
    //           </Text>
    //           <Text style={[styles.bodyText, styles.whiteText]}>7 mph</Text>
    //         </View>
    //         <View>
    //           <Text style={[styles.subHeadText, styles.whiteText]}>
    //             Wind status
    //           </Text>
    //           <Text style={[styles.bodyText, styles.whiteText]}>7 mph</Text>
    //         </View>
    //       </View>
    //       <View style={styles.detailsContainer}>
    //         <View>
    //           <Text style={[styles.subHeadText, styles.whiteText]}>
    //             Wind status
    //           </Text>
    //           <Text style={[styles.bodyText, styles.whiteText]}>7 mph</Text>
    //         </View>
    //         <View>
    //           <Text style={[styles.subHeadText, styles.whiteText]}>
    //             Wind status
    //           </Text>
    //           <Text style={[styles.bodyText, styles.whiteText]}>7 mph</Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.daysContainer}>
    //       <Text style={styles.nextDaysText}> The Next 5 days</Text>
    //       <View style={styles.daysFlexContainer}>
    //         <View style={styles.eachDayContainer}>
    //           <Text style={styles.bodyText}>Sunday</Text>
    //           <View style={styles.weatherContainer}>
    //             <Text style={styles.cloudText}>🌧</Text>
    //             <Text style={styles.bodyText}>10∘C</Text>
    //           </View>
    //         </View>
    //         <View style={styles.eachDayContainer}>
    //           <Text style={styles.bodyText}>Monday</Text>
    //           <View style={styles.weatherContainer}>
    //             <Text style={styles.cloudText}>🌦</Text>
    //             <Text style={styles.bodyText}>8∘C</Text>
    //           </View>
    //         </View>
    //         <View style={styles.eachDayContainer}>
    //           <Text style={styles.bodyText}>Tuesday</Text>
    //           <View style={styles.weatherContainer}>
    //             <Text style={styles.cloudText}>🌨</Text>
    //             <Text style={styles.bodyText}>3∘C</Text>
    //           </View>
    //         </View>
    //         <View style={styles.eachDayContainer}>
    //           <Text style={styles.bodyText}>Thursday</Text>
    //           <View style={styles.weatherContainer}>
    //             <Text style={styles.cloudText}>🌩</Text>
    //             <Text style={styles.bodyText}>5∘C</Text>
    //           </View>
    //         </View>
    //         <View style={styles.eachDayContainer}>
    //           <Text style={styles.bodyText}>Friday</Text>
    //           <View style={styles.weatherContainer}>
    //             <Text style={styles.cloudText}>☁</Text>
    //             <Text style={styles.bodyText}>9∘C</Text>
    //           </View>
    //         </View>
    //       </View>
    //     </View>
    //     <StatusBar style="auto" />
    //     {/* </LinearGradient> */}
    //   </View>
    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     paddingTop: 10,
//     // paddingBottom: 20,
//     // textAlignVertical: "center",
//     backgroundColor: "#3E9DB9",
//     alignItems: "center",
//     // height: "100vh",
//     // justifyContent: "center",
//   },
//   cloudContainer: {
//     flexDirection: "column",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     border: "none",
//     borderRadius: 100,
//     paddingRight: 20,
//     paddingLeft: 20,
//     paddingTop: 10,
//     paddingBottom: 35,
//     marginBottom: 20,
//   },
//   currentcontainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-around",
//     paddingTop: 50,
//     paddingBottom: 20,
//   },
//   whiteText: {
//     // flexDirection: "column",
//     color: "#fff",
//   },
//   eachDayContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     border: "none",
//     padding: 8,
//     // justifyContent: "center",
//   },
//   daysContainer: {
//     // flexDirection: "row",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     border: "none",
//     borderTopRightRadius: 50,
//     borderTopLeftRadius: 50,
//     paddingTop: 60,
//     paddingBottom: 60,
//     marginTop: 25,
//   },
//   weatherContainer: {
//     // flexDirection: "row",
//     // backgroundColor: "#fff",
//     alignItems: "center",
//     borderWidth: 1,
//     borderRadius: "20",
//     padding: 10,
//     marginTop: 7,
//     // justifyContent: "center",
//   },
//   daysFlexContainer: {
//     flexDirection: "row",
//     // backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//   },
//   detailsContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   headerText: {
//     fontSize: 40,
//   },
//   shadowProp: {
//     shadowColor: "#fefefe",
//     shadowOffset: { width: 2, height: 8 },
//     shadowOpacity: 0.4,
//     shadowRadius: 10,
//   },
//   nextDaysText: {
//     fontSize: 14,
//     textVerticalAlign: "left",
//     fontWeight: "bold",
//   },
//   cloudHeaderText: {
//     fontSize: 65,
//   },
//   cloudText: {
//     fontSize: 30,
//   },
//   bodyText: {
//     fontSize: 12,
//   },
//   subHeadText: {
//     fontSize: 15,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
// });
