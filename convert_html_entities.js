function convert(str) {
  str = str.replace("&", '&amp;');
  str = str.replace("<", '&gt');
  str = str.replace(">", '&gt');
  str = str.replace("'", '&apos');
  str = str.replace('"', '&quot');
   
  return str;
}

convert('Dolce & Gabbana');