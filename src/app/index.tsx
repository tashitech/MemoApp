import { Redirect, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config';
import { ActivityIndicator, View } from 'react-native';


const Index = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user !== null) {
        router.replace('/memo/list')
      }
    })
  }, [])

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return <Redirect href='./auth/log_in' />
  }
}

export default Index;