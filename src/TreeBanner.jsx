import treeBanner from './assets/tree-photo.jpeg';

function TreeBanner () {
    return (
    <section className="relative w-full h-96">
      <br/ >
      <br/ >
      <br/ >
      <img
        src={treeBanner}
        className="absolute w-full h-full object-cover brightness-75 p-0 -ml-4 -mt-20"
      />

      <div className="relative z-10 flex items-center justify-center h-full -mt-20">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center">
          Sameer Sahai
        </h1>
      </div>
    </section>
  );
}

export default TreeBanner;