An MPC wallet is a digital wallet whose private key is split into shares held by independent parties and never reconstructed in one place, so transactions are authorised through a multi-party computation protocol that jointly produces a signature. By distributing trust across devices or institutions, it removes the single seed phrase as a single point of failure while preserving a single on-chain address. MPC wallets contrast with traditional self-custody seed wallets and with on-chain multisignature schemes by keeping the threshold logic off-chain and chain-agnostic.

### Overview

- MPC wallets keep the signing key as cryptographic shares, so a thief who compromises one device cannot move funds.
- Because the threshold logic is off-chain, the same wallet works across chains with a single externally owned address.
- Share refresh lets the wallet rotate key material without changing the public address or notifying the chain.

### Key aspects

- Threshold signing where t-of-n shares co-sign without revealing each other's share.
- Key generation via distributed key generation so no seed phrase ever exists.
- Proactive share refresh to defend against gradual share compromise.
- Policy engines layering spending limits and approvals on top of the cryptographic threshold.

### Applications

- Institutional custody and exchange treasury management.
- Consumer wallets offering social or device-based recovery.
- DAO and team treasuries needing distributed authorisation.

### Provenance

