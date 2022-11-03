import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Container from "../components/Container/Container";
import Menu from "../components/Menu/Menu";

export default function Home() {
  const [Navigate, setNavigate] = useState("about");

  const updateNavigate = (prop) => {
    setNavigate(prop);
  };
  return (
    <div className="container mx-auto dark:text-white">
      {/* https://i.ibb.co/ZKgw6F1/300005468-3273608989562034-817290961671024273-n.jpg */}
      <Menu updateNavigate={updateNavigate} />
      <Container navigate={Navigate} />
    </div>
  );
}
