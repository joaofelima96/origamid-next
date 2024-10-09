export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosPage() {
  const response = await fetch("https://api.origamid.online/produtos", {
    // só estava revalidando no método de post, ou seja, quando cadastra um produto a aplicação força o fetch novamente e faz um redirect para /produtos
    // com o revalidate abaixo, caso essa lista seja alterada POR OUTRA AÇÃO, o fetch também será executado (refresh ou acessando a rota)
    next: {
      revalidate: 5,
    },
  });
  const produtos: Produto[] = await response.json();

  return (
    <main>
      <h1>Produtos</h1>

      <ul>
        {produtos.map((produto) => {
          return (
            <li key={produto.id}>
              {produto.nome}: R$ {produto.preco}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
