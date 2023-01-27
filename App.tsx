
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Lista = () => {
  /*const categorias = ['RESTAURANTES', 'ALIMENTOS', 'SALUD', 'MOTOENVIOS', 'SERVICIOS', 'MASCOTAS']

 const CategoriaList = () => {
  return (
    <View style={style.header2}>
      {categorias.map((item, index) =>(
        <Text style={style.cat}>{item}</Text>
      ))}
    </View>
  )
 }*/

  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 0,
        backgroundColor: '#E1E1E1'
      }}>
      <View>

      </View>
      <View style={style.header}>
        <View style={{ padding: 10, }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFD127' }}>Xidoo </Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFD127' }}>Rutas</Text>

        </View>
        <View style={{ marginTop: 0, flexDirection: 'row' }}>
          <View>
            <TextInput
              style={style.input} />
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'white', justifyContent: 'center', marginBottom: 10, marginLeft: 8 }}>Seleccione una categoria</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.header2}>
        <View style={{ marginTop: 10, marginLeft: 15, flexDirection: 'row' }}>
        <Button 
        style={style.cat}
        title="Restaurantes" onPress={() => Alert.alert('Diste click')}/>
          <Text style={style.cat}>Alimentos</Text>
          <Text style={style.cat}>Salud</Text>

        </View>
        <View style={{ marginTop: 10, marginLeft: 15, marginBottom: 10, flexDirection: 'row' }}>
          <Text>Moto envios</Text>
          <Text style={style.cat}>Servicios</Text>
          <Text style={style.cat}>Mascotas</Text>

        </View>
      </View>

      <View style={style.card}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={style.foto}></View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', justifyContent: 'center', marginBottom: 10, marginLeft: 8, marginTop: 10 }}>Negocio 1</Text>
              <Text style={{ fontSize: 15, color: 'black', justifyContent: 'center', marginBottom: 10, marginLeft: 8, }}>Esta es la descripcion</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={style.card}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={style.foto}></View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', justifyContent: 'center', marginBottom: 10, marginLeft: 8, marginTop: 10 }}>Negocio 1</Text>
              <Text style={{ fontSize: 15, color: 'black', justifyContent: 'center', marginBottom: 10, marginLeft: 8, }}>Esta es la descripcion</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={style.card}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={style.foto}></View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', justifyContent: 'center', marginBottom: 10, marginLeft: 8, marginTop: 10 }}>Negocio 1</Text>
              <Text style={{ fontSize: 15, color: 'black', justifyContent: 'center', marginBottom: 10, marginLeft: 8, }}>Esta es la descripcion</Text>
            </View>
          </View>
        </View>
      </View>





    </SafeAreaView>
  );
};



const style = StyleSheet.create({
  header: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#494949',

  },
  header2: {
    justifyContent: 'space-between',
    backgroundColor: '#494949',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  input: {
    height: 50,
    width: 310,
    marginTop: 18,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    placeholder: 'Buscar'
  },
  cat: {
    marginLeft: 12,
    marginBottom: 10,
    padding: 10,
    height: 40,
    width: 110,
    fontWeight: 'bold',
    backgroundColor: '#FFD127',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10
  },
  card: {
    marginTop: 10,
    marginHorizontal: 10,
    height: 150,
    width: 390,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  foto: {
    margin: 10,
    height: 130,
    width: 150,
    fontWeight: 'bold',
    backgroundColor: '#FFD127',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10
  },


})


export default Lista;