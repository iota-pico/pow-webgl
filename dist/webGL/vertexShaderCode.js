"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vertex Shader code.
 */
exports.default = `#version 300 es
layout(location = 0) in vec2 position;
layout(location = 1) in vec2 texture;
out vec2 pos;

void main(void) {
  pos = texture;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;
