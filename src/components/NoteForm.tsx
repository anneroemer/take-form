import { FormEvent, useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { FormContext } from "../contexts/FormContext";
//import { FormContext } from "../contexts/FormContext";
import { NoteData, Tag } from "../interfaces/form";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};
// const { formData } = useContext(FormContext);

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  //const { formData, setFormData } = useContext(FormContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
    //setFormData([data, ...formData]);
    console.log({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [selectedTags],
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="note-form">
        <div className="note-form-header">
          <div className="note-form-block">
            <label htmlFor="title" className="note-form-label">
              Title
            </label>
            <input
              ref={titleRef}
              type="text"
              name="title"
              id="title"
              className="note-form-textinput"
            />
          </div>
          <div className="note-form-block">
            <label htmlFor="tags" className="note-form-label">
              Tags
            </label>
            <CreatableReactSelect
              value={selectedTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setSelectedTags(
                  tags.map((tag) => {
                    return { label: tag.label, id: tag.value };
                  })
                );
              }}
              className=""
              isMulti
            />
          </div>
        </div>
        <div>
          <div className="note-form-block">
            <label htmlFor="body" className="note-form-label">
              Body
            </label>
            <textarea
              ref={markdownRef}
              name="body"
              id="body"
              className="note-form-textarea"
            />
          </div>
        </div>
        <div className="note-form-btns">
          <button className="note-form-btn" type="submit">
            Save
          </button>

          <button className="note-form-btn">
            <Link to=".." className="note-form-btn-link">
              Cancel
            </Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
