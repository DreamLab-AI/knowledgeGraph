public:: true

# Decision Making
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f73f72fc78aeafdfd6e7be9915174cecbcacf1c5e6044e55b7ac550ac8b3f62d",
  "@type": "Page",
  "vc:slug": "decision-making",
  "title": "Decision Making",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
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
      "vc:value": "Decision Making"
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
  "@id": "urn:ngm:class:decision-making",
  "@type": "Class",
  "label": "Decision Making",
  "definition": "Decision making is the cognitive and computational process of selecting a course of action from a set of alternatives based on available information and objectives.",
  "domain": "cognitive-science",
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
  "@id": "urn:visionflow:annotation:link-resolutions:decision-making:8de65c884945",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f73f72fc78aeafdfd6e7be9915174cecbcacf1c5e6044e55b7ac550ac8b3f62d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
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
  - Decision making is the cognitive and computational process of selecting a course of action from a set of alternatives based on available information and objectives.

- ### Semantic Classification
  - owl-class:: cognitive-science:DecisionMaking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Reinforcement Learning]], [[Behavioural Economics]]

- ### Content
  - Decision making is studied in cognitive psychology, economics, and artificial intelligence. Normative models such as expected utility theory describe optimal choices, while behavioural research documents systematic deviations from these models.
  - In artificial intelligence, sequential decision making under uncertainty is formalised through Markov decision processes and addressed by reinforcement learning, which optimises actions to maximise long-term reward.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
