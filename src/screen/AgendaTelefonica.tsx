import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';

interface Contacto {
    nombre: string;
    telefono: string;
}

const AgendaTelefonica = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contactos, setContactos] = useState<Contacto[]>([]);
    const [errorNombre, setErrorNombre] = useState('');
    const [errorTelefono, setErrorTelefono] = useState('');

    const agregarContacto = () => {
        if (nombre.length < 3) {
            setErrorNombre('El nombre debe tener al menos 3 caracteres');
            return;
        } else {
            setErrorNombre('');
        }

        if (telefono.length < 8) {
            setErrorTelefono('El número de teléfono debe tener al menos 8 digitos');
            return;
        } else {
            setErrorTelefono('');
        }

        setContactos([...contactos, { nombre, telefono }]);
        setNombre('');
        setTelefono('');
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Agenda Telefónica</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                placeholder="Nombre"
                onChangeText={text => setNombre(text)}
                value={nombre}
            />
            {errorNombre ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorNombre}</Text> : null}
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                placeholder="Teléfono"
                onChangeText={text => setTelefono(text)}
                value={telefono}
                keyboardType="phone-pad"
            />
            {errorTelefono ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorTelefono}</Text> : null}
            <Button
                title="Agregar Contacto"
                onPress={agregarContacto}
            />
            <Text style={{ fontSize: 20, marginTop: 20 }}>Contactos:</Text>
            <FlatList
                data={contactos}
                renderItem={({ item }) => (
                    <Text>{item.nombre}: {item.telefono}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default AgendaTelefonica;
