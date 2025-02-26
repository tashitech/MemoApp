import { View, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import CircleButton from '../../components/CircleButton';
import { Feather } from '@expo/vector-icons';

const handlePress = (): void => {
  router.back()
}

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
      </View>
      <CircleButton onPress={handlePress}>
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

export default Edit;