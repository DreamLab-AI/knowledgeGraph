public:: true

# Governance Frameworks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:56463a04d5a89eeae028cba822c663899d7eab167e56f1bca32daad68e25019b",
  "@type": "Page",
  "vc:slug": "governance-frameworks",
  "title": "Governance Frameworks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Governance Frameworks"
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
  "@id": "urn:ngm:class:governance-frameworks",
  "@type": "Class",
  "label": "Governance Frameworks",
  "definition": "Governance frameworks are structured sets of policies, roles, and processes that define how decisions are made and oversight is exercised within an organisation or system.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:governance-frameworks:589c6f02f515",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:56463a04d5a89eeae028cba822c663899d7eab167e56f1bca32daad68e25019b"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
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
  - Governance frameworks are structured sets of policies, roles, and processes that define how decisions are made and oversight is exercised within an organisation or system.

- ### Semantic Classification
  - owl-class:: governance:GovernanceFrameworks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Governance]]
  - bridges-to:: [[AI Governance]]
  - related-to:: [[Corporate Governance]], [[Data Governance]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - A governance framework specifies decision rights, accountability, escalation paths, and controls. Frameworks are applied to corporate management, data management, IT, and increasingly to artificial intelligence systems.
  - In technology contexts, governance frameworks define how risks are assessed, how compliance is demonstrated, and how stakeholders participate, providing a repeatable structure rather than ad hoc decisions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
