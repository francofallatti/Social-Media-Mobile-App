/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Pressable,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';
import {scaleFontSize} from './assets/styles/scaling';

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
  const posts = [
    {
      id: 1,
      firstName: 'Cande',
      lastName: 'Gonzalez',
      location: 'Nogues, Malvinas Argentinas',
      likes: 1323,
      comments: 3,
      bookmarks: 1,
    },
    {
      id: 2,
      firstName: 'Fran',
      lastName: 'Fallatti',
      location: 'Paris, Francia',
      likes: 1313,
      comments: 2,
      bookmarks: 3,
    },
    {
      id: 3,
      firstName: 'Venus',
      lastName: 'Gonzalez',
      location: 'Nogues, Malvinas Argentinas',
      likes: 12323,
      comments: 5,
      bookmarks: 4,
    },
    {
      id: 4,
      firstName: 'Milo',
      lastName: 'Fallatti',
      location: 'Los polvorines',
      likes: 123,
      comments: 1,
      bookmarks: 10,
    },
    {
      id: 5,
      firstName: 'Mili',
      lastName: 'Gonzalez',
      location: 'Nogues, Malvinas Argentinas',
      likes: 132,
      comments: 0,
      bookmarks: 2,
    },
  ];
  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  console.log(screenData);
  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      console.log('change screen data ', result.screen);
      setScreenData(result.screen);
    });
  }, []);

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={"Let's Explore"} />
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#CACDDE'}
                  size={scaleFontSize(20)}
                />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoadingPosts(false)}
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
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString() + 'post'}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
            ]);
            setIsLoadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
