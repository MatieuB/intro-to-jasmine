module.exports = {
  isTallEnough: function (child, ride) {
    return child.height >= ride.minHeight && child.height <= ride.maxHeight;
  }
};
