Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders init.
 */
exports.init = `
uniform int gr_offset;
ivec4 offset() {
  if(my_coord.x >= HASH_LENGTH / 3 && my_coord.x < HASH_LENGTH / 3 * 2 ) {
    ivec4 my_vec;
    my_vec.rg = get_sum_to_index(HASH_LENGTH / 3, HASH_LENGTH / 3 * 2, my_coord.y + gr_offset, 0);
    return my_vec;
  } else {
    return read_at(ivec2(my_coord.x,0));
  }
}
void main() {
  init();
  commit(offset());
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFkZXJzL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztDQWVuQixDQUFDIn0=