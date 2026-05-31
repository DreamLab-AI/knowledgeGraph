public:: true

# NIST AI Risk Management Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:990fc9415832112b020217eed731bb846cc66213ca36698d622b9dc3c7017a8f",
  "@type": "Page",
  "vc:slug": "nist-ai-risk-management-framework",
  "title": "NIST AI Risk Management Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NIST AI Risk Management Framework"
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
  "@id": "urn:ngm:class:nist-ai-risk-management-framework",
  "@type": "Class",
  "label": "NIST AI Risk Management Framework",
  "definition": "A NIST framework providing voluntary guidance for managing risks associated with artificial intelligence systems. It describes functions and practices for governing, mapping, measuring and managing AI risk.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-ai-risk-management-framework:fa2eb0d9bed6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:990fc9415832112b020217eed731bb846cc66213ca36698d622b9dc3c7017a8f"
  },
  "vc:resolutions": [
    {
      "raw": "[[NIST]]",
      "resolved": "urn:visionflow:linked:nist",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - A NIST framework providing voluntary guidance for managing risks associated with artificial intelligence systems. It describes functions and practices for governing, mapping, measuring and managing AI risk.

- ### Semantic Classification
  - owl-class:: standards:NISTAIRiskManagementFramework
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - A NIST framework providing voluntary guidance for managing risks associated with artificial intelligence systems. It describes functions and practices for governing, mapping, measuring and managing AI risk.
  - Topic area: AI risk management.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
