import { GradientButton } from "@/app/components/ui/GradientButton";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface UploadedFile {
  name: string;
  size: string;
}

export default function UploadScreen() {
  const [file, setFile] = useState<UploadedFile | null>({
    name: "9 Advance health.pdf",
    size: "38MB",
  });

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
        <Text className="text-lg font-bold text-gray-800">Upload Document</Text>
        <View className="w-10" />
      </View>

      <View className="flex-1 px-5 pt-5">
        {/* Drop Zone */}
        <TouchableOpacity
          className="border-2 border-dashed border-gray-300 rounded-2xl py-9 items-center bg-gray-50 mb-4"
          onPress={() =>
            setFile({ name: "9 Advance health.pdf", size: "38MB" })
          }
          activeOpacity={0.7}
        >
          <Image
            source={require("@/assets/images/cloud-upload.png")}
            className="w-12 h-12 mb-3"
            style={{ tintColor: "#4CAF50" }}
          />
          <Text className="text-gray-500 text-sm font-medium">
            Tap to upload file
          </Text>
        </TouchableOpacity>

        {/* Uploaded File */}
        {file && (
          <View className="bg-white rounded-xl p-4 flex-row items-center border-2 border-green-500 mb-4">
            <View className="w-10 h-10 bg-green-100 rounded-lg items-center justify-center mr-3">
              <Image
                source={require("@/assets/images/pdf-icon.png")}
                className="w-5 h-5"
                style={{ tintColor: "#4CAF50" }}
              />
            </View>
            <View className="flex-1">
              <Text
                className="text-sm font-semibold text-gray-800"
                numberOfLines={1}
              >
                {file.name}
              </Text>
              <Text className="text-xs text-gray-400 mt-0.5">{file.size}</Text>
            </View>
            <TouchableOpacity onPress={() => setFile(null)} className="p-1">
              <Image
                source={require("@/assets/images/close.png")}
                className="w-4 h-4"
                style={{ tintColor: "#EF4444" }}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Illustration */}
        <View className="flex-1 items-center justify-center">
          <Image
            source={require("@/assets/images/upload-illustration.png")}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="px-5 pb-10">
        <GradientButton
          title="Submit"
          onPress={() => router.push("/document/processing")}
          disabled={!file}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  illustration: { width: 280, height: 210 },
});
