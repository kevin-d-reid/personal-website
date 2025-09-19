const yearStart = <Number>2025;
const yearCurrent = <Number>new Date().getFullYear();
const copyrightString = <String>"Copyright \xA9  Kevin D Reid. All Rights Reserved.";
export function copyright() {
  if (yearStart > yearCurrent) {
    throw new RangeError("\ncopyright.ts: start year cannot be greater than current year.");
  } else if (yearStart === yearCurrent) {
    return copyrightString.replace(/(.{12})/, `$1${yearCurrent}`);
  } else {
    return copyrightString.replace(/(.{12})/, `$1${yearStart+"-"+yearCurrent}`);
  }
}