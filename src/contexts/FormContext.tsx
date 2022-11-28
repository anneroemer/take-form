import { createContext, useState, useEffect, ReactNode } from "react";
import { RawNoteData } from "../interfaces/form";

type FormContextType = {
  notes: RawNoteData[] | [];
  setNotes: () => void;
};

export const FormContext = createContext<FormContextType>({
  notes: [],
  setNotes: () => {},
});

const FormProvider = ({ children }: { children: ReactNode }) => {
  const notesLS = JSON.parse(localStorage.getItem("notes") || "");
  const tagsLS = JSON.parse(localStorage.getItem("tags") || "");

  const [notes, setNotes] = useState((notesLS === null ? 0 : notesLS) || null);
  const [tags, setTags] = useState((tagsLS === null ? 0 : tagsLS) || null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [notes, tags]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes") || ""));
    setTags(JSON.parse(localStorage.getItem("tags") || ""));
  }, []);

  const handleFormData = () => {
    if (!notes) {
      setNotes([]);
    }
  };

  return (
    <FormContext.Provider value={{ notes, setNotes: handleFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
