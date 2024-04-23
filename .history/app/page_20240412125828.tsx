import Image from "next/image";

export default function Home() {
  return (
    <main className="relative text-[var(--white-100)]">
      <Image  fill sizes="auto" alt="bg" src={'/img/bgmainDesk.jpg'}/>
    </main>
  );
}
