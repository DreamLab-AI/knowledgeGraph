public:: true

# Digital Asset Custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:digital-asset-custody",
  "@type": "Page",
  "vc:slug": "digital-asset-custody",
  "title": "Digital Asset Custody",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-asset-custody",
  "@type": "Class",
  "label": "Digital Asset Custody",
  "definition": "Digital asset custody is the safekeeping and administration of cryptographic private keys that control crypto-assets on behalf of their owners. Custodians use controls such as hardware security modules, multi-party computation, and cold storage to protect keys against theft, loss, and unauthorised use while meeting regulatory and audit requirements. It is the trust and security backbone enabling institutional participation in digital-asset markets.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:cold-storage", "label": "Cold Storage"},
      {"@id": "urn:ngm:class:hot-wallet", "label": "Hot Wallet"},
      {"@id": "urn:ngm:class:multi-party-computation", "label": "Multi-Party Computation"},
      {"@id": "urn:ngm:class:multisignature", "label": "Multisignature"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:hardware-security-module", "label": "Hardware Security Module"},
      {"@id": "urn:ngm:class:private-key-management", "label": "Private Key Management"},
      {"@id": "urn:ngm:class:proof-of-reserves", "label": "Proof of Reserves"},
      {"@id": "urn:ngm:class:key-ceremony", "label": "Key Ceremony"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:institutional-adoption", "label": "Institutional Adoption"},
      {"@id": "urn:ngm:class:staking", "label": "Staking"},
      {"@id": "urn:ngm:class:tokenised-securities", "label": "Tokenised Securities"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptographic-key", "label": "Cryptographic Key"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:qualified-custodian-standard", "label": "Qualified Custodian Standard"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:threshold-signature-scheme", "label": "Threshold Signature Scheme"},
      {"@id": "urn:ngm:class:air-gap", "label": "Air Gap"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:asset-segregation", "label": "Asset Segregation"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:self-custody", "label": "Self-Custody"},
      {"@id": "urn:ngm:class:decentralised-exchange", "label": "Decentralised Exchange"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:institutional-custody", "label": "Institutional Custody"},
      {"@id": "urn:ngm:class:insurance", "label": "Insurance"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:institutional-custody", "label": "Institutional Custody"},
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"},
      {"@id": "urn:ngm:class:custody-risk", "label": "Custody Risk"},
      {"@id": "urn:ngm:class:wallet-infrastructure", "label": "Wallet Infrastructure"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:crypto-asset-custody", "label": "Crypto Asset Custody"},
    {"@id": "urn:ngm:class:cryptocurrency-custody", "label": "Cryptocurrency Custody"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Digital asset custody secures the private keys that control crypto-assets, using HSMs, MPC, and cold storage. It is central to [[Institutional Custody]] offerings and is shaped by [[Securities Regulation]] governing qualified custodians.
- ### Content
  - Custody models range from fully self-custodial to third-party qualified custodians, with MPC and multisig reducing single points of failure. Key trade-offs balance security against operational speed; regulatory regimes increasingly mandate segregation of client assets, proof of reserves, and insurance.
