// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let saveBtn = $(".btn");
  saveBtn.on("click", function (event) {
    event.preventDefault();
    let inputID = $(this).parent().attr("id");
    let inputEvents = $(this).siblings(".description").val().trim();
    localStorage.setItem(inputID, inputEvents);
  });
  const timeBlock = $(".time-block");
  timeBlock.each(function () {
    let currentHour = "hour-" + dayjs().format("HH");
    let blockTime = $(this).attr("id");
    if (blockTime < currentHour) {
      $(this).addClass("past");
    } else if (blockTime == currentHour) {
      $(this).addClass("present");
    } else if (blockTime > currentHour) {
      $(this).addClass("future");
    }
  });
  timeBlock.each(function () {
    let timeBlockId = $(this).attr("id");
    console.log(timeBlockId);
    let savedEvents = localStorage.getItem(timeBlockId);
    let input = $(this).children(".description");
    if (savedEvents !== null) {
      input.text(savedEvents);
    }
  });
  const today = dayjs();
  const dateDisplay = $("#currentDay");
  dateDisplay.text(today.format("dddd, MMMM D, YYYY"));
});
