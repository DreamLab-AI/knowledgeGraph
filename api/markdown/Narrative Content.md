schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#NarrativeContent
legacy_uri:: urn:visionclaw:concept:spatial-computing:narrative-content
public:: true

# Narrative Content
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9dbd5fac2a0d14909be1292835e35cdeeaa603bb802643f7a5180607cf732cfc",
  "@type": "Page",
  "vc:slug": "narrative-content",
  "title": "Narrative Content",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:digital-content",
      "vc:label": "Digital Content"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:personalized-virtual-experiences",
      "vc:label": "Personalized Virtual Experiences"
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
      "vc:value": "sha256-12-46246f7b063f"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#NarrativeContent"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9979"
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
      "vc:value": "Narrative Content"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:narrative-content"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:narrative-content"
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
    "@id": "urn:visionflow:page:9dbd5fac2a0d14909be1292835e35cdeeaa603bb802643f7a5180607cf732cfc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:narrative-content",
  "@type": "OntologyClass",
  "label": "Narrative Content",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:digital-content",
      "vc:label": "Digital Content"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:9dbd5fac2a0d14909be1292835e35cdeeaa603bb802643f7a5180607cf732cfc"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9dbd5fac2a0d14909be1292835e35cdeeaa603bb802643f7a5180607cf732cfc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Digital storytelling material that combines video, audio, images, text, and interactive elements to create immersive narrative experiences, enabling audiences to engage with stories through multiple media formats and increasingly through participatory technologies like VR, AR, and interactive video.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:owl:class:personalized-virtual-experiences",
      "vc:label": "Personalized Virtual Experiences"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:narrative-content:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9dbd5fac2a0d14909be1292835e35cdeeaa603bb802643f7a5180607cf732cfc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Content]]",
      "resolved": "urn:visionflow:owl:class:digital-content",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Personalized Virtual Experiences]]",
      "resolved": "urn:visionflow:owl:class:personalized-virtual-experiences",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9dbd5fac2a0d14909be1292835e35cdeeaa603bb802643f7a5180607cf732cfc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Digital storytelling material that combines video, audio, images, text, and interactive elements to create immersive narrative experiences, enabling audiences to engage with stories through multiple media formats and increasingly through participatory technologies like VR, AR, and interactive video.

- ### Semantic Classification
  - owl-class:: spatial-computing:NarrativeContent
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Content]]
  - enables:: [[Personalized Virtual Experiences]]

- ### Content

  - #### Market Context
		- Digital storytelling market valued at USD 10 billion in 2024
		- Projected to reach USD 30 billion by 2032 at 15% CAGR
		- Unity merged with Genvid Technologies for real-time interactive storytelling
		- Interactive videos among top video trends of 2024
  - #### Technologies
		- VR, AR, and MR for immersive narrative experiences
		- Choose-your-own-adventure style branching narratives
		- Clickable hotspots for interactive engagement
		- AI-assisted content creation and personalization
		- Platforms like Klynt and Vimeo interactive features

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
