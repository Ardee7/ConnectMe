import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/theme';
import { useAtom } from 'jotai';
import { isLoaderVisible } from '../../atoms/Loader';

const LOAD_SPIEL = 'Please wait while we load your experience...';

export const LoaderScreen = ({ message = LOAD_SPIEL }) => {
  const [visible] = useAtom<boolean>(isLoaderVisible);
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={[styles.text, { color: theme.colors.text }]}>
            {message}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for overlay
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderContainer: {
    width: 150,
    padding: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.surface, // Theme-based background
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  text: {
    marginTop: 15,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500'
  }
});
