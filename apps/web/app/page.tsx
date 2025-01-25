"use client";
import TextInput from "@repo/ui/input";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#1e1e1e",
    }}><div style={
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px #000000",
      }
    }>
      <TextInput placeholder="Enter Room" ></TextInput>
      <button onClick={() => {
        router.push("/chat/1");

        }}>Join room</button>
    </div>

      
    </div>
  );
}
