/**
 * Shaders transform.
 */
export declare const transform = "\nivec2 twist() {\n  int alpha, beta, gamma, delta;\n  ivec4 v1, v2;\n  int j = my_coord.x;\n\n  v1 = read_at(ivec2(j == 0? 0:(((j - 1)%2)+1)*HALF_LENGTH - ((j-1)>>1), my_coord.y));\n  v2 = read_at(ivec2(((j%2)+1)*HALF_LENGTH - ((j)>>1), my_coord.y));\n  alpha = v1.b;\n  beta = v1.a;\n  gamma = v2.a;\n  delta = (alpha | (~gamma)) & (v2.b ^ beta);//v2.b === state_low[t2]\n\n  return ivec2(~delta, (alpha ^ gamma) | delta);\n}\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  if(my_coord.x < STATE_LENGTH)\n    my_vec.ba = twist();\n  commit(my_vec);\n}\n";
