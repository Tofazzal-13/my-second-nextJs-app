import Count from "@/components/Count";
import Header from "@/components/Header";


export default function Home() {
  console.log("next js server");
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl items-center justify-between  bg-white dark:bg-black sm:items-start">
       <Header></Header>
       <Count></Count>
       <h1>Hello</h1>
      </main>
    </div>
  );
}
