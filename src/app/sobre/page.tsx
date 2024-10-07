import { Metadata } from "next";

import dynamic from "next/dynamic";

export const Width = dynamic(() => import("@/components/Width/Width"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Sobre",
  description: "Essa é a página sobre",
};

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      <Width />
    </main>
  );
}
