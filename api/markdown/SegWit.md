
Segregated Witness (SegWit) is a Bitcoin protocol upgrade (BIP141/BIP143/BIP144) that moves witness data (signatures and scripts) into a separate structure outside the traditional transaction serialisation, eliminating transaction malleability, introducing a weight-based block-size accounting system, and enabling second-layer protocols such as the Lightning Network and subsequent upgrades such as Taproot.

- ### Semantic Classification

- ### Content
  - SegWit separates the witness, which holds signatures, from the rest of a transaction. Because the transaction identifier no longer depends on the signature data, third parties can no longer alter it in ways that change the identifier.
  - Removing this malleability made reliable off-chain protocols such as the Lightning Network practical. SegWit also introduced a weight-based accounting that effectively raised block capacity and prepared the ground for the later Taproot upgrade.

- ### Provenance

