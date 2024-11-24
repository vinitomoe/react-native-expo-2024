import { router } from 'expo-router';
import { Button, Text, View, Image, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/159555567?v=4' }} 
        style={styles.image} 
      />
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        Meu nome é Vinicius Tomoe Tangi Popovits, tenho 16 anos, sou do 2° Info e desenvolvi este aplicativo.
      </Text>
      <Text style={styles.title}>Tema do Aplicativo</Text>
      <Text style={styles.text}>
        Este aplicativo é uma plataforma dedicada ao aluguel de máquinas pesadas. Com uma interface simples e intuitiva, ele conecta usuários a fornecedores de equipamentos, facilitando a locação para obras e projetos variados. O objetivo é oferecer uma experiência eficiente e segura para quem precisa de máquinas de qualidade sem complicações.
      </Text>
      <Button title="Voltar"  onPress={() => { router.replace("signin") }}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E0F2F1",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10, 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00796B",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#00796B",
    fontFamily: "monospace",
  },
});
