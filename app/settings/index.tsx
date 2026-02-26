import { currentUser } from "@/app/data/dummy";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SettingRow = ({
  icon,
  title,
  subtitle,
  onPress,
}: {
  icon: any;
  title: string;
  subtitle: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    className="flex-row items-center p-4 gap-3"
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View className="w-10 h-10 rounded-xl bg-gray-100 items-center justify-center">
      <Image
        source={icon}
        className="w-5 h-5"
        style={{ tintColor: "#374151" }}
      />
    </View>
    <View className="flex-1">
      <Text className="text-sm font-semibold text-gray-800">{title}</Text>
      <Text className="text-xs text-gray-400 mt-0.5">{subtitle}</Text>
    </View>
    <Image
      source={require("@/assets/images/arrow-left.png")}
      className="w-4 h-4"
      style={styles.chevron}
    />
  </TouchableOpacity>
);

export default function SettingsScreen() {
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
        <Text className="text-lg font-bold text-gray-800">Settings</Text>
        <View className="w-10" />
      </View>

      {/* Profile Card */}
      <View className="bg-white mx-4 mt-4 rounded-2xl p-4 flex-row items-center gap-3 shadow-sm">
        <View className="w-14 h-14 rounded-full border-2 border-indigo-600 overflow-hidden">
          <Image
            source={require("@/assets/images/person.png")}
            className="w-full h-full"
          />
        </View>
        <View>
          <Text className="text-base font-bold text-gray-800">
            {currentUser.name}
          </Text>
          <Text className="text-sm text-gray-500 mt-0.5">
            {currentUser.email}
          </Text>
        </View>
      </View>

      {/* Account */}
      <Text className="text-sm font-semibold text-gray-500 mx-4 mt-5 mb-2">
        Account
      </Text>
      <View className="bg-white mx-4 rounded-2xl overflow-hidden shadow-sm">
        <SettingRow
          icon={require("@/assets/images/person.png")}
          title="Edit Profile"
          subtitle={currentUser.name}
          onPress={() => router.push("/settings/edit-profile")}
        />
      </View>

      {/* Security */}
      <Text className="text-sm font-semibold text-gray-500 mx-4 mt-5 mb-2">
        Security
      </Text>
      <View className="bg-white mx-4 rounded-2xl overflow-hidden shadow-sm">
        <SettingRow
          icon={require("@/assets/images/lock.png")}
          title="Change Password"
          subtitle="Update your password for safety"
          onPress={() => router.push("/settings/change-password")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chevron: { tintColor: "#9CA3AF", transform: [{ scaleX: -1 }] },
});
