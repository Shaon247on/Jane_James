import { DocumentCard } from "@/app/components/ui/DocumentCard";
import { clientDocuments, witnessDocuments } from "@/app/data/dummy";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-gray-100"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View className="bg-white pt-14 px-5 pb-4">
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Status Banner */}
      <LinearGradient
        colors={["#000189", "#4F39F6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="mx-4 mt-4 rounded-2xl p-5"
      >
        <Text className="text-white text-lg font-bold mb-1.5">Status</Text>
        <Text className="text-white/80 text-sm leading-5 mb-3">
          You have{" "}
          <Text className="text-white font-bold">
            {witnessDocuments.length + clientDocuments.length} documents
          </Text>{" "}
          awaiting your signature for notary verification.
        </Text>
        <View className="flex-row items-center gap-2">
          <View className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
            <View className="h-full w-3/4 bg-green-500 rounded-full" />
          </View>
          <Text className="text-white text-xs font-semibold">75% Total</Text>
        </View>
      </LinearGradient>

      {/* Witness Documents */}
      <View className="px-4 mt-5">
        <Text className="text-gray-800 text-lg font-bold mb-3">
          Witness Documents
        </Text>
        {witnessDocuments.map((doc) => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </View>

      {/* Client Documents */}
      <View className="px-4 mt-2">
        <Text className="text-gray-800 text-lg font-bold mb-3">
          Client Documents
        </Text>
        {clientDocuments.map((doc) => (
          <DocumentCard key={doc.id} document={doc} isClientDoc />
        ))}
      </View>

      <View className="h-24" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: { height: 36, width: 120 },
});
