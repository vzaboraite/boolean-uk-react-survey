function Checkboxes({ spendTime, onChange }) {
  return (
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <ul>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="swimming"
              onChange={onChange}
              checked={spendTime.swimming}
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
              onChange={onChange}
              checked={spendTime.bathing}
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
              onChange={onChange}
              checked={spendTime.chatting}
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
              onChange={onChange}
              checked={spendTime.noTime}
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checkboxes;
