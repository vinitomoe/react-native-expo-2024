import { useStoreRootState } from "expo-router/build/global-state/router-store";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function Payment() {
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([{
        "id": 1,
        "nome": "Bobbe Schurcke"
      }, {
        "id": 2,
        "nome": "Chevalier Hulle"
      }, {
        "id": 3,
        "nome": "Tandy de Clerq"
      }, {
        "id": 4,
        "nome": "Bonny Lebbon"
      }, {
        "id": 5,
        "nome": "Janeczka Bantham"
      }, {
        "id": 6,
        "nome": "Sandy Buesnel"
      }, {
        "id": 7,
        "nome": "Gerrard Kitchiner"
      }, {
        "id": 8,
        "nome": "Wini Grunnell"
      }, {
        "id": 9,
        "nome": "Christel McGall"
      }, {
        "id": 10,
        "nome": "Jacintha Craigie"
      }, {
        "id": 11,
        "nome": "Abe Singers"
      }, {
        "id": 12,
        "nome": "Temple Stronge"
      }, {
        "id": 13,
        "nome": "Nessy Freestone"
      }, {
        "id": 14,
        "nome": "Nickolaus De Bischof"
      }, {
        "id": 15,
        "nome": "Corney Moston"
      }, {
        "id": 16,
        "nome": "Beatrice Backe"
      }, {
        "id": 17,
        "nome": "Ewan Kelleway"
      }, {
        "id": 18,
        "nome": "Evanne Jedrzejczyk"
      }, {
        "id": 19,
        "nome": "Wilburt Rodear"
      }, {
        "id": 20,
        "nome": "Lorrin Davidofski"
      }, {
        "id": 21,
        "nome": "Malissa Yesinin"
      }, {
        "id": 22,
        "nome": "Corey Gowans"
      }, {
        "id": 23,
        "nome": "Lilllie Poltone"
      }, {
        "id": 24,
        "nome": "Opaline Mallabund"
      }, {
        "id": 25,
        "nome": "Gearalt Aps"
      }, {
        "id": 26,
        "nome": "Vale Headrick"
      }, {
        "id": 27,
        "nome": "Delila Ambrosoni"
      }, {
        "id": 28,
        "nome": "Cindee Alexsandrov"
      }, {
        "id": 29,
        "nome": "Maxi Milburne"
      }, {
        "id": 30,
        "nome": "Lia Pockey"
      }, {
        "id": 31,
        "nome": "Munmro Harden"
      }, {
        "id": 32,
        "nome": "Alix Drinkel"
      }, {
        "id": 33,
        "nome": "Annecorinne Voelker"
      }, {
        "id": 34,
        "nome": "Zeb Orys"
      }, {
        "id": 35,
        "nome": "Maddy Erbain"
      }]);
    const [id, setId] = useState(1);
    const [data, setData] = useState(new Date());
    const [viewCalendar, setViewCalendar] = useState(false);
    const [observacao, setObservacao] = useState("");

    const handleCalendar = (event,selectedValue)=>{
      setViewCalendar(false);
      setData(selectedDate);
    }

    return (
        <View style={styles.content} >
          <Text>Inserir Pagamentos </Text>
            <View style={styles.inputView}>
                <Ionicons name="wallet-outline" size={24} color="blue" />
                <TextInput placeholder="Valor" keyboardType="decimal-pad" style={styles.inputValor} value={valor} onChangeText={setValor} />
            </View>
            <View style={[styles.inputView, styles.buttonBorder]}>
                <Picker selectedValue={id} onValueChange={(itemValue, index)=>{
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
                viewCalendar &&  <DateTimePicker value={data} onChange={handleCalendar} mode="date"  testID="datetimepicker" />
              }
              
            </View>
            <View style={[styles.inputView]}>
                <TextInput placeholder="observação" style={styles.inputObservacao} value={observacao} onChangeText={setObservacao} multiline={true} />
            </View>''
            <View style={styles.contentButtons}>
                <Button title="Salvar" color="blue" /> 
                <Button title="Continuar" color="blue" />
                <Button title="Cancelar" onPress={() => ReadableStreamDefaultReader.back()} color="blue" />
            </View>
        </View>
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
