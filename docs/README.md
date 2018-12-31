
#  @iota-pico/pow-webgl

## Index

### Enumerations

* [PearlDiverState](enums/pearldiverstate.md)

### Classes

* [PearlDiver](classes/pearldiver.md)
* [ProofOfWorkWebGl](classes/proofofworkwebgl.md)
* [WebGLHelper](classes/webglhelper.md)
* [WebGLWorker](classes/webglworker.md)

### Interfaces

* [IWebGLPlatform](interfaces/iwebglplatform.md)
* [WebGLRenderingContextExt](interfaces/webglrenderingcontextext.md)
* [WebGLVertexArrayObject](interfaces/webglvertexarrayobject.md)

### Type aliases

* [PearlDiverSearchObject](#pearldiversearchobject)
* [PearlDiverSearchStates](#pearldiversearchstates)

### Variables

* [add](#add)
* [checkCol](#checkcol)
* [checkDo](#checkdo)
* [checkK](#checkk)
* [finalize](#finalize)
* [headers](#headers)
* [increment](#increment)
* [init](#init)
* [stdlib](#stdlib)
* [transform](#transform)
* [vertexShaderCode](#vertexshadercode)

---

## Type aliases

<a id="pearldiversearchobject"></a>

###  PearlDiverSearchObject

**Ƭ PearlDiverSearchObject**: *`object`*

*Defined in [pearlDiver/pearlDiverSearchObject.ts:7](https://github.com/iota-pico/pow-webgl/tree/master/src/pearlDiver/pearlDiverSearchObject.ts#L7*

PearlDiverSearchObject to maintain information during search.

#### Type declaration

 minWeightMagnitude: `number`

 states: [PearlDiverSearchStates](#pearldiversearchstates)

 callback : function
▸ **callback**(nonce: *`Trytes`*): `void`

*Defined in [pearlDiver/pearlDiverSearchObject.ts:10](https://github.com/iota-pico/pow-webgl/tree/master/src/pearlDiver/pearlDiverSearchObject.ts#L10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| nonce | `Trytes` |

**Returns:** `void`

___
<a id="pearldiversearchstates"></a>

###  PearlDiverSearchStates

**Ƭ PearlDiverSearchStates**: *`object`*

*Defined in [pearlDiver/pearlDiverSearchStates.ts:5](https://github.com/iota-pico/pow-webgl/tree/master/src/pearlDiver/pearlDiverSearchStates.ts#L5*

PearDiverSearchStates for storing states during search. Converted from [https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js](https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js)

#### Type declaration

 high: `Int32Array`

 low: `Int32Array`

___

## Variables

<a id="add"></a>

### `<Const>` add

**● add**: *"int sum (int a, int b) {int my_sum &#x3D; a + b;return my_sum &#x3D;&#x3D; 2 ? -1 : (my_sum &#x3D;&#x3D; -2) ? 1 : my_sum;}int cons (int a, int b) {return (a &#x3D;&#x3D; 1 &amp;&amp; b &#x3D;&#x3D; 1)? 1 : (a &#x3D;&#x3D; -1 &amp;&amp; b &#x3D;&#x3D; -1) ? -1 : 0;}int any_t (int a, int b) {int my_any &#x3D; a + b;return my_any &#x3D;&#x3D; 0 ? 0 : (my_any &gt; 0) ? 1 : -1;}ivec2 full_adder(int a, int b, int c) {int c_a, c_b, sum_ab, c_s;c_a    &#x3D; cons(a,b);sum_ab &#x3D; sum(a,b);c_b    &#x3D; cons(sum_ab,c);c_s    &#x3D; any_t(c_a, c_b);return ivec2(sum(sum_ab, c), c_s);}ivec2 get_sum_to_index(int from, int to, int number_to_add, int row) {int trit_to_add, trit_at_index, pow, carry, num_carry;ivec2 read_in, sum_out, out_trit;pow &#x3D; 1;carry &#x3D; 0;num_carry &#x3D; 0;for(int i &#x3D; from; i &lt; to; i++) {//if(trit_to_add &#x3D;&#x3D; 0 &amp;&amp; sum_out.t &#x3D;&#x3D; 0) continue;read_in &#x3D; read_at ( ivec2 (i, row)).rg;trit_to_add &#x3D; ((number_to_add / pow) % 3) + num_carry;num_carry &#x3D; trit_to_add &gt; 1 ? 1 : 0;trit_to_add &#x3D; (trit_to_add &#x3D;&#x3D; 2 ? -1 : (trit_to_add &#x3D;&#x3D; 3 ? 0 : trit_to_add));sum_out &#x3D; full_adder((read_in.s &#x3D;&#x3D; LOW_BITS ? 1 : read_in.t &#x3D;&#x3D; LOW_BITS? -1 : 0),trit_to_add,carry);if(my_coord.x &#x3D;&#x3D; i) break;carry &#x3D; sum_out.t;pow *&#x3D;3;}if(sum_out.s &#x3D;&#x3D; 0) {return ivec2(HIGH_BITS);} else if (sum_out.s &#x3D;&#x3D; 1) {return ivec2(LOW_BITS, HIGH_BITS);} else {return ivec2(HIGH_BITS, LOW_BITS);}}"* =  `
int sum (int a, int b) {
  int my_sum = a + b;
  return my_sum == 2 ? -1 : (my_sum == -2) ? 1 : my_sum;
}
int cons (int a, int b) {
  return (a == 1 && b == 1)? 1 : (a == -1 && b == -1) ? -1 : 0;
}
int any_t (int a, int b) {
  int my_any = a + b;
  return my_any == 0 ? 0 : (my_any > 0) ? 1 : -1;
}
ivec2 full_adder(int a, int b, int c) {
  int c_a, c_b, sum_ab, c_s;

  c_a    = cons(a,b);
  sum_ab = sum(a,b);
  c_b    = cons(sum_ab,c);
  c_s    = any_t(c_a, c_b);

  return ivec2(sum(sum_ab, c), c_s);
}
ivec2 get_sum_to_index(int from, int to, int number_to_add, int row) {
  int trit_to_add, trit_at_index, pow, carry, num_carry;
  ivec2 read_in, sum_out, out_trit;
  pow = 1;
  carry = 0;
  num_carry = 0;

  for(int i = from; i < to; i++) {
    //if(trit_to_add == 0 && sum_out.t == 0) continue;

    read_in = read_at ( ivec2 (i, row)).rg;

    trit_to_add = ((number_to_add / pow) % 3) + num_carry;
    num_carry = trit_to_add > 1 ? 1 : 0;
    trit_to_add = (trit_to_add == 2 ? -1 : (trit_to_add == 3 ? 0 : trit_to_add));

    sum_out = full_adder(
      (read_in.s == LOW_BITS ? 1 : read_in.t == LOW_BITS? -1 : 0),
      trit_to_add,
      carry
    );

    if(my_coord.x == i) break;
    carry = sum_out.t;
    pow *=3;
  }
  if(sum_out.s == 0) {
    return ivec2(HIGH_BITS);
  } else if (sum_out.s == 1) {
    return ivec2(LOW_BITS, HIGH_BITS);
  } else {
    return ivec2(HIGH_BITS, LOW_BITS);
  }
}
`

*Defined in [shaders/add.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/add.ts#L4*

Shaders add.

___
<a id="checkcol"></a>

### `<Const>` checkCol

**● checkCol**: *"void main() {init();ivec4 my_vec &#x3D; read();int i;if(my_coord.x &#x3D;&#x3D; STATE_LENGTH &amp;&amp; my_coord.y &#x3D;&#x3D; 0) {my_vec.b &#x3D; 0;if(my_vec.a &#x3D;&#x3D; 0) {ivec4 read_vec;my_vec.b &#x3D; -1;for(i &#x3D; 1; i &lt; int(size.y); i++) {read_vec &#x3D; read_at( ivec2( STATE_LENGTH, i));if(read_vec.a !&#x3D; 0) {my_vec.a &#x3D; read_vec.a;my_vec.b &#x3D; i;break;}}}}commit(my_vec);}"* =  `
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
`

*Defined in [shaders/checkCol.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/checkCol.ts#L4*

Shaders check\_col.

___
<a id="checkdo"></a>

### `<Const>` checkDo

**● checkDo**: *"int check(int row, int min_weight_magnitude) {int nonce_probe, i;ivec2 r_texel;nonce_probe &#x3D; HIGH_BITS;for(i &#x3D; min_weight_magnitude; i-- &gt; 0; ) {r_texel &#x3D; read_at(ivec2(HASH_LENGTH - 1 - i, row)).ba;nonce_probe &amp;&#x3D; ~(r_texel.s ^ r_texel.t);if(nonce_probe &#x3D;&#x3D; 0) break;}return nonce_probe;}"* =  `
int check(int row, int min_weight_magnitude) {
  int nonce_probe, i;
  ivec2 r_texel;
  nonce_probe = HIGH_BITS;
  for(i = min_weight_magnitude; i-- > 0; ) {
    r_texel = read_at(ivec2(HASH_LENGTH - 1 - i, row)).ba;
    nonce_probe &= ~(r_texel.s ^ r_texel.t);
    if(nonce_probe == 0) break;
  }
  return nonce_probe;
}
`

*Defined in [shaders/checkDo.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/checkDo.ts#L4*

Shaders check\_do.

___
<a id="checkk"></a>

### `<Const>` checkK

**● checkK**: *"uniform int minWeightMagnitude;void main() {init();ivec4 my_vec &#x3D; read();if(my_coord.x &#x3D;&#x3D; STATE_LENGTH) {my_vec.r &#x3D; minWeightMagnitude;my_vec.a &#x3D; check(my_coord.y, minWeightMagnitude);}commit(my_vec);}"* =  `
uniform int minWeightMagnitude;
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.x == STATE_LENGTH) {
    my_vec.r = minWeightMagnitude;
    my_vec.a = check(my_coord.y, minWeightMagnitude);
  }
  commit(my_vec);
}
`

*Defined in [shaders/checkK.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/checkK.ts#L4*

Shaders check\_k.

___
<a id="finalize"></a>

### `<Const>` finalize

**● finalize**: *"void main() {init();ivec4 my_vec &#x3D; read();if(my_coord.y &#x3D;&#x3D; 0 &amp;&amp; my_coord.x &#x3D;&#x3D; STATE_LENGTH) {my_vec.g &#x3D; check(my_vec.b, my_vec.r);}if(my_coord.y &#x3D;&#x3D; 0 &amp;&amp; my_coord.x &lt; HASH_LENGTH) {ivec4 info_vec &#x3D; read_at(ivec2(STATE_LENGTH, 0));int nonce_probe &#x3D; info_vec.a;int row &#x3D; info_vec.b;ivec4 hash_vec &#x3D; read_at(ivec2(my_coord.x, row));my_vec.a &#x3D; (hash_vec.r &amp; nonce_probe) &#x3D;&#x3D; 0? 1 : ((hash_vec.g &amp; nonce_probe) &#x3D;&#x3D; 0? -1 : 0);}commit(my_vec);}"* =  `
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
`

*Defined in [shaders/finalize.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/finalize.ts#L4*

Shaders finalize.

___
<a id="headers"></a>

### `<Const>` headers

**● headers**: *"#define HASH_LENGTH 243#define NUMBER_OF_ROUNDS 81#define INCREMENT_START HASH_LENGTH - 64#define STATE_LENGTH 3 * HASH_LENGTH#define HALF_LENGTH 364#define HIGH_BITS 0xFFFFFFFF#define LOW_BITS 0x00000000"* =  `
#define HASH_LENGTH 243
#define NUMBER_OF_ROUNDS 81
#define INCREMENT_START HASH_LENGTH - 64
#define STATE_LENGTH 3 * HASH_LENGTH
#define HALF_LENGTH 364
#define HIGH_BITS 0xFFFFFFFF
#define LOW_BITS 0x00000000
`

*Defined in [shaders/headers.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/headers.ts#L4*

Shaders add.

___
<a id="increment"></a>

### `<Const>` increment

**● increment**: *"void main() {init();ivec4 my_vec &#x3D; read();if(my_coord.x &gt;&#x3D; INCREMENT_START &amp;&amp; my_coord.x &lt; HASH_LENGTH ) {my_vec.rg &#x3D; get_sum_to_index(INCREMENT_START, HASH_LENGTH, 1, my_coord.y);}if(my_coord.x &#x3D;&#x3D; STATE_LENGTH ) {my_vec.rg &#x3D; ivec2(0);}my_vec.ba &#x3D; my_vec.rg;commit(my_vec);}"* =  `
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
`

*Defined in [shaders/increment.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/increment.ts#L4*

Shaders increment.

___
<a id="init"></a>

### `<Const>` init

**● init**: *"uniform int gr_offset;ivec4 offset() {if(my_coord.x &gt;&#x3D; HASH_LENGTH / 3 &amp;&amp; my_coord.x &lt; HASH_LENGTH / 3 * 2 ) {ivec4 my_vec;my_vec.rg &#x3D; get_sum_to_index(HASH_LENGTH / 3, HASH_LENGTH / 3 * 2, my_coord.y + gr_offset, 0);return my_vec;} else {return read_at(ivec2(my_coord.x,0));}}void main() {init();commit(offset());}"* =  `
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
`

*Defined in [shaders/init.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/init.ts#L4*

Shaders init.

___
<a id="stdlib"></a>

### `<Const>` stdlib

**● stdlib**: *"#version 300 esprecision highp float;precision highp int;precision highp isampler2D;uniform isampler2D u_texture;in vec2 pos;out ivec4 color;//out int isFinished;vec2 size;ivec2 my_coord;void init(void) {//size &#x3D; vec2(textureSize(u_texture, 0) - 1);size &#x3D; vec2(textureSize(u_texture, 0));my_coord &#x3D; ivec2(pos * size);}ivec4 read(void) {return texture(u_texture, pos);}ivec4 read_at(ivec2 coord) {return texelFetch(u_texture, coord, 0);}void commit(ivec4 val) {color &#x3D; val;}"* = 
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
`

*Defined in [webGL/stdlib.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/webGL/stdlib.ts#L4*

Stdlib.

___
<a id="transform"></a>

### `<Const>` transform

**● transform**: *"ivec2 twist() {int alpha, beta, gamma, delta;ivec4 v1, v2;int j &#x3D; my_coord.x;v1 &#x3D; read_at(ivec2(j &#x3D;&#x3D; 0? 0:(((j - 1)%2)+1)*HALF_LENGTH - ((j-1)&gt;&gt;1), my_coord.y));v2 &#x3D; read_at(ivec2(((j%2)+1)*HALF_LENGTH - ((j)&gt;&gt;1), my_coord.y));alpha &#x3D; v1.b;beta &#x3D; v1.a;gamma &#x3D; v2.a;delta &#x3D; (alpha | (~gamma)) &amp; (v2.b ^ beta);//v2.b &#x3D;&#x3D;&#x3D; state_low[t2]return ivec2(~delta, (alpha ^ gamma) | delta);}void main() {init();ivec4 my_vec &#x3D; read();if(my_coord.x &lt; STATE_LENGTH)my_vec.ba &#x3D; twist();commit(my_vec);}"* =  `
ivec2 twist() {
  int alpha, beta, gamma, delta;
  ivec4 v1, v2;
  int j = my_coord.x;

  v1 = read_at(ivec2(j == 0? 0:(((j - 1)%2)+1)*HALF_LENGTH - ((j-1)>>1), my_coord.y));
  v2 = read_at(ivec2(((j%2)+1)*HALF_LENGTH - ((j)>>1), my_coord.y));
  alpha = v1.b;
  beta = v1.a;
  gamma = v2.a;
  delta = (alpha | (~gamma)) & (v2.b ^ beta);//v2.b === state_low[t2]

  return ivec2(~delta, (alpha ^ gamma) | delta);
}
void main() {
  init();
  ivec4 my_vec = read();
  if(my_coord.x < STATE_LENGTH)
    my_vec.ba = twist();
  commit(my_vec);
}
`

*Defined in [shaders/transform.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/shaders/transform.ts#L4*

Shaders transform.

___
<a id="vertexshadercode"></a>

### `<Const>` vertexShaderCode

**● vertexShaderCode**: *"#version 300 eslayout(location &#x3D; 0) in vec2 position;layout(location &#x3D; 1) in vec2 texture;out vec2 pos;void main(void) {pos &#x3D; texture;gl_Position &#x3D; vec4(position.xy, 0.0, 1.0);}"* = 
`#version 300 es
layout(location = 0) in vec2 position;
layout(location = 1) in vec2 texture;
out vec2 pos;

void main(void) {
  pos = texture;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`

*Defined in [webGL/vertexShaderCode.ts:4](https://github.com/iota-pico/pow-webgl/tree/master/src/webGL/vertexShaderCode.ts#L4*

Vertex Shader code.

___

