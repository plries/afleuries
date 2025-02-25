import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-tan-10 w-screen h-screen flex flex-col items-center justify-center">
      <Image
        src="/afleuries-logo.svg"
        width={300}
        height={0}
        alt="Logo"
      />
      <h1 className="text-4xl font-instrument font-bold mt-4">
        Live Portraits
      </h1>
      <h2>
        by @afleuries
      </h2>
    </div>
  );
}
