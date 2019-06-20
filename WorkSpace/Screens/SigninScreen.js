import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import SSC from '../SSC';

export default class SigningScreen extends Component{
    constructor(props){
        super(props);

    };
    
    render(){
        return(
            <View>
                <TextInput placeholder="Nom"
                style={Designs.txtin}
                onChangeText={(nom) => this.setState({ nom })} />
              <TextInput placeholder="Prénom"
                style={Designs.txtin}
                onChangeText={(prenom) => this.setState({ prenom })} />
              <TextInput placeholder="Phone"
                style={Designs.txtin}
                onChangeText={(phone) => this.setState({ phone })} />
              <TextInput placeholder="Adresse"
                style={Designs.txtin}
                onChangeText={(Adresse) => this.setState({ Adresse })}                />
                <TextInput placeholder="Mot de passe"
                style={Designs.txtin}
                onChangeText={(MDP) => this.setState({ MDP })}
                secureTextEntry />
            </View>
        );
    };
};