schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SpatialPresence
legacy_uri:: urn:visionclaw:concept:spatial-computing:spatial-presence
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-b0af1ba624f0"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SpatialPresence"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10063"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Presence"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-presence"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-presence"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8d84cbedc90384ef26d0b429aaa56a1282d166cd7b6e9762734ff00529c9c850@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8d84cbedc90384ef26d0b429aaa56a1282d166cd7b6e9762734ff00529c9c850@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
