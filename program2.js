const decodeTheRing = function (message, pattern) {
  
  // Helper function to recursively match the pattern to the message
  const matchHelper = (msgIdx, patIdx) => {
    // If both message and pattern are fully traversed, it's a match
    if (msgIdx >= message.length && patIdx >= pattern.length) {
      return true;
    }
    // If the pattern is exhausted but the message isn't, no match
    if (patIdx >= pattern.length) {
      return false;
    }

    // If the current pattern character is '*', handle two possibilities:
    // 1. '*' matches zero characters: move to the next pattern character
    // 2. '*' matches one or more characters: move to the next message character but stay on '*'
    if (pattern[patIdx] === '*') {
      return matchHelper(msgIdx, patIdx + 1) || (msgIdx < message.length && matchHelper(msgIdx + 1, patIdx));
    }

    // If the current pattern character is '?', it must match exactly one character in the message
    if (pattern[patIdx] === '?') {
      return msgIdx < message.length && matchHelper(msgIdx + 1, patIdx + 1);
    }

    // For normal characters, they must match exactly
    if (msgIdx < message.length && pattern[patIdx] === message[msgIdx]) {
      return matchHelper(msgIdx + 1, patIdx + 1);
    }

    // If none of the above conditions match, return false
    return false;
  };

  return matchHelper(0, 0);
};

module.exports = decodeTheRing;
