---
okf_version: "0.2"
type: Class
title: TLV Encoding
resource: urn:ngm:class:tlv-encoding
domain: blockchain
description: Type-Length-Value (TLV) encoding is a compact, extensible binary serialisation scheme in which each data field is represented by a type identifier, a length descriptor, and the value payload. Its self-describing structure allows parsers to skip unknown record types while preserving forward and backward compatibility, which is why protocols such as Lightning and Taproot Assets use it to embed optio
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
relatedTo:
  - urn:ngm:class:taproot-assets
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# TLV Encoding

Type-Length-Value (TLV) encoding is a compact, extensible binary serialisation scheme in which each data field is represented by a type identifier, a length descriptor, and the value payload. Its self-describing structure allows parsers to skip unknown record types while preserving forward and backward compatibility, which is why protocols such as Lightning and Taproot Assets use it to embed optional metadata in transaction records.
