/**
 * Stdlib.
 */
export const stdlib =
`#version 300 es
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
