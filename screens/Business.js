import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/services';
import moment from 'moment'

export const Business = () => {

    

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        services('business')
            .then(data => {
                setNewsData(data)
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    return (
        <NativeBaseProvider>
            <ScrollView height={850}>
                {newsData.length > 1 ? (
                    <FlatList
                    data={newsData}
                    renderItem={({ item }) => (
                        <View>
                            <View style={StyleSheet.newsContainer}   >
                            <Image
                                        width={550}
                                        height={250}
                                        resizeMode={"cover"}
                                        source={{
                                            uri: item.urlToImage ? item.urlToImage : 'https://www.fasthosts.co.uk/blog/content/images/2021/09/simpsons_gif.gif'
                                        }}
                                        alt="Alternate Text"
                                    />
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>

                                    <Text>
                                        {moment(item.publishedAt).format('LLL')}
                                    </Text>

                                    <Text>
                                        {item.description}
                                    </Text>
                            </View>
                            <Divider my={2} bg='#e0e0e0' />

                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
                ) : (
                    <View style={styles.spinner}>
                        <Spinner color="danger.400" />
                    </View>
                ) }

            </ScrollView>
        </NativeBaseProvider>
    )
}



const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400
    }
});