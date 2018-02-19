Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vertex Shader code.
 */
exports.default = "#version 300 es\nlayout(location = 0) in vec2 position;\nlayout(location = 1) in vec2 texture;\nout vec2 pos;\n\nvoid main(void) {\n  pos = texture;\n  gl_Position = vec4(position.xy, 0.0, 1.0);\n}";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGV4U2hhZGVyQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93ZWJHTC92ZXJ0ZXhTaGFkZXJDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUNBLHVNQVFFLENBQUMifQ==