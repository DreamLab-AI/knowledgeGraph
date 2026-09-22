public:: true

# Witness Data

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:witness-data",
  "@type": "Page",
  "title": "Witness Data",
  "vc:slug": "witness-data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:witness-data",
  "@type": "Class",
  "label": "Witness Data",
  "definition": "Witness data is the portion of a Bitcoin transaction that contains the signatures and scripts proving authorisation to spend inputs, separated from the core transaction body by Segregated Witness. Moving this data into a distinct structure fixes transaction malleability and allows witness bytes to be discounted when computing block weight. Witness data is also the field where inscriptions such as Ordinals embed arbitrary content.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction",
      "label": "Transaction"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:script",
        "label": "Script"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:ordinals",
        "label": "Ordinals"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:block-size",
        "label": "Block Size"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:ordinals",
        "label": "Ordinals"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:block-size",
        "label": "Block Size"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ordinals",
        "label": "Ordinals"
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
  - Witness data is the portion of a Bitcoin transaction that contains the signatures and scripts proving authorisation to spend inputs, separated from the core transaction body by Segregated Witness. Moving this data into a distinct structure fixes transaction malleability and allows witness bytes to be discounted when computing block weight. Witness data is also the field where inscriptions such as Ordinals embed arbitrary content.
  - Related: [[Transaction]] [[Bitcoin]] [[Merkle Tree]] [[Ordinals]]
- ### Overview
  - By segregating signature data, Segregated Witness restructured how transactions are committed and weighted. Witness bytes are counted at a discount toward the block weight limit, effectively raising throughput, and the witness commitment is carried in a separate Merkle structure.
- ### Mechanisms
  - Separation of signatures from the transaction body
  - Witness discount applied to block weight accounting
  - Elimination of third-party transaction malleability
  - A dedicated witness commitment within the block
  - Use as a container for Taproot scripts and Ordinals inscriptions
- ### Applications
  - Higher effective block capacity on Bitcoin
  - Malleability-free construction of layer-two channels
  - Taproot script-path spending
  - Embedding inscriptions and Ordinals content
- ### Relationships
  - subClassOf:: [[Transaction]]
  - hasPart:: [[Digital Signature]]
  - hasPart:: [[Script]]
  - uses:: [[Merkle Tree]]
  - requires:: [[Transaction]]
  - partOf:: [[Transaction]]
  - partOf:: [[Blockchain]]
  - enables:: [[Taproot]]
  - enables:: [[Ordinals]]
  - supports:: [[Block Size]]
  - relatedTo:: [[Bitcoin]]
  - relatedTo:: [[Ordinals]]
  - relatedTo:: [[Taproot]]
  - contrastsWith:: [[Block Size]]
  - bridgesTo:: [[Ordinals]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
