import $ from "jquery";
import _ from "lodash";

$('body').append('<div id="logo" height="200px" width="200px"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

$('button').on('click', _.debounce(updateCounter, 500)); // ["500"]

let count = 0;
function updateCounter() {
    count += 1;
    $('#count').html(`${count} clicks on the button`);
}