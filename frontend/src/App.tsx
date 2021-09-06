import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="container">
      <h1 className="text-primary ">Ola Mundo</h1>
    </div>
    <DataTable/>
    <Footer/>
    </>
  );
}

export default App;
