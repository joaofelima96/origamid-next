"use client";

import { useState } from "react";

export default function ImcComponent() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState<string>("");

  const handleCalculateImc = () => {
    const alturaEmMetros = altura / 100;
    const calcImc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
    setImc(calcImc);
  };

  return (
    <div>
      <label htmlFor="altura">Altura (cm)</label>
      <input
        type="number"
        name="altura"
        id="altura"
        onChange={(e) => setAltura(Number(e.target.value))}
      />
      <label htmlFor="peso">Peso</label>
      <input
        type="number"
        name="peso"
        id="peso"
        onChange={(e) => setPeso(Number(e.target.value))}
      />

      <button onClick={handleCalculateImc}>Calcular</button>
      <p>IMC: {imc}</p>
    </div>
  );
}
