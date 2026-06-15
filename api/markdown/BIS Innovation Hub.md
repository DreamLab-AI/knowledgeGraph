public:: true

# BIS Innovation Hub
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a9fd8ceb9b20a7523558398e86c52ea745122e498f6d405fa61fd33f8f03d3fd",
  "@type": "Page",
  "vc:slug": "bis-innovation-hub",
  "title": "BIS Innovation Hub",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:wholesale-cbdc",
      "vc:label": "Wholesale CBDC"
    },
    {
      "@id": "urn:visionflow:linked:central-bank",
      "vc:label": "Central Bank"
    },
    {
      "@id": "urn:visionflow:linked:hong-kong",
      "vc:label": "Hong Kong"
    },
    {
      "@id": "urn:visionflow:linked:bis",
      "vc:label": "BIS"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BIS Innovation Hub"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bis-innovation-hub",
  "@type": "Class",
  "label": "BIS Innovation Hub",
  "definition": "The innovation arm of the Bank for International Settlements, established to develop public goods for central banks and explore financial technology including CBDCs, cross-border payments, tokenisation, and regulatory technology.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bis",
      "label": "BIS"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:eurosystem-hub-centre",
        "label": "Eurosystem Hub Centre"
      },
      {
        "@id": "urn:ngm:class:project-nexus",
        "label": "Project Nexus"
      },
      {
        "@id": "urn:ngm:class:project-mbridge",
        "label": "Project mBridge"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bis",
        "label": "BIS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:wholesale-cbdc",
        "label": "Wholesale CBDC"
      },
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:regulatory-technology",
        "label": "Regulatory Technology"
      },
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:proof-of-concept",
        "label": "Proof of Concept"
      },
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:financial-technology",
        "label": "Financial Technology"
      },
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bis-hub",
      "label": "BIS Hub"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:bis-innovation-hub:9243d1c86d8d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a9fd8ceb9b20a7523558398e86c52ea745122e498f6d405fa61fd33f8f03d3fd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wholesale CBDC]]",
      "resolved": "urn:visionflow:linked:wholesale-cbdc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank]]",
      "resolved": "urn:visionflow:linked:central-bank",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hong Kong]]",
      "resolved": "urn:visionflow:linked:hong-kong",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BIS]]",
      "resolved": "urn:visionflow:linked:bis",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The innovation arm of the Bank for International Settlements, established to develop public goods for central banks and explore financial technology.

- ### Semantic Classification
  - owl-class:: governance:BISInnovationHub
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[BIS]]
  - bridges-to:: [[Central Bank]], [[Hong Kong]]
  - enables:: [[Central Bank Digital Currency]], [[Wholesale CBDC]]

- ### Content
  - The BIS Innovation Hub is the technology and innovation arm of the Bank for International Settlements, with centres in several financial jurisdictions. It runs experimental projects to support central banks in areas such as payments, settlement, and supervision.
  - Its work on central bank digital currency, including wholesale and cross-border pilots, makes it a key actor in the evolution of public digital money.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
