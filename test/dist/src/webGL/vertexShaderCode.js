Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vertex Shader code.
 */
exports.vertexShaderCode = `#version 300 es
layout(location = 0) in vec2 position;
layout(location = 1) in vec2 texture;
out vec2 pos;

void main(void) {
  pos = texture;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGV4U2hhZGVyQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWJHTC92ZXJ0ZXhTaGFkZXJDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNVLFFBQUEsZ0JBQWdCLEdBQzdCOzs7Ozs7OztFQVFFLENBQUMifQ==