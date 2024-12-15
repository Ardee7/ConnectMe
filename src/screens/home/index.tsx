import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getTags } from '../../mocks/Get';
import { homeStyles } from '../../styles/homeStyles';
import { homeRenderTag } from '../../components/HomeCardRender';

const styles = homeStyles;

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>ConnectMe</Text>
        <FlatList
          data={getTags}
          keyExtractor={item => item.id}
          renderItem={homeRenderTag}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
