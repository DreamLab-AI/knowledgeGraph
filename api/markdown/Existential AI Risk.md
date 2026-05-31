public:: true

# Existential AI Risk
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f73988543bdd716fafa27bf444fa57b98bdb0da2685ecf3d106c5fa8fb57fb6d",
  "@type": "Page",
  "vc:slug": "existential-ai-risk",
  "title": "Existential AI Risk",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:ai-alignment",
      "vc:label": "AI Alignment"
    },
    {
      "@id": "urn:visionflow:linked:existential-risk",
      "vc:label": "Existential Risk"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Existential AI Risk"
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
  "@id": "urn:ngm:class:existential-ai-risk",
  "@type": "Class",
  "label": "Existential AI Risk",
  "definition": "Existential AI risk is the possibility that advanced artificial intelligence could cause human extinction or a permanent, drastic curtailment of humanity's potential. It is a focus of long-term AI safety research and policy debate.",
  "domain": "ai-safety",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:existential-risk",
      "label": "Existential Risk"
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
  "@id": "urn:visionflow:annotation:link-resolutions:existential-ai-risk:ca692eee8a63",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f73988543bdd716fafa27bf444fa57b98bdb0da2685ecf3d106c5fa8fb57fb6d"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Alignment]]",
      "resolved": "urn:visionflow:linked:ai-alignment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Existential Risk]]",
      "resolved": "urn:visionflow:linked:existential-risk",
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
  - Existential AI risk is the possibility that advanced artificial intelligence could cause human extinction or a permanent, drastic curtailment of humanity's potential. It is a focus of long-term AI safety research and policy debate.

- ### Semantic Classification
  - owl-class:: ai-safety:ExistentialAIRisk
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Existential Risk]]
  - bridges-to:: [[AI Safety]], [[AI Alignment]]

- ### Content
  - Existential AI risk concerns scenarios in which highly capable AI systems, if misaligned with human values or beyond human control, could lead to outcomes from which humanity cannot recover. Arguments centre on the difficulty of specifying objectives, the speed of capability gains and the potential for power-seeking behaviour.
  - The topic is contested, with disagreement over probability and timelines, but it motivates work on alignment, control and governance of frontier systems. It is studied alongside nearer-term sociotechnical harms within the broader field of AI safety.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
