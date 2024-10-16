export default function Biography({ artist }) {
  return (
    <section className="my-10">
      <h2 className="text-2xl mb-4">{artist === 'wanda' ? "Wanda's Biography" : "Stan's Biography"}</h2>
      <p>
        {artist === 'wanda'
          ? "Wanda's detailed biography goes here."
          : "Stan's detailed biography goes here."
        }
      </p>
    </section>
  );
}