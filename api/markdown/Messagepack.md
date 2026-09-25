MessagePack is a binary data serialisation format that encodes structured data compactly while preserving a data model compatible with JSON, allowing maps, arrays, strings, integers, and floats to be transmitted in far fewer bytes than their textual equivalents. It uses a type-prefixed encoding that minimises overhead, making it well-suited to high-throughput messaging, caching, and inter-service communication. MessagePack trades human readability for speed and compactness, sitting between verbose JSON and schema-bound formats like Protocol Buffers.

### Overview

- MessagePack was created to make JSON-shaped data dramatically smaller and faster to parse for systems that exchange large volumes of messages. It keeps the same flexible, schema-free data model so existing JSON structures map directly onto its binary form.
- Each value is prefixed by a type byte that may also encode a small immediate value or length, so short strings and small integers occupy as little as one byte. This yields substantial bandwidth and CPU savings in messaging, caching, and RPC paths.

### Key aspects

- A type-prefix scheme distinguishes integers, strings, arrays, maps, and extensions compactly.
- Schema-free encoding preserves JSON compatibility without an external definition file.
- Extension types allow application-specific binary payloads to be tagged.
- Streaming-friendly framing supports incremental encode and decode.

### Applications

- High-throughput [[Message Queue]] and pub/sub systems reducing payload size.
- In-memory caches and key-value stores serialising structured values.
- Inter-service RPC where JSON overhead is prohibitive.
- Constrained [[Internet of Things]] and [[Embedded Systems]] communication.

### Provenance

