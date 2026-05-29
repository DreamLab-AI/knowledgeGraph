public:: true

# self-custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f973d4b1671f4311b39c4f28e9543696d17496aa54a3a5740f67ad5f5fe0cee",
  "@type": "Page",
  "vc:slug": "self-custody",
  "title": "self-custody",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:self-custody",
  "@type": "Class",
  "label": "Self-Custody",
  "definition": "Self-custody is the security model and operational practice whereby an individual or entity retains exclusive control of the private cryptographic keys that authorise transactions over their digital assets, without delegating that custody to a centralised exchange or financial institution. Assets governed by self-custodied keys are accessible directly on the blockchain; loss of the private key or seed phrase results in permanent, irrecoverable loss of those assets. Self-custody is realised through software wallets (hot wallets), hardware security devices (cold wallets), or multi-signature threshold schemes that distribute key material across several signatories to reduce single-point-of-failure risk.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:private-key", "label": "Private Key"},
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:wallet", "label": "Wallet"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Self-custody is the security model and operational practice whereby an individual or entity retains exclusive control of the private cryptographic keys that authorise transactions over their digital assets, without delegating that custody to a centralised exchange or financial institution. Assets governed by self-custodied keys are accessible directly on the blockchain; loss of the private key or seed phrase results in permanent, irrecoverable loss of those assets. Self-custody is realised through software wallets (hot wallets), hardware security devices (cold wallets), or multi-signature threshold schemes that distribute key material across several signatories to reduce single-point-of-failure risk.

- ### Semantic Classification
  - owl-class:: self-custody:Self-Custody
  - owl-role:: Concept

- ### Relationships
  - requires [[Private Key]]
  - requires [[Key Management]]
  - uses [[Wallet]]
  - uses [[Cryptography]]
  - relatedTo [[Digital Asset]]

- ### Content
  - Self-custody derives from the axiom "not your keys, not your coins"—if a third-party custodian holds the private keys, the holder bears counterparty risk from exchange insolvency, fraud, or regulatory asset freezes. Self-custody eliminates that counterparty risk but transfers operational responsibility to the individual: key generation must use a cryptographically secure random source, seed phrases must be stored physically in secure, geographically distributed locations, and signing operations must be performed on hardware or air-gapped devices to minimise exposure to malware.
  - Hardware wallets—dedicated signing devices such as Ledger and Trezor—keep the private key in a secure element that never exposes raw key material to a connected host computer; transactions are constructed on the host and blindly signed on the device after user confirmation. Multi-signature (multisig) schemes require m-of-n keys to authorise a transaction, distributing trust across multiple devices or parties and eliminating single-point-of-failure without requiring trust in a single custodian.
  - Social recovery wallets and threshold signature schemes (TSS) represent more sophisticated self-custody approaches: social recovery designates trusted guardians who can collectively restore access if a primary key is lost, while TSS distributes key shards across parties such that no single party holds a complete private key at any point. These innovations reduce the UX friction of pure self-custody while preserving its security properties. For institutional holders, qualified custodians regulated under national securities or banking frameworks offer a regulated middle ground between pure self-custody and unregulated exchange custody.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
