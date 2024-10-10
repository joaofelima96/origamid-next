import Atualizar from "@/components/Atualizar/Atualizar";

type Acao = {
  id: number;
  preco_anterior: number;
  preco: number;
  simbolo: string;
  nome: string;
  descricao: string;
  vendas: number;
  atualizada: string;
};

type PageParams = {
  params: {
    acao: string;
  };
};

// revalidate é um valor em segundos que irá fazer o fetch cada vez que esse tempo passar
// cache 'no-store' não irá salvar e retorno desse fetch em cache, ou seja, sempre que recarregar ou entrar na página, a fetch será feito normalmente

// export const revalidate = 5;

export default async function AcaoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.origamid.online/acoes/${params.acao}`,
    {
      // cache: "no-store",
      // next: {
      //   revalidate: 5,
      // },
    }
  );

  const acao: Acao = await response.json();

  return (
    <main>
      <h1>Acoes</h1>

      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>{acao.preco}</p>
      <p>{acao.atualizada}</p>
    </main>
  );
}
