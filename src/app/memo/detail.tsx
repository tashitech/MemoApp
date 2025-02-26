import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import CircleButton from '../../components/CircleButton';

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト１</Text>
        <Text style={styles.memoDate}>2025年2月1日 12:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          今日の買い物のリスト
          高タンパク質・低カロリーな夕食を作りたいので、鶏胸肉・ブロッコリーは必須です。
          忘れないように！
        </Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{top: 60, bottom: 'auto'}}>
        <Feather name="edit-2" size={30} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Detail;