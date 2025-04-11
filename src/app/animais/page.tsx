import Image from "next/image";
import styles from "./animais.module.css";

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export default async function AnimaisPage() {
  const response = await fetch("https://api.origamid.online/animais", {
    cache: "no-store",
  });
  const animais = (await response.json()) as Animal[];

  return (
    <main>
      <h1>Animais</h1>
      <Image src="/images/dogs.svg" width={28} height={22} alt="Dogs" />
      <Image
        src="/images/login.jpg"
        width={1200}
        height={1600}
        alt="Dogs"
        sizes="100vw"
      />
      <ul className={styles.animais}>
        {animais.map((animal, i) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              width={2400}
              height={1600}
              alt={animal.nome}
              src={animal.imagem}
              sizes="(max-width: 600px) 100vh, 50vw"
              priority={i < 2}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
