"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_k.
 */
exports.default = `
uniform int minWeightMagnitude;
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.x == STATE_LENGTH) {
    my_vec.r = minWeightMagnitude;
    my_vec.a = check(my_coord.y, minWeightMagnitude);
  }
  commit(my_vec);
}
`;
