import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '../../Components/Card';
import axios from 'axios';
import {Strings} from '../../Ulitis/Strings';
import styles from './style';

export const HomeScreen = (props) => {
  const [Banner, SetBanner] = React.useState([]);
  const [Article, setArticle] = React.useState([]);

  useEffect(() => {
    getData();
    getArticle();
  }, []);

  const getData = () => {
    return axios
      .get('https://esharti.net/api/banner/')
      .then((responseJson) => {
        console.log(responseJson.data);
        SetBanner(responseJson.data.data);
      })
      .catch((error) => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  };
  const getArticle = () => {
    return axios
      .get('https://esharti.net/api/article')
      .then((responseJson) => {
        console.log(responseJson.data.data);
        setArticle(responseJson.data.data.data);
      })
      .catch((error) => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
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
          data={Banner}
          renderItem={({item}) => {
            return (
              <View style={{paddingTop: 15}}>
                <View style={styles.Card}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.Image}
                    resizeMode="cover"
                  />
                </View>
              </View>
            );
          }}
          horizontal={true}
          style={styles.FlatList}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.topicsTextWrapper}>
          <Text style={styles.topicsText}>{Strings.TopicsTitleHomePage}</Text>
        </View>
        <FlatList
          data={Article}
          renderItem={({item}) => {
            return (
              <View>
                <Card style={styles.TopicsContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      marginHorizontal: 5,
                    }}>
                    <View style={styles.TopicsTextWrapper}>
                      <Text
                        style={{
                          fontSize: 17,
                          marginBottom: 10,
                          textAlign: 'right',
                        }}>
                        {item.title}
                      </Text>
                      <Text style={{color: '#676767', textAlign: 'right'}}>
                        {item.description}
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={{uri: item.image}}
                        style={{width: 100, height: 100}}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </Card>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
