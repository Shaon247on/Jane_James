import { Document } from "@/app/data/dummy";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CircularProgress } from "./CircularProgress";

interface Props {
  document: Document;
  isClientDoc?: boolean;
}

const DocumentCard: React.FC<Props> = ({ document, isClientDoc = false }) => {
  return (
    <View className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
      <View className="flex-row justify-between items-start mb-1">
        <Text className="text-base font-bold text-gray-800 flex-1 mr-3">
          {document.title}
        </Text>
        <CircularProgress progress={document.progress} />
      </View>

      <Text className="text-xs text-gray-400 mb-1">{document.updatedAt}</Text>
      <Text className="text-sm text-gray-600 mb-3">
        {document.signaturesCompleted} of {document.signaturesTotal} signatures
        completed
      </Text>

      {isClientDoc ? (
        <View className="bg-indigo-100 rounded-xl py-3 items-center">
          <Text className="text-gray-400 font-semibold text-sm">
            Continue Signing
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => router.push(`/document/${document.id}`)}
          activeOpacity={0.85}
          className="rounded-xl overflow-hidden"
        >
          <LinearGradient
            colors={["#4F39F6", "#000189"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          >
            <Text className="text-white font-semibold text-sm">
              Continue Signing
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

DocumentCard.displayName = "DocumentCard";

export { DocumentCard };

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 13,
    alignItems: "center",
  },
});
