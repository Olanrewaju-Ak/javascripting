const titleCase = (string) => {
  //splitting the string into individual words

  if (string === "") {
    return "";
  }
  let split = string.trim().toLowerCase().split(" ");

  for (let i = 0; i < split.length; i++) {
    //the idea here is to futher create an array for each word and loop through
    split[i] = split[i][0].toUpperCase() + split[i].substring(1);
  }

  return split.join(" ");
};

console.log(titleCase(""));
console.log(titleCase("My name is olanrewaju"));
