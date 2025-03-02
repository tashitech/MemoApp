import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { router, useNavigation } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../../config';
import MemoListItem from '../../components/MemoListItem';
import CircleButton from '../../components/CircleButton';
import LogOutButton from '../../components/LogOutButton';
import { type Memo } from '../../../types/memo';

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton />  }
    })
  }, [])
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe =  onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data())
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <View>
        {memos.map((memo) => <MemoListItem key={memo.id} memo={memo} /> )}
      </View>
      <CircleButton onPress={handlePress}>
        <Feather name="plus" size={40} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

export default List;