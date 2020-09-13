import React from "react"
import _ from "./index.module.css"
import Navbar from "../components/js/Navbar"
import TopMessage from "../components/js/TopMessage"

export default function Home() {
  return (
    <div>
      <Navbar />
      <TopMessage />
    </div>
  )
}
