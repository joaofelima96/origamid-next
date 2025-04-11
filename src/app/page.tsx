import Script from "next/script";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home</h1>
        <Script
          strategy="beforeInteractive"
          id="script-teste"
          src="https://api.origamid.online/scripts/idade-legal.min.js"
        ></Script>
      </main>
    </div>
  );
}
