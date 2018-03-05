Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders finalize.
 */
exports.default = `
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.y == 0 && my_coord.x == STATE_LENGTH) {
    my_vec.g = check(my_vec.b, my_vec.r);
  }
  if(my_coord.y == 0 && my_coord.x < HASH_LENGTH) {
    ivec4 info_vec = read_at(ivec2(STATE_LENGTH, 0));
    int nonce_probe = info_vec.a;
    int row = info_vec.b;
    ivec4 hash_vec = read_at(ivec2(my_coord.x, row));
    my_vec.a = (hash_vec.r & nonce_probe) == 0? 1 : ((hash_vec.g & nonce_probe) == 0? -1 : 0);
  }
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluYWxpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhZGVycy9maW5hbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7OztDQWdCZCxDQUFDIn0=