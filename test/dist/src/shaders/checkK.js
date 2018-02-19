Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shaders check_k.
 */
exports.default = "\nuniform int minWeightMagnitude;\nvoid main() {\n  init();\n  ivec4 my_vec = read();\n  if(my_coord.x == STATE_LENGTH) {\n    my_vec.r = minWeightMagnitude;\n    my_vec.a = check(my_coord.y, minWeightMagnitude);\n  }\n  commit(my_vec);\n}\n";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tLLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NoYWRlcnMvY2hlY2tLLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGtCQUFlLG1QQVdkLENBQUMifQ==