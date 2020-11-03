import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {dummyCategories, dummyTopics} from '../../Ulitis/DummyData';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '../../Components/Card';
import axios from 'axios';
import {Strings} from '../../Ulitis/Strings';
import styles from './style';

const MainCategory = (props) => {
  const {MainCategory} = props;
  const [Banner, SetBanner] = React.useState([]);

   axios.get('https://esharti.net/api/banner/')
    .then((responseJson) => {
      console.log(responseJson.data)
      SetBanner(responseJson.data);
    })
    .catch((error) => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
 // ADD THIS THROW error
  throw error;
    });
    

  return (
    <View style={{paddingTop: 15}}>
      <View style={styles.Card}>
        <Image
          source={require('../../Assets/Images/MainCategoryImage.png')}
          style={styles.Image}
        />
        <LinearGradient
          colors={[
            'rgba(255,255,255,0.0)',
            'rgba(0,0,0,0.1)',
            'rgba(0,0,0,0.3)',
          ]}
          style={styles.LinearGradient}></LinearGradient>

        <View style={styles.TextWrapper}>
          <View>
            <Text style={styles.MainCategoryText}>{MainCategory.title}</Text>
          </View>
          <View>
            <Text style={styles.CategorySeconeryText}>
              {MainCategory.secTitle}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Topics = (props) => {
  const {Topics} = props;

  return (
    <View>
      <Card style={styles.TopicsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View style={styles.TopicsTextWrapper}>
            <Text
              style={{
                fontSize: 17,
                marginBottom: 10,
                textAlign: 'right',
              }}>
              {Topics.title}
            </Text>
            <Text style={{color: '#676767', textAlign: 'right'}}>
              {Topics.desciption}
            </Text>
          </View>
          <View>
            <Image
              source={require('../../Assets/Images/TopicsImage.png')}
              style={{width: 100, height: 100}}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

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
          <Text style={styles.greetingText}>
            {Strings.GreetingTextHomePage}
          </Text>
        </View>
        <FlatList
          data={dummyCategories}
          renderItem={renderCategory}
          horizontal={true}
          style={styles.FlatList}
          showsHorizontalScrollIndicator = {false}
        />

        <View style={styles.topicsTextWrapper}>
          <Text style={styles.topicsText}>{Strings.TopicsTitleHomePage}</Text>
        </View>
        <FlatList data={dummyTopics} renderItem={renderTopics} />
      </ScrollView>
    </SafeAreaView>
  );
};
