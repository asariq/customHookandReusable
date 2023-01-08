import React, { useEffect, useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

const { height: windowHeight, width: windowWidth } = Dimensions.get('screen')

const Notification = () => {

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [data, setData] = useState("")

  const newReference = database().ref('/users').push();

  const submit = () => {

    const result = data.filter(user => name == user.name.name);

    if (result.length === 0) {
      newReference
        .set({
          name: { name },
          age: { age },
        })
        .then(() => Alert.alert("FireBase", "Data updated"));
    }
    else {
      Alert.alert("DATABASE", "user already exist")
    }
  }

  useEffect(() => {
    var config = {
      databaseURL: "https://console.firebase.google.com/u/0/project/pushnotifiy-5a03c/database/pushnotifiy-5a03c-default-rtdb/data/~2F",
      projectId: "pushnotifiy-5a03c",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    database()
      .ref()
      .on('value', snapshot => {
        const num = Object.values(snapshot?.val()?.users)
        setData(num)
      });
  }, [])


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>This is a Test App for firebase Database</Text>
      </View>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='NAME'
        placeholderTextColor={"gray"}
        style={styles.input} />
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder='AGE'
        placeholderTextColor={"gray"}
        style={styles.input} />

      <Button
        title="submit"
        onPress={() => submit()}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 35 }}>
        {data != "" && data.map((user) => (
          <View key={user.name.name} style={styles.viewContainer}>
            <Text style={styles.nameText}>{user.name.name} </Text>
            <View style={styles.ageView}>
              <Text style={{ color: "black" }}>{user.age.age}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>

  )
}


export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  header: {
    height: windowHeight * 0.06,
    width: windowWidth * 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  textHeader: {
    color: "white",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: 18
  },
  input: {
    color: "black",
    marginBottom: 10,
    height:windowHeight*0.05,
    width: windowWidth*0.9,
    borderColor: "black",
    borderWidth: 1
  },
  viewContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1
  },
  nameText: {
    paddingLeft: 4,
    color: "black",
    borderColor: "black",
    width: 200
  },
  ageView: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    borderWidth: 1
  },

})