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
        <Ionicons name="mail-open-outline" size={20} color="#4CAF50" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#B0BEC5"
        />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#4CAF50" />
        <TextInput
          style={styles.emailinput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={passwordVisibility}
          placeholderTextColor="#B0BEC5"
        />
        <Ionicons
          name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
          size={20}
          color="#4CAF50"
          onPress={togglePasswordVisibility}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/about")}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.buttonText}>Sair do aplicativo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: 22,
    color: '#2E7D32',
    marginBottom: 30,
  },
  inputbox: {
    flexDirection: "row",
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    alignItems: "center",
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  emailinput: {
    flex: 1,
    fontFamily: "sans-serif-light",
    fontSize: 16,
    color: '#2E7D32',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: "sans-serif-medium",
  },
});
