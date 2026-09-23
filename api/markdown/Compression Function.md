
A compression function is a fixed-input-length cryptographic primitive that maps two inputs (a chaining value and a message block) to a single shorter output. It is the core building block of iterated hash functions, where it is applied repeatedly under constructions such as Merkle-Damgard to process arbitrary-length messages. Its collision and preimage resistance directly determine the security of the hash function built on top of it.

- ### Content
  - In Merkle-Damgard and sponge-derived designs the compression function is invoked once per message block, with each output feeding the next invocation as the chaining value. Its resistance to collisions and preimages is what propagates to the security guarantees of the overall hash function.

