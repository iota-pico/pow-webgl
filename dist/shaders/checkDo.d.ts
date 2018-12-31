/**
 * Shaders check_do.
 */
export declare const checkDo = "\nint check(int row, int min_weight_magnitude) {\n  int nonce_probe, i;\n  ivec2 r_texel;\n  nonce_probe = HIGH_BITS;\n  for(i = min_weight_magnitude; i-- > 0; ) {\n    r_texel = read_at(ivec2(HASH_LENGTH - 1 - i, row)).ba;\n    nonce_probe &= ~(r_texel.s ^ r_texel.t);\n    if(nonce_probe == 0) break;\n  }\n  return nonce_probe;\n}\n";
