Type-Length-Value (TLV) encoding is a compact, extensible binary serialisation scheme in which each data field is represented by a type identifier, a length descriptor, and the value payload. Its self-describing structure allows parsers to skip unknown record types while preserving forward and backward compatibility, which is why protocols such as Lightning and Taproot Assets use it to embed optional metadata in transaction records.

### Content

- TLV streams allow newer fields to be added without breaking older parsers, since unknown types can be identified by their declared length and skipped. Even-numbered types are typically mandatory and odd-numbered types optional under the Lightning/Taproot convention, supporting graceful protocol evolution.

