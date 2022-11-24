import Form from "../components/Form";
import { testForm } from "../config/formConfig";

const Home = () => {
  return (
    <div className="home">
      <h1>Schwuppedi</h1>
      <Form config={testForm} />
    </div>
  );
};

export default Home;
