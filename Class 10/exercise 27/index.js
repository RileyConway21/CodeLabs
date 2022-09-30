function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  document.write(reverseString("!edoc eht ta kool ?em evileb tnod ,sdrawkcab si siht"));


   