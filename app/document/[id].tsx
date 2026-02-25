import { GradientButton } from "@/app/components/ui/GradientButton";
import { signatureFields, witnessDocuments } from "@/app/data/dummy";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function DocumentViewerScreen() {
  const { id } = useLocalSearchParams();
  const doc = witnessDocuments.find((d) => d.id === id) ?? witnessDocuments[0];
  const [signed, setSigned] = useState<Set<string>>(new Set(["f1"]));

  const progress = Math.round((signed.size / doc.signaturesTotal) * 100);

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white pt-14 px-4 pb-4 flex-row items-center gap-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("@/assets/images/close.png")}
            className="w-6 h-6"
            style={{ tintColor: "#374151" }}
          />
        </TouchableOpacity>
        <Text
          className="text-base font-bold text-gray-800 flex-1"
          numberOfLines={1}
        >
          {doc.title}
        </Text>
      </View>

      {/* Progress Bar */}
      <View className="bg-white px-4 pb-4">
        <Text className="text-xs text-gray-500 mb-2">
          {signed.size} of {doc.signaturesTotal} signatures completed
        </Text>
        <View className="h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
          <View
            className="h-full bg-indigo-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </View>
        <Text className="text-xs text-gray-400 text-right">
          {progress}% Total
        </Text>
      </View>

      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        {/* Document Page Card */}
        <View className="bg-white rounded-2xl overflow-hidden mb-3 shadow-md">
          <View className="flex-row justify-between px-4 py-3 border-b border-gray-100">
            <Text className="text-xs font-semibold text-gray-400 tracking-widest">
              PAGE 2 OF 4
            </Text>
          </View>

          <View className="p-4">
            <Text className="text-xs font-bold text-gray-600 text-center tracking-widest mb-3">
              SIGNATURE APPROVAL FORM
            </Text>
            <Text className="text-xs text-gray-500 leading-5 mb-4">
              This thesis is recommended for approval by the student&apos;s
              Thesis Committee and Department Head.
              {"  "}
              <View className="bg-green-500 rounded px-1">
                <Text className="text-white text-xs font-bold"> SIGNED ✓ </Text>
              </View>
            </Text>

            {signatureFields.map((field) => {
              const isSigned = signed.has(field.id);
              return (
                <View key={field.id} className="mb-4">
                  <TouchableOpacity
                    className={`rounded-md py-2.5 items-center mb-1 ${
                      isSigned
                        ? "bg-green-50 border border-green-500"
                        : "bg-red-500"
                    }`}
                    onPress={() =>
                      !isSigned && setSigned((p) => new Set([...p, field.id]))
                    }
                    disabled={isSigned}
                  >
                    <Text
                      className={`text-sm font-bold tracking-wider ${
                        isSigned ? "text-green-600" : "text-white"
                      }`}
                    >
                      {isSigned
                        ? "✓ SIGNED"
                        : field.type === "signAndDate"
                          ? "SIGN & DATE"
                          : "SIGN"}
                    </Text>
                  </TouchableOpacity>
                  <View className="flex-row justify-between">
                    <Text className="text-xs text-gray-400">{field.label}</Text>
                    <Text className="text-xs text-gray-400">Date</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Page 3 preview */}
        <View className="bg-white rounded-2xl p-4 opacity-50 mb-3">
          <Text className="text-xs font-semibold text-gray-400 tracking-widest">
            PAGE 3 OF 4
          </Text>
        </View>

        <View className="h-28" />
      </ScrollView>

      {/* Footer */}
      <View className="bg-white px-4 py-4 border-t border-gray-100">
        <GradientButton
          title="Continue"
          onPress={() => router.push("/document/instructions")}
        />
      </View>
    </View>
  );
}
