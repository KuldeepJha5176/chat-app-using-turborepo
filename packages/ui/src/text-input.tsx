interface TextInputProps {
  placeholder: string;
}
export default function TextInput({
    placeholder,
} : TextInputProps) {
  return (
    <div>
      <input type="text" placeholder={placeholder} style={{
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px #000000",
        margin: "10px",
        borderColor: "black",
      }}></input>
    </div>
  );
}