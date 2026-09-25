Serialisation is the process of converting in-memory data structures or object graphs into a linear byte sequence or text representation that can be stored, transmitted, and later reconstructed. The inverse operation, deserialisation, rebuilds the original structure from the encoded form. Serialisation underpins persistence, inter-process and network communication, and the interoperability of systems that exchange structured data.

### Overview

- Serialisation formats trade off human-readability, compactness, speed, and schema evolution.
- Text formats such as [[JSON]] and [[XML]] are self-describing and widely interoperable but verbose; binary formats such as [[Protocol Buffers]] are compact and fast but require a schema to interpret.
- Schema-driven serialisation enables forward and backward compatibility as message definitions evolve.
- Careful handling of types, references, and cycles is required to faithfully round-trip complex object graphs.

### Mechanisms

- Encoding: walking a data structure and emitting fields in a defined wire order and representation.
- Schema: an optional contract describing field names, types, and identifiers for compact binary encodings.
- Versioning: rules for adding, removing, or renaming fields without breaking existing readers.
- Security: validating untrusted input during deserialisation to avoid injection and resource-exhaustion attacks.

### Applications

- Persisting application state to disk or databases.
- Encoding messages for [[Remote Procedure Call]] and event streams.
- Exposing structured data through an [[API]] for cross-system [[Interoperability]].

### Provenance

