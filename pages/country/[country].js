const Country = ({ countryName }) => {
  return (
    <div>
      <h2>You show the details of {countryName[0].name?.common}</h2>
    </div>
  );
};

export default Country;

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.country}`
  );
  const data = await res.json();

  return {
    props: {
      countryName: data,
    },
  };
}

export async function getStaticPaths() {
  // Fetch data from external API
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();

  const paths = data.slice(0, 10).map((country) => {
    return {
      params: {
        country: `${country?.name}`,
      },
    };
  });

  // Pass data to the page via props
  return { paths, fallback: false };
}
