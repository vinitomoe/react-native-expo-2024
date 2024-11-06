import { useStoreRootState } from "expo-router/build/global-state/router-store";
import { useEffect, useRef, useState } from "react";
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'
import { date, z } from "zod";
import { useAuth } from "../../hooks/Auth/index"
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useUsersDatabase } from "../../database/useUserDatabase";

const paymentsSchema = z.object({
  valor: z.number().gt(0),
  user_id: z.number().int().positive(),
  user_cadastro: z.number().int().positive(),
  data_pagamneto: z.date(),
  observacao: z.string(),
});

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");
  const valueRef = useRef();
  const { user } = useAuth();
  const { createPayment } = usePaymentsDatabase();
  const { getAllUsers } = useUsersDatabase();

  const handleCalendar = (event, selectedValue) => {
    setViewCalendar(false);
    setData(selectedDate);
  };

  useEffect(() => {
     (async () => {
      valueRef?.current?.focus();
      try {
        const users = await getAllUsers();
        setSugestoes(users);
        setId(users[0].id);
      } catch (error) {
        console.log(error);
      }
     })();


  
  }, []);

  const handleChangeValor = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        setValor("0,00")
        return;
      }
      let valorPtBR = Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2
      }).format(valorConvertido);
      setValor(valorPtBR);
    } catch (error) {
      setValor("0,00")
    }

  };
  const convertValue = (value) => {
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        return 0

      }
      return valorConvertido
    } catch (error) {
      return valorConvertido
    }
  }

  const handleSubmit = async () => {
    const payment = {
      user_id: id,
      user_cadastro: Number(user.user.id),
      valor_pago: convertValue(valor),
      data_pagamneto: date,
      observacao,
    };

    try {
      const result = await paymentsSchema.parseAsync(payment);
      const { insertedID } = await createPayment(payment);
      console.log(insertedID);
      setValor("0,00");
      setId(sugestoes[0].id);
      setData(new Date());
      setObservacao("");
      valueRef?.current?.focus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}> behavior={Platform.OS === "ios" ? "padding" : "height"}
      <View style={styles.content} >
        <Text>Inserir Pagamentos </Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet-outline" size={24} color="blue" />
          <TextInput placeholder="Valor"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={valor}
            onChangeText={(newValou) => handleChangeValor(newValue)}
            ref={valueRef}
          />

        </View>
        <View style={[styles.inputView, styles.buttonBorder]}>
          <Picker selectedValue={id} onValueChange={(itemValue, index) => {
            setId(itemValue);
          }}
            style={{ width: "100%" }}
          >

            {sugestoes?.map((item) => {
              return (
                <Picker.Item key={item.id} label={item.nome} value={item.id} />
              );
            })}
          </Picker>
        </View>
        <View style={[styles.inputView]}>
          <text onPress={() => setViewCalendar(true)} style={styles.inputData} >{data.toLocaleDateString().split("T")[0]}</text>
          {
            viewCalendar && <DateTimePicker value={data} onChange={handleCalendar} mode="date" testID="datetimepicker" />
          }

        </View>
        <View style={[styles.inputView]}>
          <TextInput placeholder="observação" style={styles.inputObservacao} value={observacao} onChangeText={setObservacao} multiline={true} />
        </View>
        <View style={styles.contentButtons}>
          <Button title="Salvar" color="blue" onPress={handleSubmit} />
          <Button title="Continuar" color="blue" />
          <Button title="Cancelar" onPress={() => ReadableStreamDefaultReader.back()} color="blue" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFA500",
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
    backgroundColor: "white",
    ádding: 10,
  },
  inputValor: {
    flex: 1,
    textAlign: "right",
    padding: 10,
    color: "blue",
  },
  contentButtons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },
  inputText: {
    flex: 1,
    padding: 10,
    color: "blue",
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    fontFamily: "regular",
    fantSize: 20,
    padding: 10,
  },
  inputObservacao: {
    fontFamily: "regular",
    fontSize: 16,
    flex: 1,
    lineHeight: 20,
  },
});
