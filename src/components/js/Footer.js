import React from "react"
import footer from "../css/footer.module.css"
import container from "../../common/css/container.module.css"
import Image from "../image.js"

export default function Footer(props) {
  return (
    <footer className={footer.whole}>
      <div className={footer.footer_div}>
        <a href="#" className={footer.footer_a}>作成者概要</a>
        <a href="#" className={footer.footer_a}>作成者概要</a>
        <a href="#" className={footer.footer_a}>作成者概要</a>
      </div>

      <div className={footer.footer_div}>
        <a href="#" className={footer.footer_a}>作成者概要</a>
        <a href="#" className={footer.footer_a}>作成者概要</a>
        <a href="#" className={footer.footer_a}>作成者概要</a>
      </div>

      <div className={footer.footer_div}>
        <a href="#" className={footer.footer_a}>作成者概要</a>
        <a href="#" className={footer.footer_a}>作成者概要</a>
        <a href="#" className={footer.footer_a}>作成者概要</a>
      </div>
    </footer>
  )
}
