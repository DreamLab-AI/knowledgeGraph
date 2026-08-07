public:: true

# Provenance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79bfcc9bc4e2cbac5a1f1fde914c5c38872241087db132b41967aa1914098139",
  "@type": "Page",
  "vc:slug": "provenance",
  "title": "Provenance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:linked:trust",
      "vc:label": "Trust"
    },
    {
      "@id": "urn:visionflow:linked:provenance-tracking",
      "vc:label": "Provenance Tracking"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:data-provenance",
      "vc:label": "Data Provenance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Provenance"
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
  "@id": "urn:ngm:class:provenance",
  "@type": "Class",
  "label": "Provenance",
  "definition": "The documented record of the origin, history and chain of custody of data or assets, used to establish authenticity, trust and accountability.",
  "vc:plainGloss": "A traceable record of where something came from and everyone who has handled it since — like the paper trail that proves a painting is genuine. For data, it lets you check the source is trustworthy and see exactly how it reached you.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:data-provenance",
    "label": "Data Provenance"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Lineage Metadata"
      },
      {
        "@id": "urn:ngm:class:chain-of-custody",
        "label": "Chain of Custody"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Timestamp"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-prov",
        "label": "W3C PROV"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c-prov",
        "label": "W3C PROV"
      },
      {
        "@id": "urn:ngm:class:provenance-ontology-prov-o",
        "label": "PROV-O Ontology"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:anonymisation",
        "label": "Anonymisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Scientific Reproducibility"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-lineage",
      "label": "Data Lineage"
    },
    {
      "@id": "urn:ngm:class:origin-tracking",
      "label": "Origin Tracking"
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
  "@id": "urn:visionflow:annotation:link-resolutions:provenance:96d815328a42",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79bfcc9bc4e2cbac5a1f1fde914c5c38872241087db132b41967aa1914098139"
  },
  "vc:resolutions": [
    {
      "raw": "[[Audit Trail]]",
      "resolved": "urn:visionflow:linked:audit-trail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust]]",
      "resolved": "urn:visionflow:linked:trust",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance Tracking]]",
      "resolved": "urn:visionflow:linked:provenance-tracking",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Provenance]]",
      "resolved": "urn:visionflow:linked:data-provenance",
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
  - The documented record of the origin, history and chain of custody of data or assets, used to establish authenticity, trust and accountability.

- ### In Plain Terms
  - A traceable record of where something came from and everyone who has handled it since — like the paper trail that proves a painting is genuine. For data, it lets you check the source is trustworthy and see exactly how it reached you.

- ### Semantic Classification
  - owl-class:: general:Provenance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Provenance]]
  - bridges-to:: [[Provenance Tracking]], [[Supply Chain]]
  - requires:: [[Audit Trail]]
  - enables:: [[Trust]]

- ### Content
  - Provenance is the verifiable history of where data or an asset came from and how it has been transformed or transferred. Capturing this lineage as an audit trail allows consumers to assess authenticity, reproduce results and assign accountability for changes.
  - Provenance is important in supply chains, scientific data, digital media and machine learning datasets, where knowing the origin and processing history supports trust. Cryptographic and ledger-based techniques can make provenance records tamper-evident.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
