const decodeTheRing = function (message, pattern) {
  
 
  const matchHelper = (msgIdx, patIdx) => {
  
    if (msgIdx >= message.length && patIdx >= pattern.length) {
      return true;
    }
    
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
