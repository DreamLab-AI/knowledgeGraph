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
---

# TLV Encoding

Type-Length-Value (TLV) encoding is a compact, extensible binary serialisation scheme in which each data field is represented by a type identifier, a length descriptor, and the value payload. Its self-describing structure allows parsers to skip unknown record types while preserving forward and backward compatibility, which is why protocols such as Lightning and Taproot Assets use it to embed optional metadata in transaction records.
