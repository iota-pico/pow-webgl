Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_col.
 */
exports.default = "\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  int i;\n  if(my_coord.x == STATE_LENGTH && my_coord.y == 0) {\n    my_vec.b = 0;\n    if(my_vec.a == 0) {\n      ivec4 read_vec;\n      my_vec.b = -1;\n      for(i = 1; i < int(size.y); i++) {\n        read_vec = read_at( ivec2( STATE_LENGTH, i));\n        if(read_vec.a != 0) {\n          my_vec.a = read_vec.a;\n          my_vec.b = i;\n          break;\n        }\n      }\n    }\n  }\n  commit(my_vec);\n}\n";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tDb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhZGVycy9jaGVja0NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxrQkFBZSxxZEFzQmQsQ0FBQyJ9