"use client";

import { getCookie } from "@/actions/get-cookie";
import { setCookie } from "@/actions/set-cookie";
import { useState } from "react";

export default function CookiesPage() {
  const [generatedCookie, setGeneratedCookie] = useState("");
  const [capturedCookie, setTCapturedCookie] = useState("");

  async function handleSetCookie() {
    const inputKey = document.getElementById("key-token") as HTMLInputElement;
    const inputValue = document.getElementById(
      "value-token"
    ) as HTMLInputElement;
    const key = inputKey.value;
    const value = inputValue.value;
    const response = await setCookie(key, value);

    setGeneratedCookie(response.value);
  }

  async function handleGetCookie() {
    const input = document.getElementById("capturar-token") as HTMLInputElement;
    const key = input.value;

    const token = await getCookie(key as string);
    console.log(key);

    if (token.valor) {
      setTCapturedCookie(token.valor);
    } else {
      setTCapturedCookie("Chave Não encontrada");
    }
  }

  return (
    <div>
      <main>
        <h1>Cookies</h1>
        <p>Valor do Cookie gerado: {generatedCookie}</p>
        <input
          type="text"
          id="key-token"
          placeholder="Digite uma chave de token"
        />
        <input
          type="text"
          id="value-token"
          placeholder="Digite um valor para o token acima"
        />
        <button onClick={handleSetCookie}>Gerar cookie</button>

        <p>Valor do Cookie capturado: {capturedCookie}</p>
        <input
          type="text"
          id="capturar-token"
          placeholder="Pesquise por uma chave de cookie"
        />
        <button type="button" onClick={handleGetCookie}>
          Pegar cookie
        </button>
      </main>
    </div>
  );
}
