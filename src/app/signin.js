import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleSignIn = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.emailinput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={passwordVisibility}
        />
        <Ionicons
          name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
          size={20}
          color="#1E90FF"
          onPress={togglePasswordVisibility}
        />
      </View>

      <TouchableOpacity style={[styles.button, styles.buttonBorder]} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonBorder]} onPress={() => router.push("/about")}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonBorder]} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.buttonText}>Sair do aplicativo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
    color: '#1E90FF',
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
    fontSize: 20,
    color: '#1E90FF',
  },
  button: {
    width: "80%",
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonBorder: {
    borderColor: '#1E90FF',
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
});
