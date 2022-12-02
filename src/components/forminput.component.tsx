export type formInput = {
  word: string;
  [x: string]: any;
};

const FormInput = (props: formInput) => {
  const { word, ...otherProps } = props;
  return <div>{word ? <input {...otherProps} /> : null}</div>;
};
export default FormInput;
