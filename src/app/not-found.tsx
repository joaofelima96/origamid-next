import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      <h1>Página não encontrada</h1>
      <Link href={"/"}>Volte para Home</Link>
    </>
  );
}
