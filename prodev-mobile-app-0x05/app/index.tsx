import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>

          {/* Headings */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your favorite place here</Text>
            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>The best prices for over 2</Text>
              <Text style={styles.titleSubText}>million properties worldwide</Text>
            </View>
          </View>

          {/* Buttons + Navigation prompt */}
          <View style={{ position: "absolute", bottom: 60, width: "100%" }}>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => router.push("/join")}
              >
                <Text style={styles.buttonPrimaryText}>Join</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => router.push("/signin")}
              >
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => router.push("/(home)")}>
              <View style={styles.buttonGroupSubText}>
                <Text style={{ color: "white" }}>Continue to home</Text>
                <Text style={{ color: "white" }}> →</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

