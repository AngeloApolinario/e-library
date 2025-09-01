import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { User, Book, Calendar } from "lucide-react-native";
export default function CreateBook() {
  return (
    <ScrollView className="flex-1 bg-gray-100 px-6 py-8">
      <Text className="text-3xl font-extrabold text-gray-900 text-center w-full mb-8">
        Edit Book
      </Text>

      <View className="mb-6 w-full">
        <Text className="text-gray-700 font-semibold mb-2">Title</Text>
        <View className="flex-row items-center bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm w-full">
          <Book size={20} color="#6B7280" />
          <TextInput
            placeholder="Title to edit here"
            placeholderTextColor="#9CA3AF"
            className="flex-1 ml-3 text-gray-800 text-base"
          />
        </View>
      </View>

      <View className="mb-6 w-full">
        <Text className="text-gray-700 font-semibold mb-2">Author</Text>
        <View className="flex-row items-center bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm w-full">
          <User size={20} color="#6B7280" />
          <TextInput
            placeholder="Author to edit here"
            placeholderTextColor="#9CA3AF"
            className="flex-1 ml-3 text-gray-800 text-base"
          />
        </View>
      </View>

      <View className="mb-6 flex-row items-center justify-between bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm w-full">
        <Text className="text-gray-700 font-semibold text-base">
          Already Read?
        </Text>
        <Switch value={false} />
      </View>

      <View className="mb-6 w-full">
        <Text className="text-gray-700 font-semibold mb-2">Created At</Text>
        <View className="flex-row items-center bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 shadow-inner w-full">
          <Calendar size={20} color="#6B7280" />
          <Text className="ml-3 text-gray-600 text-base">
            Auto-generated on save
          </Text>
        </View>
      </View>

      <View className="mb-6 w-full">
        <Text className="text-gray-700 font-semibold mb-2">UID</Text>
        <View className="bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 shadow-inner w-full">
          <Text className="text-gray-600 text-base">user_placeholder</Text>
        </View>
      </View>

      <TouchableOpacity className="mt-4 bg-blue-600 py-4 rounded-2xl shadow-lg w-full">
        <Text className="text-center text-white text-lg font-bold">
          Save Book
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
