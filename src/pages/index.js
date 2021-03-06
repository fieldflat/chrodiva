import React from "react"
import _ from "./index.module.css"
import Navbar from "../components/js/Navbar"
import TopMessage from "../components/js/TopMessage"
import MiddleMessage from "../components/js/MiddleMessage"
import JoinMessage from "../components/js/JoinMessage"
import Footer from "../components/js/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <TopMessage />
      <MiddleMessage />
      <JoinMessage />
      <Footer />
    </div>
  )
}
