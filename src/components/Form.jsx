import { useState } from "react";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

function Form() {
  // state
  const [color, setColor] = useState("");

  /* state for spendTime as an array */
  // const [spendTime, setSpendTime] = useState([]);

  /* state for spendTime as an object */
  const [spendTime, setSpendTime] = useState({
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  });
  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState([]);

  console.log("State: ", {
    color,
    spendTime,
    review,
    username,
    email,
    answers,
  });

  /* HANDLER FUNCTIONS */
  /*   radio input handler */

  const handleRadioInput = (event) => {
    console.log("inside handleRadioInput: ", event.target.value);
    setColor(event.target.value);
  };

  /*  checkbox input handler */

  /* checkbox input handler for storing state in an array */

  // const handleSpendTimeInput = (event) => {
  //   console.log(
  //     "Inside handleSpendTimeInput: ",
  //     event.target.value,
  //     event.target.checked
  //   );

  //   if (event.target.checked) {
  //     setSpendTime([...spendTime, event.target.value]);
  //   } else {
  //     const filteredSpendTime = spendTime.filter(
  //       (time) => event.target.value !== time
  //     );
  //     setSpendTime(filteredSpendTime);
  //   }
  // };

  /* checkbox input handler for storing state in an object */

  const handleSpendTimeInput = (event) => {
    console.log(
      "Inside handleSpendTimeInput: ",
      event.target.value,
      event.target.checked
    );
    const updatedSpendTime = {
      ...spendTime,
      [event.target.value]: event.target.checked,
    };

    setSpendTime(updatedSpendTime);
  };

  /* text input handlers */
  const handleTexareaInput = (event) => {
    console.log("Inside handleTexareaInput: ", event.target.value);
    setReview(event.target.value);
  };

  const handleUsernameInput = (event) => {
    console.log("Inside handleUsernameInput: ", event.target.value);
    setUsername(event.target.value);
  };

  const handleEmailInput = (event) => {
    console.log("Inside handleEmailInput: ", event.target.value);
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("inside handleFormSubmit: ", event);
    console.log("Submitted");

    setAnswers([...answers, { color, spendTime, review, username, email }]);
  };

  /* Component */
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <RadioButtons color={color} onChange={handleRadioInput} />
      <Checkboxes spendTime={spendTime} onChange={handleSpendTimeInput} />
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          // value={review}
          onChange={handleTexareaInput}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameInput}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInput}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
