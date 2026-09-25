The process of reconstructing in-memory data structures or objects from a serialised byte stream or textual encoding such as JSON, XML, or Protocol Buffers, reversing serialisation so that transmitted or persisted state can be used by a running program. Deserialisation must validate structure, types, and bounds of untrusted input, since naive object reconstruction is a well-known source of remote-code-execution vulnerabilities.

### Semantic Classification

### Content

## Definition

**Deserialisation** is the inverse operation of [[Serialisation]]: given a flat sequence of bytes or characters produced by an encoder, it reconstructs the live data structures — objects, records, graphs of references — that the original program held in memory. Every distributed system performs this round trip constantly: an API response arrives as JSON text and is deserialised into typed structures; a message queue delivers a Protocol Buffers payload that a consumer decodes against its schema; a game engine loads saved state from disk back into scene objects.

Where serialisation is largely a mechanical flattening, deserialisation carries the harder responsibilities. The decoder must resolve schema versions (does this field still exist? what is its default?), re-establish object identity and shared references, convert wire types into host-language types, and — critically — decide how much to trust the input. Formats such as [[Protobuf]] and FlatBuffers make this tractable by pairing compact binary encodings with explicit schemas and generated parsing code, while self-describing formats like JSON and XML defer validation to the application layer.

In the VisionFlow ecosystem, deserialisation sits inside [[Data Exchange]] pipelines wherever agents, services, or clients consume state produced elsewhere: parsing JSON-LD blocks into graph triples, decoding binary scene deltas for real-time rendering, or rehydrating checkpointed agent memory.

## Technical Details

**Correctness concerns**:

- **Schema evolution** — decoders must tolerate unknown fields and supply defaults for missing ones so that old and new producers interoperate (forward/backward compatibility).
- **Type fidelity** — mapping wire representations onto host types loses information at the edges (64-bit integers in JavaScript JSON, floating-point round-tripping, time zones in timestamps).
- **Reference reconstruction** — object graphs with cycles or shared substructure need identity-preserving decoders; naive tree decoding duplicates or fails.

  **Security concerns**: deserialisation of untrusted data is a recognised vulnerability class (CWE-502). Language-native mechanisms that instantiate arbitrary classes — Java object streams, Python pickle, .NET BinaryFormatter — allow crafted payloads to trigger attacker-chosen code during reconstruction, and have driven high-profile exploits. Hardened practice therefore prefers data-only formats with explicit schemas, allow-lists of decodable types, size and depth limits on parsers, and validation before any side-effectful construction.

  **Performance**: deserialisation frequently dominates ingest cost, which motivates zero-copy designs (FlatBuffers, Cap'n Proto) that lay data out so consumers read fields in place without a decode step, and streaming parsers that process large payloads incrementally rather than materialising them wholesale.

