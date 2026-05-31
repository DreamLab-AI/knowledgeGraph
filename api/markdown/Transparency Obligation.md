public:: true

# Transparency Obligation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3b1daca0bbfa53b0e50462ba9923aad54f5fb6090d870fc7ada472ed47aad702",
  "@type": "Page",
  "vc:slug": "transparency-obligation",
  "title": "Transparency Obligation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-regulation",
      "vc:label": "AI Regulation"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Transparency Obligation"
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
  "@id": "urn:ngm:class:transparency-obligation",
  "@type": "Class",
  "label": "Transparency Obligation",
  "definition": "A transparency obligation is a regulatory duty to disclose how a system works or that it is in use, such as informing people when they interact with an AI system or with generated content.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:transparency-obligation:798a62e9e62a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3b1daca0bbfa53b0e50462ba9923aad54f5fb6090d870fc7ada472ed47aad702"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Regulation]]",
      "resolved": "urn:visionflow:linked:ai-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:linked:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
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
  - A transparency obligation is a regulatory duty to disclose how a system works or that it is in use, such as informing people when they interact with an AI system or with generated content.

- ### Semantic Classification
  - owl-class:: metaverse:TransparencyObligation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulatory Compliance]]
  - bridges-to:: [[EU AI Act]], [[Privacy]]
  - requires:: [[AI Regulation]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - Transparency obligations require operators to make certain facts known, for example labelling synthetic media, disclosing automated decision-making or marking interactions with conversational systems. The aim is to let people understand and contest how systems affect them.
  - Such duties appear prominently in AI regulation, including the EU AI Act, and overlap with privacy duties to explain data processing. They connect AI governance to broader regulatory compliance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
