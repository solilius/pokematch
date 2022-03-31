export const calcGraphWidth = (stat: number): number => {
  const width = 100 / 255 * stat * 1.1;
  return width > 100 ? 98 : width;
};

export const calcGraphColor = (stat: number): string => {
  if (stat <= 10) return "DarkRed";
  else if (stat > 10 && stat <= 20) return 'crimson';
  else if (stat > 20 && stat <= 30) return "red";
  else if (stat > 30 && stat <= 40) return "DarkOrange";
  else if (stat > 40 && stat <= 50) return "orange";
  else if (stat > 50 && stat <= 60) return "#ffda36";
  else if (stat > 60 && stat <= 70) return "#ffee36";
  else if (stat > 70 && stat <= 80) return "#fafa00";
  else if (stat > 80 && stat <= 90) return "#d1ff19";
  else if (stat > 90 && stat <= 100) return "greenYellow";
  else if (stat > 100 && stat <= 110) return "lawnGreen";
  else if (stat > 110 && stat <= 120) return "#75ff19";
  else if (stat > 120 && stat <= 130) return "#00e80c";
  else if (stat > 130 && stat <= 140) return "#00d989";
  else if (stat > 140 && stat <= 150) return "#08c7a7";
  else if (stat > 150 && stat <= 180) return "#00b093";
  
  return "#02a39b";
};