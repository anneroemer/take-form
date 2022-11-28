import Navigation from "../components/Navigation";
import NoteForm from "../components/NoteForm";

const Test = () => {
  return (
    <div className="page-wrapper">
      <h1 className="page-headline">Schwappedi</h1>
      <h2>New note</h2>
      <NoteForm onSubmit={() => {}} />
      <Navigation />
    </div>
  );
};
export default Test;
