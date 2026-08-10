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

- ### Current Landscape (2026)
  - The C2PA Content Credentials standard has become the dominant content-provenance mechanism: C2PA 2.1 was ratified as ISO/IEC 22144 in 2025, followed by v2.3 (December 2025, adding live-video and cloud-referenced provenance) and v2.4 (April 2026), which introduced a machine-readable AI Disclosure assertion, a Repository Receipt assertion and a crJSON serialisation.
  - Regulation has turned provenance from optional to mandatory: the EU AI Act's Article 50 transparency obligations became enforceable on 2 August 2026, backed by the European AI Office's Code of Practice on Transparency of AI-Generated Content (published 10 June 2026), while California's SB 942 (AI Transparency Act) took effect on 1 January 2026.
  - The EU Code mandates a multi-layered approach that no single technique satisfies: digitally signed C2PA-style metadata manifests, imperceptible watermarking (e.g. Google's SynthID), plus optional fingerprinting/logging and a free, EU-localised public detection tool.
  - Adoption has reached consumer scale: the C2PA reports over 6,000 members and affiliates with live implementations, hardware support shipped in the Google Pixel 10 phone and Sony PXW-Z300 camera, wire services (AP, Reuters, AFP) now require signed credentials on major-event imagery, and TikTok upgraded to the C2PA Steering Committee in July 2026.
  - In the data-engineering sense of provenance, OpenLineage (a Linux Foundation LF AI & Data project, ~40 producers/consumers) published OpenLineage 2.0 on 3 June 2026 with first-party commitments from Databricks, Snowflake and Google Cloud, adding a richer provenance schema, dataset immutability descriptors and signed metadata transport.
  - The open-standard stack has displaced closed catalogues: OpenLineage as the wire format feeding Marquez (reference implementation), OpenMetadata or DataHub, with Atlan, Collibra, Alation and Monte Carlo consuming the same events, giving vendor portability via emit-once, route-anywhere.
  - Open challenges as of 2026 include manifest fragility (C2PA metadata is routinely stripped by screenshots and many social platforms), the cost and coverage limits of row/column-level lineage, cross-vendor watermark-detection interoperability (a shared detection interface is not due until February 2027), and reconciling technical lineage with legal/ethical provenance (consent, licensing) demanded by EU AI Act Article 10 training-data records.

- ### References
  - 1. Coalition for Content Provenance and Authenticity (2026). C2PA Technical Specification v2.4 (version history: v2.3 Dec 2025, v2.4 Apr 2026). https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html
  - 2. C2PA (2026). The C2PA Launches Content Credentials 2.3 and Celebrates 5 Years of Impact. https://c2pa.org/the-c2pa-launches-content-credentials-2-3-and-celebrates-5-years-of-impact-across-the-digital-ecosystem/
  - 3. Content Authenticity Initiative (2026). The State of Content Authenticity in 2026. https://contentauthenticity.org/blog/the-state-of-content-authenticity-in-2026
  - 4. IPTC (2026). European AI Office releases Code of Practice on Transparency of AI-Generated Content. https://iptc.org/news/eu-ai-transparency-code-of-practice-june-2026/
  - 5. Cooley LLP (2026). EU AI Act: Second Draft of Code of Practice on Transparency and Watermarking Published. https://www.cooley.com/news/insight/2026/2026-04-07-eu-ai-act-second-draft-of-code-of-practice-on-transparency-and-watermarking-published
  - 6. Data Engineering Weekly (2026). OpenLineage 2.0 Wins Major Vendor Backing. https://data-engineering-weekly.contentwave.net/article/openlineage-20-wins-major-vendor-backing-raises-the-bar-for-trainingdata-lineage

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
