
Strict types is a type system and schema language used by the RGB protocol to define data structures with a fully deterministic memory layout and a content-addressable type identity. Each type has a unique hash derived from its definition, so schemas can be referenced and verified without ambiguity. It provides the typed foundation that strict encoding serialises during client-side validation.

- ### Content
  - A strict type definition fixes field names, ordering, and primitive widths, then hashes the definition to produce a stable type identifier that any party can reference. This eliminates schema drift and allows RGB contracts to commit to exact data shapes. Strict types and strict encoding work as a pair: the former defines the structure, the latter serialises it into the single canonical byte form required for reproducible validation.

