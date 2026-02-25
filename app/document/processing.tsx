import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function ProcessingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const success = Math.random() > 0.4;
      router.replace(success ? "/document/result" : "/document/result-fail");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-gray-500 items-center justify-center">
      <View className="bg-gray-600/80 rounded-3xl mx-6 w-full items-center justify-center py-10">
        <View className="bg-white/10 rounded-2xl p-8 items-center w-64">
          <ActivityIndicator
            size="large"
            color="#4F39F6"
            style={styles.spinner}
          />
          <Text className="text-white text-lg font-bold mb-2">
            Processing...
          </Text>
          <Text className="text-gray-300 text-xs text-center leading-5 mb-5">
            Please wait while we verify and extract text from the document.
          </Text>
          <View className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <View className="h-full w-3/5 bg-indigo-500 rounded-full" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spinner: { marginBottom: 16 },
});
