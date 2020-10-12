import React from 'react';
import {View, Text, ScrollView, SafeAreaView,FlatList} from 'react-native';
import {dummyDictionary} from '../../Ulitis/DummyData'
import {Dictionary} from '../../Components/Dictionary';
import styles from './style';


export function DictionaryScreen(props) {

    function renderDictionary({item}) {
        return <Dictionary Dictionary={item} />;
    }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.TitleWrapper}>
          <Text style = {styles.Title}>القواميس</Text>
        </View>
        <View>
        <FlatList data={dummyDictionary} renderItem={renderDictionary} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
