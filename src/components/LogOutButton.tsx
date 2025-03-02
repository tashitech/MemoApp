import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { router } from "expo-router";

const handlePress = (): void => {
  Alert.alert('ほんまにログアウトする？', '', [ 
    {
      text: 'しない！',
      style: 'cancel'
    },
    {
      text: 'ログアウトする',
      style: 'destructive',
      onPress: () => {
        signOut(auth)
        .then(() => {
          router.replace('/auth/log_in')
        })
        .catch(() => {
          Alert.alert('ログアウトに失敗してもたで...')
        })
      }
    }
  ])
}

const LogOutButton = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>ログアウトする？</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)'
  },
})

export default LogOutButton;