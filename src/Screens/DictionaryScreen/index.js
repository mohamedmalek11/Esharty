import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {dummyDictionary} from '../../Ulitis/DummyData';
import {Strings} from '../../Ulitis/Strings';
import {Card} from '../../Components/Card';
import styles from './style';

const Dictionary = (props) => {
  const {Dictionary} = props;

  return (
    <View>
      <Card style={styles.Container}>
        <View style={styles.Wrapper}>
          <View style={styles.ImageWrapper}>
            <Image
              source={require('../../Assets/Images/Dictionary.png')}
              style={styles.Image}
            />
          </View>
          <View style={styles.ContentWrapper}>
            <View style={styles.TextWrapper}>
              <Text style={styles.MainTitle}>{Dictionary.MainTitle}</Text>
              <Text style={styles.SecTitle}>{Dictionary.SecTite}</Text>
            </View>
            <View style={styles.IconWrapper}>
              <Card>
                <Icon name="eye" style={styles.Icon} />
              </Card>
            </View>
          </View>
          <View style={styles.DescriptionWrapper}>
            <Text style={styles.Description}>{Dictionary.Description}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

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
