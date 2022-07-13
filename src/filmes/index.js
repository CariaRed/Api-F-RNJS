import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Filmes extends Component {
render(){
    const {nome, foto} = this.props.data;
    return (
        <View>

        <View style={styles.card}>
        <Text style={styles.titulo}>{nome}</Text>
        <Image
        source={{uri: foto}}
        style={styles.capa}       
        />
        <View style={styles.Areabotao}>
        <TouchableOpacity style={styles.botao} onPress={() => alert(nome)}>
            <Text style={styles.botaoTexto}>LEIA MAIS!!!!!</Text>
        </TouchableOpacity>
        </View>


        </View>

        </View>

    );

}

}

const styles= StyleSheet.create({
    card:{

        shadowColor: '#000',
        backgroundColor: "#fff",
        textShadowOffset: {width:0, height:1},
        shadowOpacity: 0.6,
        margin: 15,
        borderRadius: 5,
        elevation: 2,

    },

    title:{
        
        fontSize: 16,
        padding: 14,

    },
    
    capa:{
        height: 230,
        zIndex:7,
    },
    
    Areabotao: {
        
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,

    },
    
    botao:{
        
        width: 90,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        
    },

    botaoTexto: {
       
        textAlign: 'center',
        color: '#FFF'

    }

});

export default Filmes;