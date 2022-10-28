import React from "react";
import data from "../data/data.js";

const Grouped = () => {
  let question = data[Math.floor(Math.random() * 101)];
  console.log(
    String(
      question.question
        .replaceAll("&quot;", "")
        .replaceAll("&eacute;", "")
        .replaceAll("&#039;", "")
    )
  );

  let answers = [
    question.correct_answer,
    question.incorrect_answers[0],
    question.incorrect_answers[1],
    question.incorrect_answers[2],
  ];

  let answerOne = answers[Math.floor(Math.random() * 4)];
  answers = answers.filter((item) => item !== answerOne);

  let answerTwo = answers[Math.floor(Math.random() * 3)];
  answers = answers.filter((item) => item !== answerTwo);

  let answerThree = answers[Math.floor(Math.random() * 2)];
  answers = answers.filter((item) => item !== answerThree);

  let answerFour = answers[0];

  const onSubmit = () => {
    let boxes = document.getElementsByClassName("boxes");
    console.log(boxes);
    console.log(boxes[0].parentNode.getElementsByTagName("label")[0].innerHTML);

    for (let box = 0; box < boxes.length; box++) {
      console.log(box);
      if (boxes[box].checked === true) {
        let selection =
          boxes[box].parentNode.getElementsByTagName("label")[0].innerHTML;
        console.log(selection);
        if (selection === question.correct_answer) {
          document.getElementById("correctOrNo").innerHTML = "CORRECT";
        } else {
          document.getElementById("correctOrNo").innerHTML =
            "THAT IS NOT CORRECT";
        }
      }
    }
  };

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className="grouped fields">
      <label>
        {question.question
          .replaceAll("&quot;", "")
          .replaceAll("&eacute;", "")
          .replaceAll("&#039;", "")}
      </label>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" class="boxes" />
          <label>{answerOne.replaceAll("&quot;", "")}</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" class="boxes" />
          <label>{answerTwo.replaceAll("&quot;", "")}</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" class="boxes" />
          <label>{answerThree.replaceAll("&quot;", "")}</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="example2" class="boxes" />
          <label>{answerFour.replaceAll("&quot;", "")}</label>
        </div>
      </div>
      <button className="ui primary button" onClick={onSubmit}>
        Submit
      </button>
      <button className="ui secondary button" onClick={onReload}>
        Next
      </button>
      <p id="correctOrNo"></p>
    </div>
  );
};

export default Grouped;
