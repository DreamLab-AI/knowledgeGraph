
Tamper evidence is the property of a system, record, or physical artefact whereby any unauthorised alteration leaves detectable traces that can be subsequently verified. It relies on mechanisms such as cryptographic hashing, digital signatures, and immutable logs so that the integrity of an item can be assessed after the fact. Tamper evidence does not necessarily prevent modification, but it guarantees that modification cannot occur undetected.

- ### Overview
  - Tamper evidence focuses on detectability rather than prevention: alterations may be possible but never silent.
  - Common implementations append cryptographic checksums or signatures that fail validation when content changes.
  - In distributed ledgers, hash-chaining makes any retroactive edit invalidate every subsequent block.
  - Physical analogues include security seals and holographic labels that visibly degrade when broken.
- ### Key aspects
  - Hash-chaining links each record to its predecessor so a single change cascades into detectable mismatches.
  - Digital signatures bind a record to a signer, exposing both content tampering and forged provenance.
  - Append-only logs prevent in-place edits, forcing all changes to be visible additions.
  - Verification is reproducible: any party with the public material can independently confirm integrity.
- ### Applications
  - Notarisation and timestamping services that prove a document existed unchanged at a point in time.
  - Supply-chain records where provenance must survive multiple custodians without silent alteration.
  - Audit logging in regulated systems where after-the-fact review must detect manipulation.
  - Digital asset registries that prove an asset has not been swapped or modified.
- ### Provenance

