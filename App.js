import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Search, Plus, Pencil } from "lucide-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./global.css";
import CreateBook from "./src/CreateBook";
import EditBook from "./src/EditBook";

const Stack = createNativeStackNavigator();

const sampleBooks = [
  {
    id: "1",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    read: false,
    createdAtMs: 1756684800000,
    cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    read: true,
    createdAtMs: 1756684800000,
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    read: false,
    createdAtMs: 1756684800000,
    cover: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
  },
];

function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-gray-100 p-5">
      <View className="mb-6">
        <Text className="text-3xl font-extrabold text-gray-900 mb-3">
          E-Library
        </Text>
        <View className="relative">
          <TextInput
            placeholder="Search by author..."
            placeholderTextColor="#9CA3AF"
            className="bg-white border border-gray-300 rounded-2xl pl-11 pr-4 py-3 text-gray-800 shadow-sm text-base"
          />
          <Search size={22} color="#6B7280" className="absolute left-3 top-3" />
        </View>
      </View>

      <FlatList
        data={sampleBooks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View className="bg-white border border-gray-200 p-5 mb-5 rounded-2xl shadow-md flex-row items-center">
            <Image
              source={{ uri: item.cover }}
              className="w-20 h-28 rounded-lg"
              resizeMode="cover"
            />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </Text>
              <Text className="text-sm text-gray-600">{item.author}</Text>
              <Text className="text-xs text-gray-400 mt-2">
                Added on {new Date(item.createdAtMs).toDateString()}
              </Text>
            </View>
            <View className="ml-3 space-y-2">
              <TouchableOpacity
                onPress={() => navigation.navigate("Edit", { book: item })}
                className="bg-yellow-500 px-3 py-2 rounded-lg flex-row items-center justify-center"
              >
                <Pencil size={14} color="white" />
                <Text className="text-white text-xs ml-1">Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-500 px-3 py-2 rounded-lg justify-center items-center">
                <Text className="text-white text-xs">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
        className="absolute bottom-6 right-6 bg-blue-600 p-5 rounded-full shadow-xl items-center justify-center"
        activeOpacity={0.85}
      >
        <Plus size={28} color="white" strokeWidth={2.5} />
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#2563EB" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Create"
          component={CreateBook}
          options={{ title: "Add New Book" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditBook}
          options={{ title: "Edit Book" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
