/* exported defaults */
function defaults(target, source) {
  for (var property in source) {
    if (Object.getOwnPropertyNames(target).length === 0) {
      target[property] = source[property];
    } else if (!target[property] && target[property] !== null) {
      target[property] = source[property];
    }
  }
}
