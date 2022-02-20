import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      
      <View style={styles.container2}>
      <Text style={styles.text}>110919002藍中崑</Text>
      </View>
      <View style={styles.container2}>
      <Text style={styles.text}>Hellow RN</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(20,150,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    height: 200,
    margin: 20,
    backgroundColor: 'rgb(0,255,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    flexWrap: 'wrap',
    width: 130,
    textAlign: 'center',
  },
});
