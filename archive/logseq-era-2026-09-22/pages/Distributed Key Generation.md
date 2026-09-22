public:: true

# Distributed Key Generation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:distributed-key-generation",
  "@type": "Page",
  "title": "Distributed Key Generation",
  "vc:slug": "distributed-key-generation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-key-generation",
  "@type": "Class",
  "label": "Distributed Key Generation",
  "definition": "Distributed Key Generation (DKG) is a cryptographic protocol in which a group of mutually distrusting participants collaboratively compute a shared public key together with secret key shares, without any single party ever learning or holding the complete private key. Each participant contributes randomness so that the final key material is the joint product of all honest parties, providing resilience against compromise of individual nodes. DKG underpins threshold signatures and secure multi-party computation, removing the single point of failure inherent in a centrally generated key.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:secret-sharing",
        "label": "Secret Sharing"
      },
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      },
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature Scheme"
      },
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      },
      {
        "@id": "urn:ngm:class:multi-sig-governance",
        "label": "Multi Sig Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-signature-wallet",
        "label": "Multi-Signature Wallet"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:secret-sharing",
        "label": "Secret Sharing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      },
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:threshold-cryptography",
      "label": "Threshold Cryptography"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Distributed Key Generation (DKG) is a cryptographic protocol in which a group of mutually distrusting participants collaboratively compute a shared public key together with secret key shares, without any single party ever learning or holding the complete private key.
  - Each participant contributes randomness so that the final key material is the joint product of all honest parties, providing resilience against compromise of individual nodes.
  - DKG underpins threshold signatures and secure multi-party computation, removing the single point of failure inherent in a centrally generated key.
  - Related core concepts: [[Cryptographic Protocol]] [[Secret Sharing]] [[Multi-Party Computation]] [[Threshold Signature Scheme]]
- ### Overview
  - DKG generalises Shamir secret sharing by removing the trusted dealer: the secret is never assembled in one place.
  - Protocols such as Pedersen DKG and the Gennaro et al. construction add verifiable secret sharing to detect malicious shares.
  - The resulting key shares can later be used jointly to sign or decrypt without reconstructing the master key.
- ### Key aspects
  - Verifiable secret sharing to expose participants who submit inconsistent shares.
  - Threshold parameter t-of-n controlling how many shares are needed to operate the key.
  - Robustness against a dishonest minority and against aborts during the protocol.
  - Re-sharing and proactive refresh to rotate shares without changing the public key.
- ### Applications
  - Custody systems for digital assets where no operator holds the full key.
  - Validator and oracle networks using threshold signatures.
  - Confidential computing and distributed certificate authorities.
- ### Relationships
  - requires:: [[Secret Sharing]]
  - requires:: [[Cryptographic Protocol]]
  - requires:: [[Multi-Party Computation]]
  - hasPart:: [[Private Key]]
  - hasPart:: [[Key Management]]
  - supports:: [[Threshold Signature Scheme]]
  - supports:: [[Threshold Cryptography]]
  - supports:: [[Multi Sig Governance]]
  - enables:: [[Multi-Signature Wallet]]
  - uses:: [[Secret Sharing]]
  - relatedTo:: [[Hardware Security Module]]
  - relatedTo:: [[Self-Custody]]
  - bridgesTo:: [[Blockchain]]
  - implements:: [[Threshold Cryptography]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
