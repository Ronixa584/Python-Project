const Section1 = () => {
  return (
    <div className="h-screen w-auto flex flex-col justify-center items-center border border-black">
      <h1>Section 1</h1>
      <div>Quotes</div>
      <div>Animation</div>
    </div>
  );
};
const Section2 = () => {
  return (
    <div className="h-screen w-auto flex flex-col justify-center items-center border border-black">
      <h1>Section 2</h1>
    </div>
  );
};
const Section3 = () => {
  return (
    <div className="h-screen w-auto flex flex-col justify-center items-center border border-black">
      <h1>Section 3</h1>
    </div>
  );
};
const Section4 = () => {
  return (
    <div className="h-screen w-auto flex flex-col justify-center items-center border border-black">
      <h1>Section 4</h1>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
