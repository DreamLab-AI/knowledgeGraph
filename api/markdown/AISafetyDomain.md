public:: true

# AISafetyDomain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d1a5abeb94ac1d48b58d6eb7241ac18ec85cee9558ced4c33606f960ec222bd",
  "@type": "Page",
  "vc:slug": "aisafety-domain",
  "title": "AISafetyDomain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:existential-ai-risk",
      "vc:label": "Existential AI Risk"
    },
    {
      "@id": "urn:visionflow:linked:sociotechnical-risk",
      "vc:label": "Sociotechnical Risk"
    },
    {
      "@id": "urn:visionflow:linked:ai-alignment",
      "vc:label": "AI Alignment"
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
      "vc:value": "AISafetyDomain"
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
  "@id": "urn:ngm:class:aisafety-domain",
  "@type": "Class",
  "label": "AISafetyDomain",
  "definition": "AISafetyDomain is an ontology grouping for concepts concerned with making artificial intelligence systems safe, aligned and free from unacceptable harm. It organises topics such as alignment, risk and governance.",
  "domain": "ai",
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
        "@id": "urn:ngm:class:existential-ai-risk",
        "label": "Existential AI Risk"
      },
      {
        "@id": "urn:ngm:class:sociotechnical-risk",
        "label": "Sociotechnical Risk"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aisafety-domain:e0a6d0baad21",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1d1a5abeb94ac1d48b58d6eb7241ac18ec85cee9558ced4c33606f960ec222bd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Existential AI Risk]]",
      "resolved": "urn:visionflow:linked:existential-ai-risk",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sociotechnical Risk]]",
      "resolved": "urn:visionflow:linked:sociotechnical-risk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Alignment]]",
      "resolved": "urn:visionflow:linked:ai-alignment",
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
  - AISafetyDomain is an ontology grouping for concepts concerned with making artificial intelligence systems safe, aligned and free from unacceptable harm. It organises topics such as alignment, risk and governance.

- ### Semantic Classification
  - owl-class:: ai-safety:AISafetyDomain
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[AI Safety]]
  - bridges-to:: [[AI Alignment]]
  - enables:: [[Existential AI Risk]], [[Sociotechnical Risk]]

- ### Content
  - AISafetyDomain is a classification node that gathers the concepts associated with AI safety, including alignment, robustness, interpretability, governance and the analysis of catastrophic and sociotechnical risks. It serves as an organising category within the knowledge graph rather than a single technique.
  - Grouping these topics clarifies how technical work on aligning model behaviour relates to institutional and policy efforts to manage risk. It connects research areas such as alignment with broader risk and governance concerns.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
