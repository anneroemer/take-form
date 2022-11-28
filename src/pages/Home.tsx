import Form from "../components/Form";
import Navigation from "../components/Navigation";
import { testForm } from "../config/formConfig";

const Home = () => {
  return (
    <div className="page-wrapper">
      <h1 className="page-headline">Schwuppedi</h1>
      <Form config={testForm} />
      <Navigation />
    </div>
  );
};

export default Home;
