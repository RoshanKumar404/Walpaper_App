import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

export default function Explore() {
  const [loaded, setLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0); // State to trigger re-render

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      interstitial.load(); // Preload the next ad
      setReloadKey(prevKey => prevKey + 1); // Trigger re-render
    });

    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
  }, []);

  return (
    <View style={styles.container} key={reloadKey}>
      <Text style={styles.text}>This is the Explore Screen.</Text>
      <Button
        title="Show Interstitial"
        onPress={() => {
          if (loaded) {
            interstitial.show();
          } else {
            console.log('Ad not loaded yet');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
