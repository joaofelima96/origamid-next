import ProdutosLista from "@/components/ProdutosLista/ProdutosLista";
import { Suspense } from "react";

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>

      {/* no fallback do suspense também pode ser passado um componente de loading, como um skeleton, por exemplo */}
      <Suspense fallback={"Carregando..."}>
        <ProdutosLista />
      </Suspense>
    </main>
  );
}
