Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_do.
 */
exports.default = "\nint check(int row, int min_weight_magnitude) {\n  int nonce_probe, i;\n  ivec2 r_texel;\n  nonce_probe = HIGH_BITS;\n  for(i = min_weight_magnitude; i-- > 0; ) {\n    r_texel = read_at(ivec2(HASH_LENGTH - 1 - i, row)).ba;\n    nonce_probe &= ~(r_texel.s ^ r_texel.t);\n    if(nonce_probe == 0) break;\n  }\n  return nonce_probe;\n}\n";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tEby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFkZXJzL2NoZWNrRG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gsa0JBQWUsaVZBWWQsQ0FBQyJ9