import { Contacts } from './components/Contacts/Contacts'
import Middle from "./components/Middle/Middle";
import Top from "./components/Top/Top";

export default function Home() {
  return (
    <main className="flex-auto w-full minH ">
      <Top/>
      {/* <Middle/> */}
      <Contacts/>
    </main>
  );
}
