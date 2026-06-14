public:: true

# Cognitive Psychology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7ed7ef05160ef053e94f1aba5c92030e2cca191f69e971ecb7b2fda7d59e616d",
  "@type": "Page",
  "vc:slug": "cognitive-psychology",
  "title": "Cognitive Psychology",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decision-making",
      "vc:label": "Decision Making"
    },
    {
      "@id": "urn:visionflow:linked:behavioural-economics",
      "vc:label": "Behavioural Economics"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cognitive Psychology"
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
  "@id": "urn:ngm:class:cognitive-psychology",
  "@type": "Class",
  "label": "Cognitive Psychology",
  "definition": "Cognitive psychology is the branch of psychology that studies internal mental processes such as perception, attention, memory, language, and reasoning.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cognitive-psychology:052aa7e19b6a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7ed7ef05160ef053e94f1aba5c92030e2cca191f69e971ecb7b2fda7d59e616d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decision Making]]",
      "resolved": "urn:visionflow:linked:decision-making",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Behavioural Economics]]",
      "resolved": "urn:visionflow:linked:behavioural-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - Cognitive psychology is the branch of psychology that studies internal mental processes such as perception, attention, memory, language, and reasoning.

- ### Semantic Classification
  - owl-class:: psychology:CognitivePsychology
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Decision Making]], [[Behavioural Economics]]

- ### Content
  - Cognitive psychology emerged in the mid-twentieth century as an alternative to behaviourism, treating the mind as an information processing system and using controlled experiments to infer internal representations and operations.
  - Its findings inform fields including human computer interaction, education, and artificial intelligence, and its models of memory, attention, and decision making connect to behavioural economics.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
