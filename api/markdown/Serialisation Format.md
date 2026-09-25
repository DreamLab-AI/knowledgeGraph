A serialisation format is a specification for encoding in-memory data structures into a byte or text stream that can be persisted or transmitted and later reconstructed. Formats differ in schema rigidity, compactness, speed, and cross-language support, spanning text formats like JSON and YAML and binary formats like Protocol Buffers, Avro, and Parquet. It is fundamental to checkpointing, messaging, and distributed computation.

### Content

- Choice of format trades human-readability against size and parsing cost: JSON and YAML favour interoperability, while binary schemas such as Protocol Buffers and Avro favour throughput and schema evolution. In distributed and ML systems, columnar and zero-copy formats reduce checkpoint size and accelerate fault recovery.

