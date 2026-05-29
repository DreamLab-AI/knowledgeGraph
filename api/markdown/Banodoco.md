public:: true

# Banodoco
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e4ca09740e7dd1217624da5b054df1b0dcf336eacd3483bfbf221cd3f3c2ec62",
  "@type": "Page",
  "vc:slug": "banodoco",
  "title": "Banodoco",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:owl:class:stable-diffusion",
      "vc:label": "Stable Diffusion"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": ""
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Banodoco"
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
  "@id": "urn:ngm:class:banodoco",
  "@type": "Class",
  "label": "Banodoco",
  "definition": "Banodoco is a community platform focused on open-source AI video generation, bringing together model architects, fine-tuners, engineers, and artists to advance controllable creative AI. It serves as a coordination space for collaborative development of video diffusion models and related tooling under a shared artistic mission.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:video-generation", "label": "Video Generation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:banodoco:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e4ca09740e7dd1217624da5b054df1b0dcf336eacd3483bfbf221cd3f3c2ec62"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stable Diffusion]]",
      "resolved": "urn:visionflow:owl:class:stable-diffusion",
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
  - Banodoco is a community platform focused on open-source AI video generation, bringing together model architects, fine-tuners, engineers, and artists to advance controllable creative AI. It serves as a coordination space for collaborative development of video diffusion models and related tooling under a shared artistic mission.
- ### Semantic Classification
  - owl-class:: spatial-computing:Banodoco
  - owl-role:: Concept
- ### Relationships
  - bridges-to:: [[Digital Twin]]
  - uses:: [[Diffusion Model]], [[Video Generation]]
  - enables:: [[Open-Source AI]]
  - related-to:: [[Spatial Computing]]
- ### Content
  - Here, we aim to bring **architects and fine-tuners** who are creating open source video models, together with **engineers and tinkerers** who are expanding what these technologies can do, and **ambitious artists** who want push the bounds of creative expression with AI. [[Stable Diffusion]]
  - Our hope is that bringing together talented and driven people from these different groups will motivate the open source open source AI art community to be more cohesively driven towards a collective purpose: creating the best tools and technologies for controllable artistic creation with AI:
  ‎[(1423) Discord | #getting-started | banodoco](https://discord.com/channels/1076117621407223829/1148315179336081478)
  ## **Welcome to Banodoco!**
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
