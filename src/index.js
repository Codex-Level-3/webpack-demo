document.getElementById("content").innerText = "Hello, World!";

import _ from "lodash";
const newText = _.camelCase("hello world");
document.getElementById("content").innerText = newText;
