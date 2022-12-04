import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner/Banner";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  console.log(countries);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-3 gap-5">
        {countries.slice(0, 10).map((country) => (
          <div key={country.id} className="card border bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={country.flag} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{country.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <Link href={`/country/${country.name}`}>
                  <button className="btn btn-primary">Show Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();

  return {
    props: {
      countries: data,
    },
  };
}
