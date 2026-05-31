- ### Definition
  - The addressing scheme used by the InterPlanetary File System, in which content is identified by a cryptographic hash of its data rather than by location. The resulting content identifier changes if the content changes.

- ### Semantic Classification
  - owl-class:: distributed-systems:IPFSContentAddressing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[IPFS]]
  - bridges-to:: [[IPFS]]
  - requires:: [[Cryptographic Hash]]
  - enables:: [[Distributed Storage]]

- ### Content
  - Content addressing in IPFS derives an identifier from the hash of the content itself, producing a content identifier. Requesting that identifier retrieves the exact data, and any change to the data yields a different identifier.
  - This approach provides integrity verification and deduplication, because identical content always maps to the same identifier, and it enables retrieval from any peer that holds the data rather than from a fixed server.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z