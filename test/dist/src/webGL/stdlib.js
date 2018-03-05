Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stdlib.
 */
exports.default = `#version 300 es
precision highp float;
precision highp int;
precision highp isampler2D;
uniform isampler2D u_texture;
in vec2 pos;
out ivec4 color;
//out int isFinished;

vec2 size;
ivec2 my_coord;

void init(void) {
  //size = vec2(textureSize(u_texture, 0) - 1);
  size = vec2(textureSize(u_texture, 0));
  my_coord = ivec2(pos * size);
}

ivec4 read(void) {
  return texture(u_texture, pos);
}

ivec4 read_at(ivec2 coord) {
  return texelFetch(u_texture, coord, 0);
}

void commit(ivec4 val) {
  color = val;
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RkbGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3dlYkdML3N0ZGxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxrQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2QkMsQ0FBQyJ9