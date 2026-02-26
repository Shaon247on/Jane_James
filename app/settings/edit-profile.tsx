import { GradientButton } from "@/app/components/ui/GradientButton";
import { currentUser } from "@/app/data/dummy";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditProfileScreen() {
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

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
        <Text className="text-lg font-bold text-gray-800">Edit Profile</Text>
        <View className="w-10" />
      </View>

      <View className="flex-1 px-5 pt-8">
        {/* profile */}
        <View className="self-center mb-8">
          <View className="w-24 h-24 rounded-full border-2 border-indigo-600 overflow-hidden">
            <Image
              source={require("@/assets/images/person.png")}
              className="w-full h-full"
            />
          </View>
          <TouchableOpacity className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-600 rounded-full items-center justify-center">
            <Image
              source={require("@/assets/images/camera.png")}
              className="w-4 h-4"
              style={{ tintColor: "#FFFFFF" }}
            />
          </TouchableOpacity>
        </View>

        {/* Full Name */}
        <Text className="text-sm font-semibold text-gray-700 mb-2">
          Full Name
        </Text>
        <View className="bg-white rounded-xl flex-row items-center px-4 mb-5 shadow-sm">
          <Image
            source={require("@/assets/images/person.png")}
            className="w-5 h-5 mr-3"
            style={{ tintColor: "#9CA3AF" }}
          />
          <TextInput
            className="flex-1 py-4 text-gray-800 text-base"
            value={name}
            onChangeText={setName}
            placeholder="Full Name"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Email */}
        <Text className="text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </Text>
        <View className="bg-white rounded-xl flex-row items-center px-4 mb-5 shadow-sm">
          <Image
            source={require("@/assets/images/mail.png")}
            className="w-5 h-5 mr-3"
            style={{ tintColor: "#9CA3AF" }}
          />
          <TextInput
            className="flex-1 py-4 text-gray-800 text-base"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
          />
        </View>
      </View>

      <View className="px-5 pb-10">
        <GradientButton title="Save" onPress={() => router.back()} />
      </View>
    </View>
  );
}
