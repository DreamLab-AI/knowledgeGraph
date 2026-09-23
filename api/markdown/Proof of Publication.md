
Proof of publication is a cryptographic guarantee that a given message has been published to, and ordered within, an append-only medium visible to all relevant parties, such that the publisher cannot later equivocate or hide it. Together with single-use seals it forms one of the two foundations of client-side validation: the publication medium (most commonly the Bitcoin blockchain, but also a Nostr relay set or other consensus system) provides ordering and non-equivocation, while seals bind specific messages to spendable objects. It is the property that lets off-chain smart-contract systems trust that a seal closure was witnessed once and only once.

- ### Overview
  - A single-use seal only matters if the act of closing it is *witnessed once*. Proof of publication supplies that property: the [[Bitcoin Network]] (or another consensus medium) orders transactions and makes them globally visible, so a seal closure cannot be performed twice or concealed. [[Nostr]] relay sets can serve as a lighter-weight publication medium for systems that need ordering and availability without Bitcoin-grade finality.

- ### Mechanisms
  - **Ordering** — the medium imposes a total or partial order on published messages (block height for Bitcoin).
  - **Non-equivocation** — once published, a message cannot be replaced by a conflicting one without detection.
  - **Inclusion proofs** — [[Merkle Tree]] paths let a light client prove a message's publication without downloading the whole medium.
  - **Timestamping** — publication binds the message to a point in time (see [[Timestamping]]).

- ### Provenance

