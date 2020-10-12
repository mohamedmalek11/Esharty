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
import {Strings} from '../../Ulitis/Strings';
import styles from './style';

export const HomeScreen = (props) => {
  const renderCategory = ({item}) => {
    return <MainCategory MainCategory={item} />;
  };
  const renderTopics = ({item}) => {
    return <Topics Topics={item} />;
  };
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
          <Text style={styles.greetingText}>{Strings.GreetingTextHomePage}</Text>
        </View>
        <FlatList
          data={dummyCategories}
          renderItem={renderCategory}
          horizontal={true}
          style={styles.FlatList}
        />

        <View style={styles.topicsTextWrapper}>
          <Text style={styles.topicsText}>{Strings.TopicsTitleHomePage}</Text>
        </View>
        <FlatList data={dummyTopics} renderItem={renderTopics} />
      </ScrollView>
    </SafeAreaView>
  );
};
