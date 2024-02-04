const NEWLINES_MATCH = /\r\n|\n|\r/;
const NEWLINE = "\n";
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
const RE_NEWLINES = /\\n/g;
type Empty = { [key: string]: string | number };

export const parseBuffer = (src: string) => {
  let obj: Empty = {};
  src
    .toString()
    .split(NEWLINES_MATCH)
    .forEach((line, idx) => {
      // matching "KEY" and "VAL" in "KEY=VAL"
      const keyValueArr = line.match(RE_INI_KEY_VAL);
      //matched?
      if (keyValueArr != null) {
        const key: string = keyValueArr[1];

        // default undefined or missing values to empty string

        let value = keyValueArr[2] || "";
        const end = value.length - 1;
        const isDoubleQuoted = value[0] === '"' && value[end] === '"';
        const isSingleQuoted = value[0] === "'" && value[end] === "'";

        // if single or double quoted, remove quotes

        if (isSingleQuoted || isDoubleQuoted) {
          value = value.substring(1, end);

          // if double quoted, expand newlines
          if (isDoubleQuoted) {
            value = value.replace(RE_NEWLINES, NEWLINE);
          }
        } else {
          // remove surrounding whitespace

          value = value.trim();
        }
        obj[key] = value;
      }
    });
  return obj;
};

module.exports = { parseBuffer };
