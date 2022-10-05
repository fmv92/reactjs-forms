import usePracticeInput from "../hooks/usePracticeInput";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = usePracticeInput((value) => value.trim() !== "");

  const {
    value: enteredLastNameValue,
    hasError: lastNameHaserror,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = usePracticeInput((lastName) => lastName.trim() !== "");

  const {
    value: enteredEmailValue,
    hasError: emailHaserror,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = usePracticeInput((value) =>
    value
      .trim()
      .match(/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)
  );

  let formIsValid = false;

  if (enteredNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetLastName();
    resetEmailInput();
  };

  const inputClasses = (isInvalidClass) => {
    return isInvalidClass ? "form-control invalid" : "form-control";
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={inputClasses(nameInputHasError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className="error-text">Invalid name</p>}
        </div>
        <div className={inputClasses(lastNameHaserror)}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastNameValue}
          />
          {lastNameHaserror && <p className="error-text">Invalid last name</p>}
        </div>
      </div>
      <div className={inputClasses(emailHaserror)}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailValue}
        />
        {emailHaserror && <p className="error-text">Invalid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
