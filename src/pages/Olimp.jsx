import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Olimp() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ea5w2pg",
        "template_22xowv9",
        form.current,
        "user_3dO0i6OPdpXqoxoHSNrwB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="olimp">
      <div className="txtBox">
        <p>
          Felicitări! Ai reușit să îți îndeplinești misiunea și să ajungi la
          Zeus. Mulțumim că ai participat la Scavenger Hunt-ul nostru și
          așteptăm să ne lași o părere în chat.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="nume" placeholder="nume" id="" />
        <input type="text" name="email" placeholder="email" id="" />
        <textarea
          name="mesaj"
          placeholder="mesaj"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Send email</button>
      </form>
    </div>
  );
}

export default Olimp;
