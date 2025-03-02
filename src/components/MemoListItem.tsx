import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { type Memo } from "../../types/memo";

const handlePress = (): void => {
  router.push('/memo/detail')
}

interface Props {
  memo: Memo
}

const MemoListItem = (props: Props): JSX.Element => {
  const { memo } = props;
  const dateString = memo.updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <TouchableOpacity onPress={handlePress} style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
        <Text style={styles.memoListItemDate}>{dateString}</Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="close" size={24} color="gray" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
})

export default MemoListItem;