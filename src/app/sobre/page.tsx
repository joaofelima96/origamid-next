import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Essa é a página sobre",
};

export default function sobrePage() {
  return (
    <div>
      <h2>Sobre</h2>
    </div>
  );
}
