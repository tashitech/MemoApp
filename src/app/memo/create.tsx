import { View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db, auth } from '../../config';
import CircleButton from '../../components/CircleButton';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView';

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) {
    return
  }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then((docRef) => {
    console.log(docRef.id)
    router.back()
  })
  .catch((error) => {
    console.log(error)
  })
}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          placeholder='メモを入力'
          onChangeText={(text) => {setBodyText(text)}}
          autoCapitalize="none"
          autoFocus
        />
      </View>
      <CircleButton onPress={() => {handlePress(bodyText)}}>
        <Feather name='check' size={40} />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create;