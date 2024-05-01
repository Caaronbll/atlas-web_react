import $ from "jquery";
import _ from "lodash";

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

$('button').on('click', _.debounce(updateCounter, 500)); // ["500"]

let count = 0;
function updateCounter() {
    count += 1;
    $('#count').html(`${count} clicks on the button`);
}