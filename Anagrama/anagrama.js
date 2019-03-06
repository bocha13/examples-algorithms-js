function anagram( str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let objstr = {};
  for (let i = 0; i < str1.length; i++) {
    let letra = str1[i];
    objstr[letra] ? objstr[letra] += 1 : objstr[letra] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let letra = str2[i];
    if(!objstr[letra]) {
      return false;
    }
    else {
      objstr[letra] -= 1;
    }
  }
  return true;
}

console.log(anagram("iceman", "manice"));