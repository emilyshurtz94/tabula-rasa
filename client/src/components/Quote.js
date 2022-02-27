import React from "react";
import quotes from "./quotes.json";
import _ from "lodash";

function Quote() {

  const date = new Date();
  const today = String(date.getDate()).padStart(2, "0");
  const isNewDay = localStorage.getItem("date") !== today;

  let quote;


  if (localStorage.getItem("date") && !isNewDay) {
    // if date exists in local storage AND it is not a new day

    quote = localStorage.getItem("quote");

  } else if (!localStorage.getItem("date")) {
      //if date does NOT exist
    
    localStorage.setItem("date", today);
    localStorage.setItem("quote", JSON.stringify(_.sample(quotes)));
    quote = localStorage.getItem("quote");

  } else if (localStorage.getItem("date") && isNewDay) {
      //if date exists in local storage BUT it IS a new day
    localStorage.setItem("date", today);
    localStorage.setItem("quote", JSON.stringify(_.sample(quotes)));
    quote = localStorage.getItem("quote");
  }
  console.log(JSON.parse(quote).q, JSON.parse(quote).a)
  
  return <div>{JSON.parse(quote).q}{JSON.parse(quote).a}</div>;
}

export default Quote;
