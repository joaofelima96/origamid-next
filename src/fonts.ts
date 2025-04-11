import { Roboto } from "next/font/google";

export const font_body = Roboto({
  weight: ["400", "700"], // peso da fonte
  style: ["normal"], // estilo da fonte, italic/normal
  subsets: ["latin"], // escolhe o subset, diminui o tamanho do arquivo
  variable: "--font-body", // define uma css variable
  display: "swap", // mostra a fonte de backup enquanto a principal carrega
});
