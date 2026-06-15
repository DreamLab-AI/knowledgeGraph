public:: true

# Tamper Evidence

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:tamper-evidence",
  "@type": "Page",
  "title": "Tamper Evidence",
  "vc:slug": "tamper-evidence",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tamper-evidence",
  "@type": "Class",
  "label": "Tamper Evidence",
  "definition": "Tamper evidence is the property of a system, record, or physical artefact whereby any unauthorised alteration leaves detectable traces that can be subsequently verified. It relies on mechanisms such as cryptographic hashing, digital signatures, and immutable logs so that the integrity of an item can be assessed after the fact. Tamper evidence does not necessarily prevent modification, but it guarantees that modification cannot occur undetected.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:integrity-verification",
        "label": "Integrity Verification"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Timestamp"
      },
      {
        "@id": "urn:ngm:class:blockchain-anchoring",
        "label": "Blockchain Anchoring"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tamper-resistance",
        "label": "Tamper Resistance"
      },
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tamper-resistance",
        "label": "Tamper Resistance"
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
  - Tamper evidence ensures that any modification to a protected record is detectable through verifiable traces.
  - It builds on [[Cryptographic Hash]] functions and [[Digital Signature]] schemes to bind content to a verifiable fingerprint.
  - Unlike full prevention, it provides [[Integrity Verification]] after the fact via an [[Audit Trail]].
  - Closely related to [[Immutability]] and [[Tamper Resistance]] in trustworthy systems.
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
- ### Relationships
  - enables:: [[Integrity Verification]]
  - enables:: [[Audit Trail]]
  - enables:: [[Provenance Tracking]]
  - requires:: [[Cryptographic Hash]]
  - requires:: [[Digital Signature]]
  - uses:: [[Timestamp]]
  - uses:: [[Blockchain Anchoring]]
  - supports:: [[Immutability]]
  - supports:: [[Supply Chain Traceability]]
  - relatedTo:: [[Tamper Resistance]]
  - relatedTo:: [[NFT]]
  - bridgesTo:: [[Blockchain]]
  - contrastsWith:: [[Tamper Resistance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
