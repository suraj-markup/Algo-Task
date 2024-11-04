import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <>
      <div className="flex flex-row justify-between bg-main h-auto overflow-y-hidden ">
        <div className="w-1/4 hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-full lg:w-3/4 ">
          <Navbar />
          <Dashboard />

        </div>
      </div>
    </>
  );
}

export default App;
