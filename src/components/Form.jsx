import { useState } from "react";
// TODO: create submitHandler()

function Form() {
  // state
  const [color, setColor] = useState(null);
  const [spendTime, setSpendTime] = useState([]);
  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  console.log("State: ", {
    color,
    spendTime,
    review,
    username,
    email,
  });

  /* HANDLER FUNCTIONS */
  //   radio input handler

  const handleRadioInput = (event) => {
    console.log("inside handleRadioInput: ", event.target.value);
    setColor(event.target.value);
  };

  //   checkbox input handler

  const handleSpendTimeInput = (event) => {
    console.log(
      "Inside handleSpendTimeInput: ",
      event.target.value,
      event.target.checked
    );

    if (event.target.checked) {
      setSpendTime([...spendTime, event.target.value]);
    } else {
      const filteredSpendTime = spendTime.filter(
        (time) => event.target.value !== time
      );
      setSpendTime(filteredSpendTime);
    }
  };

  //   text input handlers
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

  // Component
  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input
              id="color-one"
              type="radio"
              name="color"
              value="1"
              onChange={handleRadioInput}
            />
            <label htmlFor="color-one">1</label>
          </li>
          <li>
            <input
              id="color-two"
              type="radio"
              name="color"
              value="2"
              onChange={handleRadioInput}
            />
            <label htmlFor="color-two">2</label>
          </li>
          <li>
            <input
              id="color-three"
              type="radio"
              name="color"
              value="3"
              onChange={handleRadioInput}
            />
            <label htmlFor="color-three">3</label>
          </li>
          <li>
            <input
              id="color-four"
              type="radio"
              name="color"
              value="4"
              onChange={handleRadioInput}
            />
            <label htmlFor="color-four">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="swimming"
                // checked={spendTime.includes("swimming")}
                onChange={handleSpendTimeInput}
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="bathing"
                onChange={handleSpendTimeInput}
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="chatting"
                onChange={handleSpendTimeInput}
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="noTime"
                onChange={handleSpendTimeInput}
              />
              I don't like to spend time with it
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={review}
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
