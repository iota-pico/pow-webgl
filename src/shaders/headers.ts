/**
 * Shaders add.
 */
export const headers = `
#define HASH_LENGTH 243
#define NUMBER_OF_ROUNDS 81
#define INCREMENT_START HASH_LENGTH - 64
#define STATE_LENGTH 3 * HASH_LENGTH
#define HALF_LENGTH 364
#define HIGH_BITS 0xFFFFFFFF
#define LOW_BITS 0x00000000
`;
