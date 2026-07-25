public:: true

# Digital Services Act
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:68d0f276b1ef06088ebec87ec36a8b808717e5bc814579ee91224d23f5573082",
  "@type": "Page",
  "vc:slug": "digital-services-act",
  "title": "Digital Services Act",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:compliance-systems",
      "vc:label": "Compliance Systems"
    },
    {
      "@id": "urn:visionflow:linked:content-transparency",
      "vc:label": "Content Transparency"
    },
    {
      "@id": "urn:visionflow:linked:moderation-infrastructure",
      "vc:label": "Moderation Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:platform-accountability",
      "vc:label": "Platform Accountability"
    },
    {
      "@id": "urn:visionflow:linked:reporting-mechanisms",
      "vc:label": "Reporting Mechanisms"
    },
    {
      "@id": "urn:visionflow:linked:user-protection",
      "vc:label": "User Protection"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-regulation",
      "vc:label": "Digital Regulation"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9869"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Services Act"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-services-act",
  "@type": "Class",
  "label": "Digital Services Act",
  "definition": "A comprehensive EU regulation establishing a legal framework for digital services accountability, content moderation requirements, platform transparency obligations, and user protection measures across online intermediaries, marketplaces, and social platforms, with implications for metaverse and virtual world governance.",
  "domain": "governance",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-regulation",
    "label": "Digital Regulation"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:compliance-systems",
        "label": "Compliance Systems"
      },
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Moderation Infrastructure"
      },
      {
        "@id": "urn:ngm:class:reporting-mechanisms",
        "label": "Reporting Mechanisms"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:algorithmic-transparency",
        "label": "Algorithmic Transparency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-transparency",
        "label": "Content Transparency"
      },
      {
        "@id": "urn:ngm:class:platform-accountability",
        "label": "Platform Accountability"
      },
      {
        "@id": "urn:ngm:class:user-protection",
        "label": "User Protection"
      },
      {
        "@id": "urn:ngm:class:minor-protection",
        "label": "Minor Protection"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:eu-digital-single-market",
        "label": "EU Digital Single Market"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:digital-markets-act",
        "label": "Digital Markets Act"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:european-commission",
        "label": "European Commission"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:online-safety",
        "label": "Online Safety"
      },
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Content Moderation"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation Algorithms"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:telecollaboration",
        "label": "Telecollaboration"
      },
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dsa",
      "label": "DSA"
    },
    {
      "@id": "urn:ngm:class:eu-digital-services-regulation",
      "label": "EU Digital Services Regulation"
    }
  ],
  "quality": 0.7,
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-services-act:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:68d0f276b1ef06088ebec87ec36a8b808717e5bc814579ee91224d23f5573082"
  },
  "vc:resolutions": [
    {
      "raw": "[[Compliance Systems]]",
      "resolved": "urn:visionflow:linked:compliance-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Transparency]]",
      "resolved": "urn:visionflow:linked:content-transparency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Moderation Infrastructure]]",
      "resolved": "urn:visionflow:linked:moderation-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Platform Accountability]]",
      "resolved": "urn:visionflow:linked:platform-accountability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reporting Mechanisms]]",
      "resolved": "urn:visionflow:linked:reporting-mechanisms",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Protection]]",
      "resolved": "urn:visionflow:linked:user-protection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Regulation]]",
      "resolved": "urn:visionflow:owl:class:digital-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A comprehensive EU regulation establishing legal framework for digital services accountability, content moderation requirements, platform transparency obligations, and user protection measures across online intermediaries, marketplaces, and social platforms, with implications for metaverse and virtual world governance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DigitalServicesAct
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Regulation]]
  - requires:: [[Compliance Systems]], [[Moderation Infrastructure]], [[Reporting Mechanisms]]
  - enables:: [[Platform Accountability]], [[User Protection]], [[Content Transparency]]
  - bridges-to:: [[Telecollaboration]]

- ### Content

  - ## Technical Details
  - **Key Provisions**:
		- Graduated obligations based on service size
		- Content moderation transparency
		- Algorithmic recommendation controls
		- Minor protection and advertising restrictions
  - **Platform Categories**:
		- Intermediary services (hosting, ISPs)
		- Online platforms (social networks, marketplaces)
		- Very Large Online Platforms (VLOPs: 45M+ EU users)
		- Search engines
  - **Timeline**:
		- Entered force: 2022
		- Bulk obligations effective: February 17, 2024
		- VLOP designations: Shein (April 2024), Temu (May 2024)
		- Active enforcement: Temu preliminarily found in breach (July 2025), Shein under formal proceedings (February 2026), X fined (December 2025)
  - **Metaverse Implications**: Most metaverse products in scope; content-specific regulations still developing
  - ## Applications
  - Platform content moderation
  - Algorithmic transparency reporting
  - Minor protection enforcement
  - Illegal content removal
  - Virtual world governance

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
