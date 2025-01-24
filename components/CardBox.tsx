import { View, StyleSheet, TouchableOpacity, Text, TouchableOpacityProps} from "react-native"

type CardBoxProps = TouchableOpacityProps & {
  numero:string;
  codigo_seguranca: string;
  limite: number;
  validade: string;
  tipo: 'credito' | 'debito'| 'ambos';
  nome: string;
  legado?: boolean,
}
export function CardsBox({ numero, codigo_seguranca, limite, validade,nome}:CardBoxProps) {
  return (
    <View style={styles.container}>
      <View style={styles.columnLeft}></View>
      <View style={styles.columnRight}>
        <TouchableOpacity style={styles.button}>
          <Text>Processar</Text>
        </TouchableOpacity></View>        
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    flexDirection: 'row'
  },
  columnLeft: {
    
  },
  columnRight: {},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff621e',
    height: 40, 
    width: '100%',
    color: '#fff'
  },
})