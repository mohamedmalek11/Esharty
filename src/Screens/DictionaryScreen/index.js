import React from 'react';
import {View, Text, ScrollView, SafeAreaView, FlatList} from 'react-native';
import {dummyDictionary} from '../../Ulitis/DummyData';
import {Strings} from '../../Ulitis/Strings'
import {Dictionary} from '../../Components/Dictionary';
import styles from './style';

export const DictionaryScreen = (props) => {
  const renderDictionary = ({item}) => {
    return <Dictionary Dictionary={item} />;
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.TitleWrapper}>
          <Text style={styles.Title}>{Strings.DictionaryTitle}</Text>
        </View>
        <View>
          <FlatList data={dummyDictionary} renderItem={renderDictionary} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
