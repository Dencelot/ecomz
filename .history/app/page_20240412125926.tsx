import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative text-[var(--white-100)]">
      <Image className="z-[1]" fill sizes="auto" alt="bg" src={'/img/bgmainDesk.jpg'}/>
    </main>
  );
}
