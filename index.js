const langData = require('./langData');

const nameToCodeMap = {};
for (const [code, name] of Object.entries(langData)) {
  nameToCodeMap[name.toLowerCase()] = code;
}

function getCodeByName(name) {
  return nameToCodeMap[name.toLowerCase()] || null;
}

function getNameByCode(code) {
  return langData[code.toLowerCase()] || null;
}

module.exports = {
  getCodeByName,
  getNameByCode,
  allLanguages: langData,
};
