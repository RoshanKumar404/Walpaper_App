// RewardedAdComponent.js
import { useEffect, useState } from 'react';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-4394707558760404~9878961308';

export function useRewardedAd() {
  const [loaded, setLoaded] = useState(false);

  const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      }
    );

    // Start loading the ad
    rewarded.load();

    // Cleanup event listeners on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  const showAd = () => {
    if (loaded) {
      rewarded.show();
      setLoaded(false); // Reset state so it reloads next time
    } else {
      console.log('Ad not loaded yet');
    }
  };

  return { loaded, showAd };
}
