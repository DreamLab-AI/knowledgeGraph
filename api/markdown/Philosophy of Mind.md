public:: true

# Philosophy of Mind
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:11664385e2d2259500f5d08bba7700061e2ea8c2f1556986cbb2af324e3880bf",
  "@type": "Page",
  "vc:slug": "philosophy-of-mind",
  "title": "Philosophy of Mind",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cognitive-science",
      "vc:label": "Cognitive Science"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:reasoning",
      "vc:label": "Reasoning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Philosophy of Mind"
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
  "@id": "urn:ngm:class:philosophy-of-mind",
  "@type": "Class",
  "label": "Philosophy of Mind",
  "definition": "The branch of philosophy concerned with the nature of mind, consciousness, mental states and their relation to the physical body and brain.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cognitive-science",
      "label": "Cognitive Science"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:philosophy-of-mind:ecc0860bc83b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:11664385e2d2259500f5d08bba7700061e2ea8c2f1556986cbb2af324e3880bf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cognitive Science]]",
      "resolved": "urn:visionflow:linked:cognitive-science",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reasoning]]",
      "resolved": "urn:visionflow:linked:reasoning",
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
  - The branch of philosophy concerned with the nature of mind, consciousness, mental states and their relation to the physical body and brain.

- ### Semantic Classification
  - owl-class:: general:PhilosophyofMind
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cognitive Science]]
  - bridges-to:: [[Reasoning]]
  - requires:: [[Cognitive Science]]
  - enables:: [[Artificial Intelligence]]

- ### Content
  - Philosophy of mind investigates questions about consciousness, intentionality, perception and the relationship between mental and physical phenomena, including the mind-body problem and debates over dualism, physicalism and functionalism. It asks how mental states can have causal effects and what it means for a system to have experiences.
  - The field intersects with cognitive science and artificial intelligence, informing debates about whether machines could have minds, the nature of representation and the limits of computational accounts of cognition.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
