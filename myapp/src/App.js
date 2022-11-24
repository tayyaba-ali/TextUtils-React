import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Textform2 from "./components/Textform2";
import TextForm3 from "./components/TextForm3";

function App() {
  return (
		<>
			<Navbar title='Textutils' titleLink='aboutText' />
      <div className="container mt-3">
        {/* <TextForm heading="Enter the text to analyze"/> */}
        {/* <Textform2 heading="Write your text here"/> */}
        <TextForm3  heading="Enter your text here"/>
      </div>
		</>
	);
}

export default App;
