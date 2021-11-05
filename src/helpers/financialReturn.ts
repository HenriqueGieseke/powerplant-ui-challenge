interface EnergyData {
  tempo_h: number;
  potencia_kW: number;
  tensao_V?: number;
  corrente_A?: number;
  temperatura_C?: number;
}

interface CalculatedData {
  potencyByHour: number;
  totalRevenue: number;
}

export const financialReturn = (energyData: EnergyData[]): CalculatedData => {
  const energyValor = 0.95;
  const totalPotency = energyData
    .map((energyDataItem) => energyDataItem.potencia_kW)
    .reduce((sum, val) => sum + val, 0);

  const roundPotency = Number(totalPotency.toFixed(2));

  const deltaTime = Number(
    (energyData[1].tempo_h - energyData[0].tempo_h).toFixed(2)
  );

  const potencyByHour = Number((deltaTime * roundPotency).toFixed(2));

  const totalRevenue = Number((potencyByHour * energyValor).toFixed(2));

  return {
    potencyByHour,
    totalRevenue,
  };
};
