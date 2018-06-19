declare const _default: "\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  int i;\n  if(my_coord.x == STATE_LENGTH && my_coord.y == 0) {\n    my_vec.b = 0;\n    if(my_vec.a == 0) {\n      ivec4 read_vec;\n      my_vec.b = -1;\n      for(i = 1; i < int(size.y); i++) {\n        read_vec = read_at( ivec2( STATE_LENGTH, i));\n        if(read_vec.a != 0) {\n          my_vec.a = read_vec.a;\n          my_vec.b = i;\n          break;\n        }\n      }\n    }\n  }\n  commit(my_vec);\n}\n";
/**
 * Shaders check_col.
 */
export default _default;
