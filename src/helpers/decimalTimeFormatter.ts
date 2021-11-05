interface DataObject {
  tempo_h: number | string;
  tensao_V: number;
  corrente_A: number;
  potencia_kW: number;
  temperatura_C: number;
}

export const decimalTimeFormatter = (data: DataObject[]): DataObject[] => {
  const convertDecimalTime = (time: number | string): string => {
    const date = new Date(0, 0);
    date.setSeconds(+time * 60 * 60);
    const timeString = date.toTimeString().slice(0, 5);

    return timeString;
  };

  const array = data.map((item) => {
    const newTime = convertDecimalTime(item.tempo_h);
    return {
      tempo_h: newTime,
      tensao_V: item.tensao_V,
      corrente_A: item.corrente_A,
      potencia_kW: item.potencia_kW,
      temperatura_C: item.temperatura_C,
    };
  });

  return array;
};
