"use client";

import { setProduct } from "@/actions/set-products";
import { Produto } from "../ProdutosLista/ProdutosLista";

export default function FormProduto() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const data: Produto = {
      nome: event.currentTarget.nome.value,
      preco: Number(event.currentTarget.preco.value),
      descricao: event.currentTarget.descricao.value,
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.checked ? 1 : 0,
    };

    await setProduct(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
      <label htmlFor="preco">Preço</label>
      <input type="number" id="preco" name="preco" />
      <label htmlFor="descricao">Descrição</label>
      <input type="text" id="descricao" name="descricao" />
      <label htmlFor="estoque">Estoque</label>
      <input type="number" id="estoque" name="estoque" />
      <label htmlFor="importado">
        <input type="checkbox" id="importado" name="importado" />
        Importado
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
