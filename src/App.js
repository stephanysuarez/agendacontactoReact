import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import contactos from './sample/contactos.json'

import BuscarContact from './components/nav-bar';
import Contactos from './components/Contactos';
import ContactoForm from './components/ContactoForm';

class App extends Component {

  state = {
    contactos: contactos
  }
  
  addContacto = (nombre, numero, email) => {
    
    const newContacto = {
      nombre: nombre,
      numero: numero,
      email: email,
      id: this.state.contactos.length
    }

    this.setState({
      contactos: [...this.state.contactos, newContacto]
    })
  }


  deleteContacto = (id) => {
    const newContacto = this.state.contactos.filter(contacto => contacto.id !==id);
    this.setState({
      contactos: newContacto
    })
  }

  searchContacto = (dato) => {
    const Search = this.state.contactos.filter(contacto => {
      if(contacto.nombre.includes(dato) ||
      contacto.numero.includes(dato) ||
      contacto.email.includes(dato) ){
        
        return contacto;
      }
    });
    this.setState({contactos: Search})
  }

  render() {
    return <div>
      <BuscarContact
        contactosNews = {this.state.contactos}
        key = {contactos.id}
        searchContacto = {this.searchContacto}/>

      <ContactoForm addContacto = {this.addContacto}/>
      <Contactos 
      contactos={this.state.contactos} 
      deleteContacto = {this.deleteContacto}/>
    </div>
  }
}

export default App;
