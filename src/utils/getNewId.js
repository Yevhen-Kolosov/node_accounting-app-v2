'use strict';

const getNewId = (arr) => {
  const newId = Math.max(0, ...arr.map(item => item.id)) + 1;

  return newId;
};

module.exports = { getNewId };