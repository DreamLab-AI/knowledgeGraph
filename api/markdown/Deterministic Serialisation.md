Deterministic serialisation is the encoding of structured data into bytes such that semantically identical inputs always yield exactly the same byte sequence. It fixes ambiguities like map-key ordering, number formatting, and whitespace so that the output is canonical and reproducible. This property is essential for hashing, digital signatures, and content addressing, where any byte difference changes the resulting digest.

### Content

- Canonical forms such as JCS (RFC 8785) or canonical CBOR define strict rules for key ordering, integer encoding, and string normalisation. Without determinism, two encoders could hash the same logical object to different digests, breaking signature verification and content-addressed deduplication.

