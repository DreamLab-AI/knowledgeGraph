public:: true

# AI Safety Institute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff8d961a9f4ee081d973ccefa3397b539c027c3d6bd2aa73fb50cda1c4e71131",
  "@type": "Page",
  "vc:slug": "ai-safety-institute",
  "title": "AI Safety Institute",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-alignment",
      "vc:label": "AI Alignment"
    },
    {
      "@id": "urn:visionflow:linked:frontier-ai",
      "vc:label": "Frontier AI"
    },
    {
      "@id": "urn:visionflow:linked:existential-ai-risk",
      "vc:label": "Existential AI Risk"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Safety Institute"
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
  "@id": "urn:ngm:class:ai-safety-institute",
  "@type": "Class",
  "label": "AI Safety Institute",
  "definition": "An AI Safety Institute is a government body established to evaluate and research the safety of advanced AI models. The United Kingdom established the first such institute in 2023, later renamed the AI Security Institute.",
  "domain": "ai-safety",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-safety",
      "label": "AI Safety"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-safety-institute:04928641530e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff8d961a9f4ee081d973ccefa3397b539c027c3d6bd2aa73fb50cda1c4e71131"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Alignment]]",
      "resolved": "urn:visionflow:linked:ai-alignment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Frontier AI]]",
      "resolved": "urn:visionflow:linked:frontier-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Existential AI Risk]]",
      "resolved": "urn:visionflow:linked:existential-ai-risk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
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
  - An AI Safety Institute is a government body established to evaluate and research the safety of advanced AI models. The United Kingdom established the first such institute in 2023, later renamed the AI Security Institute.

- ### Semantic Classification
  - owl-class:: ai-safety:AISafetyInstitute
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[AI Safety]]
  - bridges-to:: [[Frontier AI]], [[Existential AI Risk]]
  - enables:: [[AI Alignment]]

- ### Content
  - An AI Safety Institute is a state-backed organisation tasked with testing and researching the capabilities and risks of frontier AI models and informing policy. The United Kingdom launched its institute around the 2023 AI Safety Summit, with the United States and other governments establishing counterparts.
  - The institutes conduct evaluations of advanced models for dangerous capabilities, develop testing methods and contribute to international coordination on AI risk. The UK body was later renamed the AI Security Institute to reflect a focus on security-relevant risks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
