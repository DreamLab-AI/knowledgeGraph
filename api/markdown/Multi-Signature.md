public:: true

# Multi-Signature
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-signature",
  "@type": "Page",
  "vc:slug": "multi-signature",
  "title": "Multi-Signature",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-signature",
  "@type": "Class",
  "label": "Multi-Signature",
  "definition": "Multi-Signature (multisig) is a cryptographic access-control scheme requiring that a transaction or operation be authorised by a threshold number of independent private keys from a defined set before it is considered valid. Commonly expressed as m-of-n (e.g. 2-of-3), multisig eliminates single points of failure in key custody and enforces shared governance over digital assets or smart contracts. It is foundational to institutional cryptocurrency custody, DAO treasury management, and hardware-secure wallet architectures. Multisig schemes may be implemented at the protocol layer, at the script level (as in Bitcoin P2SH), or at the application layer via smart contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:signature-scheme", "label": "Signature Scheme"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:threshold-signature-scheme", "label": "Threshold Signature Scheme"},
      {"@id": "urn:ngm:class:schnorr-signature", "label": "Schnorr Signature"},
      {"@id": "urn:ngm:class:ecdsa", "label": "ECDSA"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi Sig Governance"},
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:multi-signature-wallet", "label": "Multi-Signature Wallet"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Multi-Signature]] is a cryptographic m-of-n scheme requiring approval from at least m out of n designated [[Cryptographic Keys]] before a transaction is authorised, eliminating single points of failure in custody and enabling [[Multi Sig Governance]] of shared digital assets.

- ### Relationships
  - [[Multi-Signature]] is a practical instantiation of the broader [[Signature Scheme]] family, closely related to [[Threshold Signature Scheme]] — which aggregates signatures into a single on-chain signature — and leverages primitives such as [[ECDSA]] and [[Schnorr Signature]]. It is foundational to [[Multi-Signature Wallet]] products used in institutional custody and [[DAO Governance]] treasury management. At the execution layer, multi-signature logic is frequently encoded in [[Smart Contract]] bytecode, particularly on EVM-compatible chains, giving programmable control over when and how funds move.

- ### Content
  - Multi-signature schemes predate blockchain by decades, appearing in early PKI literature as a mechanism for splitting control among multiple administrators. Their application to Bitcoin was formalised with the Pay-to-Script-Hash (P2SH) standard in BIP 16 (2012), which allowed arbitrary scripts — including m-of-n redeem scripts — to be committed to a hash and spent by revealing the script and sufficient signatures. This enabled mainstream multisig wallets and institutional custody products for the first time, and the pattern quickly spread to other UTXO-based and account-based blockchains.

  - In a 2-of-3 Bitcoin multisig setup, three public keys are encoded in a redeem script; any two of the three corresponding private keys can produce valid signatures to unlock funds. The signatures are verified independently by full nodes enforcing consensus rules. On EVM chains such as Ethereum, multisig is typically implemented as a smart contract (e.g., Gnosis Safe) that enforces the threshold check in Solidity code, giving greater flexibility: signers can be added or removed, daily limits enforced, and time-locks applied. The key management challenge shifts from protocol-level script to smart contract logic, introducing a different attack surface.

  - The significance of multisig lies in its practical security properties. A single compromised or lost key does not forfeit access (with appropriate m-of-n choices), and collusion among a threshold of signers is required to execute transactions, which is a meaningful deterrent for insider attacks. These properties make multisig the default custody architecture for exchanges, DeFi protocol treasuries, and bridge contracts holding substantial locked value. Hardware security modules (HSMs) are typically used for each individual signing key.

  - By 2024–2025, Schnorr-based key aggregation protocols (MuSig2, FROST) are increasingly deployed to produce threshold signatures indistinguishable from single-key signatures on-chain, preserving the security model of multisig while improving privacy and reducing transaction fees. The Gnosis Safe platform reports securing over $100 billion in digital assets. Regulatory guidance from bodies such as the EU under MiCA increasingly treats proper key-management practices — including multisig thresholds — as a compliance requirement for virtual asset service providers.