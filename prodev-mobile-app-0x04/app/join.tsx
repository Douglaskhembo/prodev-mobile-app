// app/join.tsx

import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { useRouter } from "expo-router"; 

export default function Join() {
    const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
            <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="arrow-back" size={25} />
          </TouchableOpacity>
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Create your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Enter your email and password to sign up.
          </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.formControl} />
          </View>
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput secureTextEntry style={styles.passwordControl} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
