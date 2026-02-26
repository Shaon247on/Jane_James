import { CircularProgress } from "@/app/components/ui/CircularProgress";
import { historyDocuments } from "@/app/data/dummy";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white pt-14 px-5 pb-4">
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text className="text-2xl font-bold text-gray-600 text-center py-5">
        History
      </Text>

      <FlatList
        data={historyDocuments}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="bg-white rounded-2xl p-4 mb-3 flex-row items-center shadow-sm">
            <View className="w-11 h-11 bg-yellow-100 rounded-xl items-center justify-center mr-3">
              <Image
                source={require("@/assets/images/logo.png")}
                className="w-6 h-6"
                style={{ tintColor: "#F59E0B" }}
              />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-gray-800">
                {item.title}
              </Text>
              <Text className="text-xs text-gray-400 mt-0.5">{item.date}</Text>
            </View>
            <CircularProgress progress={item.progress} size={56} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { height: 36, width: 120 },
  list: { paddingHorizontal: 16, paddingBottom: 100 },
});
