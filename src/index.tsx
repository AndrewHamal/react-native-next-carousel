import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native';

const { width: WIDTH } = Dimensions.get('screen')

interface ICarousel {
  data: Array<string> | Array<{}>
  imageGap: number
  paddingHorizontal: number
  rounded: number
  imageOffset: number
  imageObj?: string
  overlayItem?: any
  height?: number
}

export default function Carousel(props: ICarousel) {
  const {
    data,
    rounded = 30,
    imageGap = 20,
    imageOffset = 100,
    paddingHorizontal = 20,
    imageObj = '',
    overlayItem,
    height = 400,
    ...rest
  } = props

  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const onViewChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const { index } = viewableItems[0];
      setActiveEventIndex(index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <FlatList
      {...rest}
      data={data}
      horizontal={true}
      snapToAlignment="center"
      decelerationRate={"fast"}
      snapToInterval={WIDTH - (imageOffset - (imageGap / 2) - (paddingHorizontal))}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: imageGap, paddingHorizontal }}
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewChanged.current}
      renderItem={({ item, index }: any) => (
        <View style={{ width: WIDTH - imageOffset, opacity: index != activeEventIndex ? 0.1 : 1, borderRadius: rounded, overflow: 'hidden' }}>
          <Image width={WIDTH - imageOffset} height={height} source={{ uri: imageObj ? item?.[imageObj] : item }} />

          <View style={StyleSheet.absoluteFill}>
            {overlayItem && overlayItem({ item, index })}
          </View>
        </View>
      )}
    />
  )
}
