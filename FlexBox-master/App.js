import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Component/Header';
import Mid from './Component/Mid';
import Footer from './Component/Footer';

class App extends Component {
  
  render() { 
    return (
     <View>
       <Header/>
       <Mid/>
       <Footer/>
     </View>  
    
     );
  }
}
 
export default App;