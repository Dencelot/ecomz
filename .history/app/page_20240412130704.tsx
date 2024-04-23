import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-auto w-full relative text-[var(--white-100)]">
      <div>
        
      </div>
      <Image quality={100} className="z-[1]" fill sizes="auto" alt="bg" src={'/img/bgmainDesk.png'}/>
    </main>
  );
}
