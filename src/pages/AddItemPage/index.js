import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig"
import styles from "./style";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
export default function AddItemPage({ navigation }, props){

  const [description, setDescription] = useState(null);
  const [name, setName] = useState(null);
  const [quantity, setQuantity] = useState(null);

  async function addItemToList(){
    const colRef = collection(database, 'List');
    // Add a new document in collection "cities"
    await addDoc(colRef, {
      description: description,
      name: name,
      quantity: quantity
    });

    navigation.navigate("List");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Corolla"
        onChangeText={setName}
        value={name}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Toyota"
        onChangeText={setDescription}
        value={description}
      />
      <Text style={styles.label}>Ano</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 2021"
        onChangeText={setQuantity}
        value={quantity}
      />
      <Text style={styles.label}>Cor</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: azul"
        onChangeText={setQuantity}
        value={quantity}
      />
      <TouchableOpacity 
        style={styles.buttonNewItem}
        onPress={()=>{
          addItemToList()
        }}
      >
        <Text style={styles.iconButton}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default AddItemPage;
