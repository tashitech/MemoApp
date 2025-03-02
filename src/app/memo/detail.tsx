import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import CircleButton from '../../components/CircleButton';
import { useEffect, useState } from 'react';
import { auth, db } from '../../config';
import { doc, onSnapshot } from 'firebase/firestore';
import { Memo } from '../../../types/memo';

const handlePress = (id: string): void => {
  router.push({pathname: '/memo/edit', params: { id }})
}

const Detail = (): JSX.Element => {
  const [memo, setMemo] = useState<Memo | null>(null);
  const id = String(useLocalSearchParams().id);
  console.log(id)
  useEffect(() => {
    if (auth.currentUser === null) {return}
    const ref = doc(db, `users/${auth.currentUser.uid}/memos/`, id)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
        const { bodyText, updatedAt } = memoDoc.data() as Memo;
        setMemo({
          id: memoDoc.id,
          bodyText,
          updatedAt
        })
      })
      return unsubscribe
    }, [])
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text numberOfLines={1} style={styles.memoTitle}>{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleString('ja-JP')}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>
      <CircleButton onPress={() => {handlePress(id)}} style={{top: 60, bottom: 'auto'}}>
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
    paddingHorizontal: 27
  },
  memoBodyText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32
  }
})

export default Detail;