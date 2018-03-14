Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_col.
 */
exports.default = `
void main() {
  init();
  ivec4 my_vec = read();
  int i;
  if(my_coord.x == STATE_LENGTH && my_coord.y == 0) {
    my_vec.b = 0;
    if(my_vec.a == 0) {
      ivec4 read_vec;
      my_vec.b = -1;
      for(i = 1; i < int(size.y); i++) {
        read_vec = read_at( ivec2( STATE_LENGTH, i));
        if(read_vec.a != 0) {
          my_vec.a = read_vec.a;
          my_vec.b = i;
          break;
        }
      }
    }
  }
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tDb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hhZGVycy9jaGVja0NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNCZCxDQUFDIn0=