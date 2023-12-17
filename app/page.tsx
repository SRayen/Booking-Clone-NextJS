import Image from "next/image";
import { trending_data } from "@/data/trending";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="bg-[#013B94] scrollbar ">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>

      <section className="m-4 lt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="mt-5">
          <h3 className="text-xl font-bold">Trending Destination</h3>
          <p className="font-light">
            Most popular choices for travellers from arround the world
          </p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll ">
          {trending_data.map((item) => (
            <div
              key={item.id}
              className="space-y-1 shrink-0 cursor-pointer scroll-smooth focus:scroll-auto"
            >
              <Image
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pv-2"
                src={item.src}
                height={500}
                width={500}
                alt={item.description}
              />
              <p className="font-bold">{item.title}</p>
              <h1>{item.location}</h1>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
