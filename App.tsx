/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  //All of the items in our stories
  const data = [
    {
      id: 1,
      firstName: 'Cande',
    },
    {
      id: 2,
      firstName: 'Fran',
    },
    {
      id: 3,
      firstName: 'Venus',
    },
    {
      id: 4,
      firstName: 'Milo',
    },
    {
      id: 5,
      firstName: 'Mili',
    },
    {
      id: 6,
      firstName: 'Pluto',
    },
    {
      id: 7,
      firstName: 'Chimuel',
    },
    {
      id: 8,
      firstName: 'Goku',
    },
    {
      id: 9,
      firstName: 'Leopold',
    },
  ];
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize; //4
    console.log(startIndex, renderedData.length);
    if (startIndex > data.length) {
      return [];
    }
    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title={"Let's Exploore"} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.userStoryContairner}>
          <FlatList
            onEndReachedThreshold={0.5}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true);
                setRenderedData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                setIsLoading(false);
              }
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={renderedData}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
