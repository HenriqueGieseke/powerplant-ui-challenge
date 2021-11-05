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
  let totalPotency = 0;
  const energyValor = 0.95;

  for (let item of energyData) {
    totalPotency += item.potencia_kW;
  }

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
