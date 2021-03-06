import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

// import imgLittle from '../../../../img/temp/little.jpg';
// import imgMaxi from '../../../../img/temp/maxi.jpg';
// import imgParty from '../../../../img/temp/party.jpg';

const { width } = Dimensions.get('window');

const url = 'http://eotw2012.000webhostapp.com/api/images/type/';

export default class Category extends Component {
    openListProduct(category) {
        const { navigation } = this.props;
        navigation.navigate('Screen_ProductList', { category });
    }

    render() {
        const { types } = this.props;
        const swiper = (
            <Swiper width={width - 40} height={(width - 40) / 2} autoplay autoplayTimeout={5}>
                { types.map(e => (
                    <TouchableOpacity onPress={() => this.openListProduct(e)} key={e.id}>
                        <ImageBackground
                            source={{ uri: `${url}${e.image}` }}
                            style={styles.imgStyle}>
                            <Text style={styles.textContent}>{e.name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )) }
            </Swiper>
        );
        return (
            <View style={styles.wrapCategory}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={styles.title}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4, alignItems: 'center' }}>
                    { types.length ? swiper : null }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapCategory: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 3,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between',
    },
    imgStyle: {
        width: width - 40,
        height: (width - 40) / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#606467',
        fontFamily: 'sans-serif-medium'
    },
    textContent: {
        //fontFamily: 'sans-serif-medium',
        color: '#919191',
        fontSize: 20
    }
});
