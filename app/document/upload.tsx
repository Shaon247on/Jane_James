import { GradientButton } from "@/app/components/ui/GradientButton";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SelectedFile {
  name: string;
  size: string;
  uri: string;
  mimeType?: string;
}

const formatFileSize = (bytes?: number): string => {
  if (!bytes) return "Unknown size";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default function UploadScreen() {
  const [file, setFile] = useState<SelectedFile | null>(null);

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*"],
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        setFile({
          name: asset.name,
          size: formatFileSize(asset.size),
          uri: asset.uri,
          mimeType: asset.mimeType,
        });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick document. Please try again.");
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = () => {
    if (!file) return;
    router.push("/document/processing");
  };

  const getFileIcon = (mimeType?: string) => {
    if (mimeType?.includes("pdf")) {
      return require("@/assets/images/pdf-icon.png");
    }
    return require("@/assets/images/doc-icon.png");
  };

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
        {/* Drop Zone — tapping opens picker */}
        <TouchableOpacity
          className="border-2 border-dashed border-gray-300 rounded-2xl py-9 items-center bg-gray-50 mb-4"
          onPress={handlePickDocument}
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
          <Text className="text-gray-400 text-xs mt-1">
            PDF or image files supported
          </Text>
        </TouchableOpacity>

        {/* Selected File Card */}
        {file && (
          <View className="bg-white rounded-xl p-4 flex-row items-center border-2 border-green-500 mb-4">
            {/* File Type Icon */}
            <View className="w-11 h-11 bg-green-100 rounded-lg items-center justify-center mr-3">
              <Image
                source={getFileIcon(file.mimeType)}
                className="w-6 h-6"
                style={{ tintColor: "#4CAF50" }}
              />
            </View>

            {/* File Info */}
            <View className="flex-1">
              <Text
                className="text-sm font-semibold text-gray-800"
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {file.name}
              </Text>
              <Text className="text-xs text-gray-400 mt-0.5">{file.size}</Text>
            </View>

            {/* Remove Button */}
            <TouchableOpacity
              onPress={handleRemoveFile}
              className="w-7 h-7 bg-red-50 rounded-full items-center justify-center ml-2"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Image
                source={require("@/assets/images/close.png")}
                className="w-3.5 h-3.5"
                style={{ tintColor: "#EF4444" }}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Illustration — only show when no file selected */}
        {!file && (
          <View className="flex-1 items-center justify-center">
            <Image
              source={require("@/assets/images/upload.png")}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        )}

        {/* After file selected — show a ready state illustration area */}
        {file && (
          <View className="flex-1 items-center justify-center">
            <View className="w-24 h-24 bg-green-100 rounded-full items-center justify-center mb-4">
              <Image
                source={getFileIcon(file.mimeType)}
                style={styles.readyIcon}
                style={{ tintColor: "#4CAF50" }}
                resizeMode="contain"
              />
            </View>
            <Text className="text-base font-semibold text-gray-700 mb-1">
              File ready to submit
            </Text>
            <Text
              className="text-sm text-gray-400 text-center px-8"
              numberOfLines={2}
            >
              {file.name}
            </Text>
          </View>
        )}
      </View>

      <View className="px-5 pb-10">
        <GradientButton
          title="Submit"
          onPress={handleSubmit}
          disabled={!file}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  illustration: { width: 280, height: 210 },
  readyIcon: { width: 48, height: 48 },
});
