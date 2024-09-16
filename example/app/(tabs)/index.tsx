import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-next-carousel";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  const imageUrls = [
    { title: 'First Slide', img: 'https://plus.unsplash.com/premium_photo-1664546293816-191e0566f19e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Second Slide', img: 'https://plus.unsplash.com/premium_photo-1683134105531-42032fc66937?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Third Slide', img: 'https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]

  return (
    <SafeAreaView style={{ paddingTop: 30 }}>
      <Carousel
        imageObj={'img'}
        rounded={30}
        imageGap={20}
        data={imageUrls}
        imageOffset={100}
        paddingHorizontal={20}
        overlayItem={({ item, index }: any) => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={[StyleSheet.absoluteFill, { backgroundColor: "#000", opacity: 0.5, zIndex: 0 }]} />
          <Text style={{ fontSize: 20, color: "#fff" }}>{item.title}</Text>
        </View>} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
