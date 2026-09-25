A multisig wallet is a cryptocurrency wallet that requires multiple independent signatures to authorise a transaction, typically following an M-of-N threshold scheme where M of N designated keys must sign. By distributing signing authority across keys held by different people or devices, it removes single points of failure and enforces shared control. It is widely used for treasury management, custody and decentralised-organisation governance.

### Overview

- In an M-of-N scheme, N keys are designated and any M of them must sign before a transaction is valid.
- On Bitcoin, multisig is expressed through script (P2SH/P2WSH); on Ethereum it is typically implemented as a smart-contract wallet.
- Distributing keys across people, devices or geographies reduces theft and loss risk and enforces governance policy.
- Threshold-signature schemes can achieve similar guarantees while presenting a single on-chain signature.

### Mechanisms

- Designated public keys and a signing threshold define the spending policy.
- Each signer independently authorises, and the protocol combines signatures.
- Smart-contract variants encode arbitrary approval logic and recovery paths.
- Hardware and air-gapped signers harden individual key custody.

### Applications

- DAO and protocol treasury management.
- Institutional and exchange custody.
- Shared self-custody among family or partners.
- Escrow and conditional-release arrangements.

### Provenance

