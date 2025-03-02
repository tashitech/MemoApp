import { Stack } from 'expo-router';

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467FD3'
    },
    headerTintColor: '#fff',
    headerTitle: '関西風メモアプリ',
    headerBackTitle: '戻るで？',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }}/>
}

export default Layout;