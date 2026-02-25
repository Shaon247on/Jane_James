import { GradientButton } from "@/app/components/ui/GradientButton";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ResultFailScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Progress Bar */}
      <View className="px-5 pt-14 pb-4">
        <View className="flex-row justify-between mb-2">
          <Text className="text-sm font-semibold text-indigo-600">
            Signature Progress
          </Text>
          <Text className="text-sm font-bold text-gray-700">50%</Text>
        </View>
        <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <View className="h-full w-1/2 bg-indigo-600 rounded-full" />
        </View>
      </View>

      <View className="flex-1 items-center justify-center px-5">
        {/* Red X Icon */}
        <View className="w-16 h-16 bg-red-100 rounded-full items-center justify-center mb-4">
          <View className="w-12 h-12 bg-red-500 rounded-full items-center justify-center">
            <Text className="text-white text-2xl font-bold">✕</Text>
          </View>
        </View>

        <Text className="text-2xl font-bold text-gray-800 mb-6">
          Fix Issues
        </Text>

        {/* Status Card */}
        <View className="w-full bg-white border-2 border-red-200 rounded-2xl p-5">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-sm text-gray-600">Status</Text>
            <View className="bg-yellow-400 rounded-lg px-3 py-1">
              <Text className="text-white text-xs font-bold">Needs Fix</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-sm text-gray-600">Fields verified</Text>
            <Text className="text-sm font-bold text-gray-800">3/5</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-gray-600">Submitted</Text>
            <Text className="text-sm font-bold text-gray-800">
              4 Minutes ago
            </Text>
          </View>
        </View>
      </View>

      <View className="px-5 pb-10 gap-3">
        <GradientButton title="Back to File" onPress={() => router.back()} />
        <GradientButton
          outline
          title="Home"
          onPress={() => router.replace("/(tabs)")}
        />
      </View>
    </View>
  );
}
