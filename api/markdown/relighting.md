schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Relighting
legacy_uri:: urn:visionclaw:concept:infrastructure:relighting
public:: true

# relighting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb",
  "@type": "Page",
  "vc:slug": "relighting",
  "title": "relighting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:global-lighting",
      "vc:label": "Global lighting"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-video",
      "vc:label": "AI Video"
    },
    {
      "@id": "urn:visionflow:owl:class:apple",
      "vc:label": "Apple"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:relighting",
      "vc:label": "relighting"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-6a06e388521b"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#Relighting"
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
      "vc:value": "relighting"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:relighting"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:relighting"
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
    "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:relighting",
  "@type": "OntologyClass",
  "label": "relighting",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "relighting is a technology infrastructure concept and a type of infrastructure.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:relighting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Global lighting | Image Based Lighting]]",
      "resolved": "urn:visionflow:linked:global-lighting",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Video]]",
      "resolved": "urn:visionflow:owl:class:ai-video",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Apple]]",
      "resolved": "urn:visionflow:owl:class:apple",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComfyUI]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[relighting]]",
      "resolved": "urn:visionflow:owl:class:relighting",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - relighting is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Relighting
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [[Global lighting | Image Based Lighting]] [[ComfyUI]] [lllyasviel/IC-Light: More relighting! (github.com)](https://github.com/lllyasviel/IC-Light)
  - Relighting [Relight Better than Magnific - Relighting v5 (better UX) | ComfyUI Workflow (openart.ai)](https://openart.ai/workflows/risunobushi/relight-better-than-magnific---relighting-v5-better-ux/nSqO2P2ZmDQGwohEbgl3)
  - [Magnific AI Relight is Worse than Open Source - YouTube](https://www.youtube.com/watch?v=GsJaqesboTo) [[relighting]]
  - https://zju3dv.github.io/IntrinsicAnything/ relighting model
  - [[Apple]] [facial relighting](https://machinelearning.apple.com/research/neural-3d-relightable)
  - [Apple facial relighting](https://machinelearning.apple.com/research/neural-3d-relightable)
  - Relighting [[AI Video]] [[2402.18848] SwitchLight: Co-design of Physics-driven Architecture and Pre-training Framework for Human Portrait Relighting (arxiv.org)](https://arxiv.org/abs/2402.18848)
  - [Beeble AI Lighting for Filmmakers](https://www.beeble.ai/)
  - Relighting [Relight Better than Magnific - Relighting v5 (better UX) | ComfyUI Workflow (openart.ai)](https://openart.ai/workflows/risunobushi/relight-better-than-magnific---relighting-v5-better-ux/nSqO2P2ZmDQGwohEbgl3)
  - [Magnific AI Relight is Worse than Open Source - YouTube](https://www.youtube.com/watch?v=GsJaqesboTo) [[relighting]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
