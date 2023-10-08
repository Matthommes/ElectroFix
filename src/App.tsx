import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 px-2 sm:p-8 min-h-screen">
        <Header />
        <Landing />
      </div>
    </>
  );
}

export default App;
