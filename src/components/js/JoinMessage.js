import React from "react"
import join_message from "../css/join_message.module.css"
import top_message from "../css/top_message.module.css"
import container from "../../common/css/container.module.css"
import Image from "../image.js"

export default function JoinMessage(props) {
  return (
    <div className={container.container}>
      <h2 className={join_message.join}>さあ、Chrodivaをはじめよう！</h2>

      <div id={top_message.get_started}>
        <button id={top_message.get_started_button}>無料で始める！</button>
        <p></p>
        <span id={top_message.login_message}>
          ユーザ登録がお済みの方は<a href="#">こちら</a>へ
        </span>
      </div>
    </div>
  )
}
