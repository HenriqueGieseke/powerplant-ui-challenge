import React, { useState } from 'react';
import Chart from '../../components/Chart';
import { InputContainer, Main } from './styles';

const PowerPlant: React.FC = () => {
  const [chartValue, setChartValue] = useState({
    chartValue: 'tensao_V',
    lineName: 'Tensão em Volts',
  });

  return (
    <Main>
      <InputContainer>
        <label htmlFor="tensao">
          <input
            id="tensao"
            type="radio"
            name="chartValue"
            defaultChecked
            onClick={() => {
              setChartValue({
                chartValue: 'tensao_V',
                lineName: 'Tensão em Volts',
              });
            }}
          />
          Tensão
        </label>
        <label htmlFor="corrente">
          <input
            id="corrente"
            type="radio"
            name="chartValue"
            onClick={() => {
              setChartValue({
                chartValue: 'corrente_A',
                lineName: 'Corrente em Amperes',
              });
            }}
          />
          Corrente
        </label>
        <label htmlFor="potencia">
          <input
            id="potencia"
            type="radio"
            name="chartValue"
            onClick={() => {
              setChartValue({
                chartValue: 'potencia_kW',
                lineName: 'Potência em Kilowatts',
              });
            }}
          />
          Potência
        </label>
        <label htmlFor="temperatura">
          <input
            id="temperatura"
            type="radio"
            name="chartValue"
            onClick={() => {
              setChartValue({
                chartValue: 'temperatura_C',
                lineName: 'Temperatura em Celsius',
              });
            }}
          />
          Temperatura
        </label>
      </InputContainer>
      <Chart chartData={chartValue} />
    </Main>
  );
};

export default PowerPlant;
