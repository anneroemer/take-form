export type Note = {
  id: string;
} & NoteData; // "&" here is an intersection type: combines multiple types into one.

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export type RawNote = {
  id: string;
};
export type RawNoteData = {
  title: string;
  markdown: string;
  tagsIds: string[];
};
