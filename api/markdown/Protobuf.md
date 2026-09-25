Protocol Buffers (Protobuf) is a language-neutral, platform-neutral mechanism for serialising structured data using a compact binary wire format defined by an interface description in a .proto schema. A code generator produces typed accessors in many languages from that schema, enabling efficient, forwards- and backwards-compatible message exchange. It is the default payload format for gRPC and is widely used for high-throughput inter-service communication and storage.

- [[Protobuf]] is a binary [[Data Format]] that implements [[Data Serialization]] from a [[Schema]], enabling efficient [[Message Passing]] and [[Remote Procedure Call]] payloads.

### Overview

- Protobuf defines messages in a .proto schema, then generates typed code in many languages.
- Its compact binary encoding is smaller and faster to parse than text formats like JSON or XML.
- Field numbers and optionality rules give it strong forwards- and backwards-compatibility properties.
- It is the canonical serialisation for gRPC and a common storage and streaming format.

### Mechanisms

- Schema definition: messages, fields, types, and field numbers in .proto files.
- Code generation: language bindings with typed setters, getters, and parsers.
- Wire format: tag-length-value binary encoding keyed by field number.
- Evolution: adding fields preserves compatibility when numbers are stable.
- Tooling: schema registries and validation support governed evolution.

### Applications

- Defining payloads for gRPC service interfaces.
- High-throughput inter-service messaging and event streaming.
- Compact on-disk and over-the-wire storage of structured records.
- Cross-language data exchange in polyglot architectures.

### Provenance

