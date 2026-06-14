- ### Definition
  - Proof of publication guarantees that a message was made public on an append-only, ordered medium that the relevant parties all observe, removing the publisher's ability to equivocate. It is the medium-layer counterpart to [[Single Use Seals]] in Peter Todd's [[Client-Side Validation]] paradigm.

- ### Overview
  - A single-use seal only matters if the act of closing it is *witnessed once*. Proof of publication supplies that property: the [[Bitcoin Network]] (or another consensus medium) orders transactions and makes them globally visible, so a seal closure cannot be performed twice or concealed. [[Nostr]] relay sets can serve as a lighter-weight publication medium for systems that need ordering and availability without Bitcoin-grade finality.

- ### Mechanisms
  - **Ordering** — the medium imposes a total or partial order on published messages (block height for Bitcoin).
  - **Non-equivocation** — once published, a message cannot be replaced by a conflicting one without detection.
  - **Inclusion proofs** — [[Merkle Tree]] paths let a light client prove a message's publication without downloading the whole medium.
  - **Timestamping** — publication binds the message to a point in time (see [[Timestamping]]).

- ### Relationships
  - is-subclass-of:: [[Cryptographic Protocol]]
  - enables:: [[Single Use Seals]]
  - enables:: [[Client-Side Validation]]
  - enables:: [[Block Trails]]
  - uses:: [[Bitcoin Network]]
  - uses:: [[Merkle Tree]]
  - bridges-to:: [[Nostr]]
  - related-to:: [[Censorship Resistance]]
  - related-to:: [[Data Availability]]

- ### Provenance
  - sources:: Peter Todd, client-side validation writings; RGB Black Paper; Bitcoin Optech
  - updated:: 2026-06-14