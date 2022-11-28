export type formInput = {
  word: string;
  [x: string]: any;
};

const FormInput = ({ word, ...otherProps }: formInput) => {
  return <div>{word && <input {...otherProps}></input>}</div>;
};
export default FormInput;
