import { GradientButton } from "@/app/components/ui/GradientButton";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InstructionsScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white pt-14 px-4 pb-4 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center"
        >
          <Image
            source={require("@/assets/images/arrow-left.png")}
            className="w-5 h-5"
            style={{ tintColor: "#374151" }}
          />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">
          Signing Instructions
        </Text>
        <View className="w-10" />
      </View>

      <View className="flex-1 px-6 pt-6">
        <Text className="text-2xl font-bold text-indigo-600 text-center leading-8 mb-7">
          How to sign your{"\n"}document
        </Text>

        {/* Step 1 */}
        <View className="bg-white rounded-2xl py-5 px-5 flex-row items-center gap-4 mb-3 shadow-sm border-2 border-indigo-200">
          <Image
            source={require("@/assets/images/pen.png")}
            className="w-5 h-5"
            style={{ tintColor: "#374151" }}
          />
          <Text className="text-base font-semibold text-gray-800">
            Sign all highlighted fields
          </Text>
        </View>

        {/* Step 2 */}
        <View className="bg-white rounded-2xl py-5 px-5 flex-row items-center gap-4 mb-8 shadow-sm border-2 border-indigo-200">
          <Image
            source={require("@/assets/images/scan.png")}
            className="w-5 h-5"
            style={{ tintColor: "#374151" }}
          />
          <Text className="text-base font-semibold text-gray-800">
            Scan & Upload
          </Text>
        </View>

        {/* Illustration */}
        <View className="flex-1 items-center justify-center">
          <Image
            source={require("@/assets/images/signing-illustration.png")}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="px-5 pb-10">
        <GradientButton
          title="Ready to Upload"
          onPress={() => router.push("/document/upload")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  illustration: { width: 280, height: 230 },
});
