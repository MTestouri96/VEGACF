import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SSC from '../SSC';

export default class SigningScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      Adresse: '',
      Email: '',
      MDP: '',
      MDP2: '',
      date: "21-06-2019",
    };
  };

  signin() {
    if (this.state.nom!='' && this.state.prenom!='' && this.state.Adresse!='' && this.state.Email!='' && this.state.MDP2!='' && this.state.MDP!=''){
    if (this.state.MDP == this.state.MDP2) {
      this.props.navigation.navigate('Screen4');
      alert("Inscription réussite ✔️");
      //api add
    } else {
      alert("Mot de passe !");
    }
  } else{
alert("Remplir tout les champs");
  };
  };

  render() {
    return (
      <View style={[SSC.container, { justifyContent: 'space-around', alignItems: 'center' }]}>
        <Image source={require('../Image/logo.png')}
          style={{ width: 276, height: 40 }} />
        <TextInput placeholder="Nom"
          style={SSC.txtin}
          onChangeText={(nom) => this.setState({ nom })} />
        <TextInput placeholder="Prénom"
          style={SSC.txtin}
          onChangeText={(prenom) => this.setState({ prenom })} />
        <DatePicker style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="Date de naissance"
          format="DD-MM-YYYY"
          minDate="01-01-1900"
          maxDate="31-12-2099"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => { this.setState({ date: date }) }}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: { marginLeft: 36 },
          }} />
        <TextInput placeholder="Adresse"
          style={SSC.txtin}
          onChangeText={(Adresse) => this.setState({ Adresse })} />
        <TextInput placeholder="Email"
          style={SSC.txtin}
          onChangeText={(Email) => this.setState({ Email })} />
        <TextInput placeholder="Mot de passe"
          style={SSC.txtin}
          onChangeText={(MDP) => this.setState({ MDP })}
          secureTextEntry />
        <TextInput placeholder="Resaisir mot de passe"
          style={SSC.txtin}
          onChangeText={(MDP2) => this.setState({ MDP2 })}
          secureTextEntry />
        <TouchableOpacity style={SSC.logM}
          onPress={() => { this.signin() }} >
          <Text style={{ fontSize: 17, color: '#fff', }}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    );
  };
};