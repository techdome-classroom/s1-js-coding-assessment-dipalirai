const decodeTheRing = function (message, pattern) {

  / Helper function to recursively match the pattern to the message
  const matchHelper = (msgIdx, patIdx) => {
    // If both message and pattern are fully traversed, it's a match
    if (msgIdx >= message.length && patIdx >= pattern.length) {
      return true;
    }
    // If the pattern is exhausted but the message isn't, no match
    if (patIdx >= pattern.length) {
      return false;
    }

    
    if (pattern[patIdx] === '*') {
      return matchHelper(msgIdx, patIdx + 1) || (msgIdx < message.length && matchHelper(msgIdx + 1, patIdx));
    }

   
    if (pattern[patIdx] === '?') {
      return msgIdx < message.length && matchHelper(msgIdx + 1, patIdx + 1);
    }

    if (msgIdx < message.length && pattern[patIdx] === message[msgIdx]) {
      return matchHelper(msgIdx + 1, patIdx + 1);
    }

    
    return false;
  };

  return matchHelper(0, 0);
};

module.exports = decodeTheRing;
