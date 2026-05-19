public:: true

# Spatial Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8d84cbedc90384ef26d0b429aaa56a1282d166cd7b6e9762734ff00529c9c850",
  "@type": "Page",
  "vc:slug": "spatial-presence",
  "title": "Spatial Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:immersive-experience",
      "vc:label": "Immersive Experience"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:vr-psychology",
      "vc:label": "VR Psychology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10063"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Presence"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spatial-presence",
  "@type": "Class",
  "label": "Spatial Presence",
  "definition": "The psychological state of feeling physically located within a virtual environment, experiencing the sense of \"being there\" despite technological mediation, influenced by place illusion (perceived location), plausibility illusion (believable events), and temporal presence (immediacy of experience).",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:vr-psychology",
      "label": "VR Psychology"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8d84cbedc90384ef26d0b429aaa56a1282d166cd7b6e9762734ff00529c9c850"
  },
  "vc:resolutions": [
    {
      "raw": "[[Immersive Experience]]",
      "resolved": "urn:visionflow:owl:class:immersive-experience",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VR Psychology]]",
      "resolved": "urn:visionflow:owl:class:vr-psychology",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The psychological state of feeling physically located within a virtual environment, experiencing the sense of "being there" despite technological mediation, influenced by place illusion (perceived location), plausibility illusion (believable events), and temporal presence (immediacy of experience).

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialPresence
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[VR Psychology]]
  - enables:: [[Immersive Experience]]

- ### Content

  - #### Contributing Factors
		- High-quality visual graphics
		- Accurate motion tracking
		- Spatial audio environment matching
		- Responsive real-time interactions
		- Compelling narrative engagement
  - #### Research Dimensions
		- Spatial presence (being there)
		- Temporal presence (happening now)
		- Social presence (being together)
		- Plausibility (trueness)
		- Believability (genuineness)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
