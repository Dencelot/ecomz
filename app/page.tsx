import Middle from "./components/Middle/Middle";
import { DemoModal } from './components/DemoModal/DemoModal'
import Top from "./components/Top/Top";
import { Contacts } from './components/Contacts/Contacts'

export default function Home() {
  return (
    <main className="flex-auto w-full minH ">
      <Top/>
      <Middle/>
      {/* <DemoModal isDemo/> */}
      {/* <DemoModal isDemo={false}/> */}
    </main>
  );
}
