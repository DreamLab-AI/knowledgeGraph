public:: true

# Secret Sharing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:secret-sharing",
  "@type": "Page",
  "title": "Secret Sharing",
  "vc:slug": "secret-sharing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:secret-sharing",
  "@type": "Class",
  "label": "Secret Sharing",
  "definition": "Secret sharing is a cryptographic technique that splits a secret into multiple shares distributed among participants such that only an authorised subset, meeting a defined threshold, can reconstruct the secret, while any smaller subset learns nothing about it. The canonical construction, Shamir's secret sharing, uses polynomial interpolation over a finite field. Secret sharing underpins threshold cryptography, distributed key management and secure multi-party computation.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:shamir-secret-sharing",
        "label": "Shamir Secret Sharing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy Preserving Computation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Secret sharing is a cryptographic technique that splits a secret into multiple shares distributed among participants such that only an authorised subset, meeting a defined threshold, can reconstruct the secret, while any smaller subset learns nothing about it. The canonical construction, Shamir's secret sharing, uses polynomial interpolation over a finite field. Secret sharing underpins threshold cryptography, distributed key management and secure multi-party computation.
  - Related core concepts: [[Cryptography]] [[Threshold Cryptography]] [[Multi-Party Computation]] [[Key Management]] [[Security]]
- ### Overview
  - Secret sharing solves a fundamental problem: how to entrust a secret to a group without trusting any single member. The secret is encoded into n shares with a threshold t such that any t shares reconstruct it but t-1 shares reveal nothing, providing information-theoretic security in the classic scheme. Shamir's construction encodes the secret as the constant term of a random degree t-1 polynomial; each share is a point on that polynomial, and any t points uniquely determine it by interpolation. This threshold property makes secret sharing the backbone of resilient, distributed trust.
  - Secret sharing distributes trust so that compromise of any minority of participants neither reveals the secret nor blocks its use. Combined with cryptographic protocols it yields threshold signatures, where a quorum jointly signs without any party ever reconstructing the private key, and secure multi-party computation, where parties compute over shared inputs. These properties make it foundational to resilient, decentralised security architectures.
- ### History and context
  - Adi Shamir and George Blakley independently introduced secret sharing in 1979. Shamir's polynomial scheme became the standard, and the field later expanded into verifiable secret sharing, distributed key generation and the threshold cryptography that secures modern key-management and blockchain custody.
- ### Mechanisms
  - Threshold scheme: an (t,n) structure where any t of n shares reconstruct the secret and fewer reveal nothing.
  - Polynomial interpolation: Shamir's scheme reconstructs the secret as the constant term via Lagrange interpolation.
  - Information-theoretic security: below-threshold coalitions gain no information, independent of computational power.
  - Verifiable secret sharing: extensions that let participants confirm shares are consistent without revealing the secret.
  - Distributed key generation: producing shares of a key that no single party ever holds in full.
  - Proactive refresh: periodically re-randomising shares to resist mobile adversaries.
- ### Applications
  - Threshold signatures and distributed custody of cryptocurrency keys.
  - Distributed key management and hardware security module backups.
  - Secure multi-party computation protocols operating on shared inputs.
  - Resilient storage of high-value secrets across organisations or regions.
- ### Challenges and considerations
  - Share distribution: getting shares securely to participants is itself a trust problem.
  - Dishonest dealers: verifiable schemes are needed to prevent inconsistent shares.
  - Share refresh: long-lived secrets need proactive re-randomisation against creeping compromise.
  - Performance: threshold protocols add communication and coordination overhead.
- ### Examples
  - Distributed custody where several executives jointly control a treasury key.
  - Threshold signing of blockchain transactions without a single point of failure.
  - Backing up hardware-security-module keys across multiple sites.
- ### Relationships
  - subClassOf:: [[Cryptography]]
  - partOf:: [[Cryptography]]
  - hasPart:: [[Shamir Secret Sharing]]
  - implements:: [[Threshold Cryptography]]
  - requires:: [[Cryptographic Protocol]]
  - dependsOn:: [[Encryption]]
  - enables:: [[Multi-Party Computation]]
  - enables:: [[Key Management]]
  - enables:: [[Privacy Preserving Computation]]
  - supports:: [[Multisignature]]
  - supports:: [[Custody]]
  - supports:: [[Wallet]]
  - supports:: [[Access Control]]
  - relatedTo:: [[Security]]
  - relatedTo:: [[Distributed Systems]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
