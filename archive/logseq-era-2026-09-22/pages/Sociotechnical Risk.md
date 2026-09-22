public:: true

# Sociotechnical Risk
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7927b8835ffff0d25cb9e814a8723aa4a83e5ab4bd208363203ee6a29645e124",
  "@type": "Page",
  "vc:slug": "sociotechnical-risk",
  "title": "Sociotechnical Risk",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:existential-ai-risk",
      "vc:label": "Existential AI Risk"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:ai-risk",
      "vc:label": "AI Risk"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Sociotechnical Risk"
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
  "@id": "urn:ngm:class:sociotechnical-risk",
  "@type": "Class",
  "label": "Sociotechnical Risk",
  "definition": "Sociotechnical risk is the potential for harm arising from the interaction between a technical system and the social context in which it is built and used. In AI it covers harms that emerge from people, institutions and technology together rather than from code alone.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-risk",
      "label": "AI Risk"
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
  "@id": "urn:visionflow:annotation:link-resolutions:sociotechnical-risk:311d126ad500",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7927b8835ffff0d25cb9e814a8723aa4a83e5ab4bd208363203ee6a29645e124"
  },
  "vc:resolutions": [
    {
      "raw": "[[Existential AI Risk]]",
      "resolved": "urn:visionflow:linked:existential-ai-risk",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Risk]]",
      "resolved": "urn:visionflow:linked:ai-risk",
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
  - Sociotechnical risk is the potential for harm arising from the interaction between a technical system and the social context in which it is built and used. In AI it covers harms that emerge from people, institutions and technology together rather than from code alone.

- ### Semantic Classification
  - owl-class:: ai-safety:SociotechnicalRisk
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[AI Risk]]
  - bridges-to:: [[Existential AI Risk]], [[AI Safety]]

- ### Content
  - Sociotechnical risk frames system failures as products of both technical properties and the surrounding human, organisational and societal factors. For AI this includes bias amplification, misuse, labour effects, misinformation and erosion of trust, which cannot be addressed by model engineering alone.
  - Analysing sociotechnical risk involves looking at deployment context, incentives, governance and the distribution of harms across affected groups. The perspective informs AI safety and policy work that treats models as embedded in social systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
