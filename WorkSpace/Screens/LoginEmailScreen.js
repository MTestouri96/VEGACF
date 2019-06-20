import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import SSC from '../SSC';

export default class LoginEmailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
Email:'',
            MDP:'',
        };
    };

    render() {
        return (
                <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center', }]}>
                    <Image source={require('../Image/logo.svg')}
                        style={{ width: 276, height: 40 }} />
                    <Text style={SSC.txt}>Se connecter par</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                        <TouchableOpacity style={[SSC.logFG, { backgroundColor: '#dd4f43' }]}>
                            <Image style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={SSC.logFG}>
                            <Image style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={SSC.txt}>Ou Se connecter par email</Text>
                    <TextInput placeholder="Email"
                        style={SSC.txtin}
                        onChangeText={(Email) => this.setState({ Email })} />
                    <TextInput placeholder="Mot de passe"
                        style={SSC.txtin}
                        secureTextEntry
                        onChangeText={(MDP) => this.setState({ MDP })} />



                    <View flexDirection='row'>
                        {/* CHECKBOX !! */}
                        <Text>Se souvenir de moi</Text>
                        <Text style={[SSC.txt, { color: '#696969' }]}>Mot de passe oublié? </Text>
                    </View>
                    <TouchableOpacity style={SSC.logM}>
                        <Text style={{ fontSize: 17, color: '#fff', }}>Se connecter</Text>
                    </TouchableOpacity>
                    <View flexDirection='row'>
                        <Text style={SSC.txt}>Vous n'avez pas de compte?    </Text>
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Screen3');}}>
                            <Text style={[SSC.txt, { color: '#68cefb' }]}>S'inscrire</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    };
};