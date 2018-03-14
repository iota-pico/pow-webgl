Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders increment.
 */
exports.default = `
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.x >= INCREMENT_START && my_coord.x < HASH_LENGTH ) {
    my_vec.rg = get_sum_to_index(INCREMENT_START, HASH_LENGTH, 1, my_coord.y);
  }
  if(my_coord.x == STATE_LENGTH ) {
    my_vec.rg = ivec2(0);
  }
  my_vec.ba = my_vec.rg;
  commit(my_vec);
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jcmVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NoYWRlcnMvaW5jcmVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUFlOzs7Ozs7Ozs7Ozs7O0NBYWQsQ0FBQyJ9