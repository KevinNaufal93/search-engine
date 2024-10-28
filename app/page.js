import Image from "next/image";
import SearchBar from "./components/SearchBar"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold py-2 mb-8">Search your favourite topics here!</h1>
          <SearchBar />
        </div>
      </main>
    </div>
  );
}
