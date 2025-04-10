import { View, Text, ScrollView, StyleSheet } from "react-native";

function Home(props) {
  return (
    <View>
      <Text>Home</Text>
      <Text>Welcome to the Home Screen!</Text>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.text}>The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively 
          gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. 
          The running speed starts slowly, but gets faster each minute after you hear this signal. 
          A single lap should be completed each time you hear this sound. Remember to run in a straight line, 
          and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. 
          The test will begin on the word start. On your mark, get ready, start.</Text>
      </ScrollView>
      <Text style={styles.bottom_text}>Bottom Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 50, color: 'black'
  },

  scrollContainer: {
    padding: 100,
  },

  bottom_text: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#542965",
    height: 100,
    width: "100%",
    fontSize: 40,
    textAlign: 'center',
    color: "#f9b41c",
    
  },
});

export default Home;
