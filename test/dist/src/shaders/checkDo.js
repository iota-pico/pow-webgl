Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_do.
 */
exports.default = `
int check(int row, int min_weight_magnitude) {
  int nonce_probe, i;
  ivec2 r_texel;
  nonce_probe = HIGH_BITS;
  for(i = min_weight_magnitude; i-- > 0; ) {
    r_texel = read_at(ivec2(HASH_LENGTH - 1 - i, row)).ba;
    nonce_probe &= ~(r_texel.s ^ r_texel.t);
    if(nonce_probe == 0) break;
  }
  return nonce_probe;
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tEby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFkZXJzL2NoZWNrRG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsa0JBQWU7Ozs7Ozs7Ozs7OztDQVlkLENBQUMifQ==