import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {MainCategory} from '../../Components/MainCategory';
import {dummyCategories, dummyTopics} from '../../Ulitis/DummyData';
import Icon from 'react-native-vector-icons/Ionicons';
import {Topics} from '../../Components/Topics';
import styles from './style';

export function HomeScreen(props) {
  function renderCategory({item}) {
    return <MainCategory MainCategory={item} />;
  }
  function renderTopics({item}) {
    return <Topics Topics={item} />;
  }
  return (

      <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <Icon name="share-social" style={styles.icon} />
          </View>
          <Image
            source={require('../../Assets/Images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.greetingTextWrapper}>
          <Text style={styles.greetingText}>مرحبا بك في تطبيق اشاراتي</Text>
        </View>
        <FlatList
          data={dummyCategories}
          renderItem={renderCategory}
          horizontal={true}
          style={styles.FlatList}
        />
        
        <View style={styles.topicsTextWrapper}>
          <Text style={styles.topicsText}>أخر المواضيع</Text>
        </View>
        <FlatList data={dummyTopics} renderItem={renderTopics} />
        </ScrollView>
      </SafeAreaView>
    
  );
}
