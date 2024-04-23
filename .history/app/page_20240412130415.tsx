import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-auto w-full relative text-[var(--white-100)]">
      <Image quality={100} className="z-[1] ob" fill sizes="auto" alt="bg" src={'/img/bgmainDesk.png'}/>
    </main>
  );
}
