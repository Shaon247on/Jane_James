import { currentUser } from "@/app/data/dummy";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View className="bg-white pt-14 px-5 pb-4 flex-row justify-between items-center">
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => router.push("/settings")}>
          <Image
            source={require("@/assets/images/settings.png")}
            className="w-6 h-6"
            style={{ tintColor: "#374151" }}
          />
        </TouchableOpacity>
      </View>

      <Text className="text-2xl font-bold text-gray-600 text-center pt-5 pb-2">
        Profile
      </Text>

      {/* profile */}
      <View className="items-center py-2">
        <View className="w-20 h-20 rounded-full bg-gray-300 items-center justify-center mb-3">
          <Text className="text-3xl font-bold text-gray-500">
            {currentUser.name.charAt(0)}
          </Text>
        </View>
        <Text className="text-xl font-bold text-gray-800">
          {currentUser.name}
        </Text>
      </View>

      {/* Stats */}
      <View className="flex-row px-4 gap-3 mt-5 mb-5">
        <View className="flex-1 bg-white rounded-2xl py-4 items-center shadow-sm">
          <Text className="text-xs font-semibold text-gray-400 tracking-wide mb-1">
            PENDING
          </Text>
          <Text className="text-2xl font-bold text-gray-800">
            {currentUser.stats.pending}
          </Text>
        </View>
        <View className="flex-1 bg-white rounded-2xl py-4 items-center border-2 border-yellow-400 shadow-sm">
          <Text className="text-xs font-semibold text-yellow-500 tracking-wide mb-1">
            ISSUE
          </Text>
          <Text className="text-2xl font-bold text-yellow-500">
            {currentUser.stats.issue}
          </Text>
        </View>
        <View className="flex-1 bg-white rounded-2xl py-4 items-center shadow-sm">
          <Text className="text-xs font-semibold text-green-600 tracking-wide mb-1">
            DONE
          </Text>
          <Text className="text-2xl font-bold text-green-600">
            {currentUser.stats.done}
          </Text>
        </View>
      </View>

      {/* Status Banner */}
      <LinearGradient
        colors={["#000189", "#4F39F6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="mx-4 rounded-[12] p-5"
      >
        <Text className="text-white text-lg font-bold mb-1.5">Status</Text>
        <Text className="text-white/80 text-sm leading-5 mb-3">
          You have <Text className="text-white font-bold">3 documents</Text>{" "}
          awaiting your signature for notary verification.
        </Text>
        <View className="flex-row items-center gap-2">
          <View className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
            <View className="h-full w-3/4 bg-green-500 rounded-full" />
          </View>
          <Text className="text-white text-xs font-semibold">75% Total</Text>
        </View>
      </LinearGradient>

      <View className="h-32" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: { height: 36, width: 120 },
});
