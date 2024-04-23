import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-auto relative text-[var(--white-100)]">
      <Image className="z-[1]" fill sizes="auto" alt="bg" src={'/img/bgmainDesk.jpg'}/>
    </main>
  );
}
