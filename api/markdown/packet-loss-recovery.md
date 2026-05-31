- ### Definition
  - Techniques used to recover from or mitigate the loss of data packets during transmission over a network. They include retransmission, forward error correction, and concealment of missing data.

- ### Semantic Classification
  - owl-class:: networking:PacketLossRecovery
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Protocol]]
  - bridges-to:: [[Network Protocol]]
  - requires:: [[Forward Error Correction]]
  - enables:: [[Video Streaming]]

- ### Content
  - Packets can be lost because of congestion, buffer overflows, or transmission errors. Recovery methods include acknowledgement-based retransmission, as in TCP, and forward error correction, which adds redundancy so receivers can reconstruct lost data without retransmission.
  - In real-time media, retransmission may arrive too late, so techniques such as forward error correction, interleaving, and error concealment are used to maintain perceived quality despite loss.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z