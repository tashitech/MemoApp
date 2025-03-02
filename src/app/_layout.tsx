import { Stack } from 'expo-router';

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467FD3'
    },
    headerTintColor: '#fff',
    headerTitle: 'Memo App',
    headerBackTitle: '戻る',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }}/>
}

export default Layout;