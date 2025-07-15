import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Signin() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
      {/* Top navigation */}
      <View style={styles.navGroup}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
        <Image source={require("@/assets/images/logo.png")} />
      </View>

      {/* Main content area */}
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {/* Title section */}
        <View>
          <Text style={styles.largeText}>Sign in to your</Text>
          <Text style={styles.largeText}>Account</Text>
          <Text style={styles.smallText}>
            Enter your email and password to sign in.
          </Text>

          {/* Form */}
          <View style={styles.formGroup}>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />

            <View style={{ marginTop: 20 }}>
              <Text style={styles.placeholderText}>Password</Text>
              <View style={styles.passwordGroup}>
                <TextInput style={{ flex: 1 }} secureTextEntry />
                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
              </View>
            </View>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </View>

          {/* Sign in button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>
        </View>

        {/* Social media + Join section */}
        <View>
          <View style={styles.socialMediaButtonGroup}>
            <TouchableOpacity style={styles.socialMediaButton}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Image source={require("@/assets/images/google.png")} />
                <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialMediaButton}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Image source={require("@/assets/images/facebook.png")} />
                <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Join now section */}
          <View style={{ alignItems: "center", marginTop: 12 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.subText}>Do not have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/join")}>
                <Text style={styles.subTextJoin}>Join now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  </SafeAreaView>
</SafeAreaProvider>

  );
}