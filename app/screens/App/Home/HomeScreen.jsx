import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, fonts, fontSizes } from "../../../utils/theme";
import * as Location from "expo-location";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    const getCurrentLocation = async () => {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };

    getCurrentLocation();
  }, []);

  console.log(location);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CrimeAlert</Text>
      </View>

      {/* Map Section */}
      <View style={styles.mapSection}>
        <MapView
          style={styles.map}
          provider={"google"}
          initialRegion={{
            latitude: 6.5197,
            longitude: 3.33887,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 6.5197, longitude: 3.33887 }}
            title="Crime Alert"
            description="Suspicious Activity"
          />
        </MapView>
      </View>

      {/* Recent Crimes Section */}
      <View style={styles.recentCrimesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
        </View>

        <ScrollView style={styles.crimesList}>
          {/* Crime Cards */}
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.crimeCard}>
              <View style={styles.crimeInfo}>
                <View style={styles.crimeTypeContainer}>
                  <View
                    style={[
                      styles.severityIndicator,
                      { backgroundColor: colors.status.alert },
                    ]}
                  />
                  <Text style={styles.crimeType}>Suspicious Activity</Text>
                </View>
                <Text style={styles.crimeLocation}>123 Main St, Downtown</Text>
                <Text style={styles.crimeTime}>2 hours ago</Text>
              </View>
              <TouchableOpacity style={styles.detailsButton}>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={colors.background[600]}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.base,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.background[300],
  },
  headerTitle: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.semiBold,
    color: colors.background[900],
  },
  mapSection: {
    height: "45%",
    backgroundColor: colors.white,
  },
  map: {
    flex: 1,
  },
  recentCrimesSection: {
    flex: 1,
    backgroundColor: colors.background[100],
  },
  sectionHeader: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.base,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.background[300],
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.semiBold,
    color: colors.background[900],
  },
  crimesList: {
    flex: 1,
    padding: spacing.base,
  },
  crimeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.base,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  crimeInfo: {
    flex: 1,
  },
  crimeTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  severityIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  crimeType: {
    fontSize: fontSizes.base,
    fontFamily: fonts.semiBold,
    color: colors.background[900],
  },
  crimeLocation: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.regular,
    color: colors.background[600],
    marginBottom: spacing.xs,
  },
  crimeTime: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.regular,
    color: colors.background[500],
  },
  detailsButton: {
    padding: spacing.xs,
  },
});
