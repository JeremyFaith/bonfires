function truncate(str, num) {
  if (str.length > num) {
    return str.slice(0,num-3)+"...";
  }
  
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);