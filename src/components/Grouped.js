import React from "react";

const Grouped = ({ posts }) => {
  let answers = [
    posts.results[0].correct_answer,
    posts.results[0].incorrect_answers[0],
    posts.results[0].incorrect_answers[1],
    posts.results[0].incorrect_answers[2],
  ];
  //   let newArr = [];

  let answerOne = answers[Math.floor(Math.random() * 4)];
  answers = answers.filter((item) => item !== answerOne);

  let answerTwo = answers[Math.floor(Math.random() * 3)];
  answers = answers.filter((item) => item !== answerTwo);

  let answerThree = answers[Math.floor(Math.random() * 2)];
  answers = answers.filter((item) => item !== answerThree);

  let answerFour = answers[0];

  return (
    <div className="grouped fields">
      <label>{posts.results[0].question}</label>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" checked="checked" />
          <label>{answerOne}</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" />
          <label>{answerTwo}</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" />
          <label>{answerThree}</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" />
          <label>{answerFour}</label>
        </div>
      </div>
    </div>
  );
};

export default Grouped;
