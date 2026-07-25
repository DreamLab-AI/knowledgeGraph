public:: true

# User-Generated Content

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:user-generated-content", "@type":"Page", "title":"User-Generated Content", "vc:slug":"user-generated-content", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:user-generated-content",
  "@type":"Class",
  "label":"User-Generated Content",
  "definition":"User-generated content (UGC) is media and information created and published by the users of a platform rather than by its operators or professional producers. It encompasses text, images, video, 3D assets, reviews, and virtual-world artefacts contributed by a community. UGC drives engagement and network effects on social and metaverse platforms while creating moderation, rights, and quality-control obligations.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:digital-content","label":"Digital Content"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:platform-economy","label":"Platform Economy"}],
    "hasPart":[{"@id":"urn:ngm:class:digital-content","label":"Digital Content"}],
    "dependsOn":[{"@id":"urn:ngm:class:community","label":"Community"},{"@id":"urn:ngm:class:content-creation","label":"Content Creation"}],
    "enables":[{"@id":"urn:ngm:class:virtual-world","label":"Virtual World"},{"@id":"urn:ngm:class:metaverse","label":"Metaverse"}],
    "requires":[{"@id":"urn:ngm:class:content-moderation","label":"Content Moderation"}],
    "supports":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"}],
    "contrastsWith":[{"@id":"urn:ngm:class:content-creation","label":"Content Creation"}],
    "relatedTo":[{"@id":"urn:ngm:class:platform-economy","label":"Platform Economy"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"},{"@id":"urn:ngm:class:digital-content","label":"Digital Content"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- User-generated content is media produced by a platform's users rather than its operators. It is a form of [[Digital Content]] central to the [[Platform Economy]] and to [[Virtual World]] experiences, sustained by [[Community]] participation.
- ### Overview
- UGC shifts content production from a small set of professionals to the entire user base, fuelling scale, diversity, and network effects.
- It powers social media, marketplaces, wikis, and immersive worlds, where the platform supplies tools and distribution while users supply the substance.
- The model creates value but also distributes responsibility: platforms must govern quality, rights, and safety of contributions they did not author.
- ### Key aspects
- Creation tools and low-friction publishing flows that lower the barrier to [[Content Creation]].
- Identity, reputation, and incentive systems that motivate ongoing contribution from a [[Community]].
- [[Content Moderation]] and policy enforcement to manage harmful or infringing material.
- Rights, licensing, and monetisation arrangements between platforms and creators.
- ### Applications
- Social feeds, reviews, and forums built almost entirely from user contributions.
- [[Metaverse]] and game worlds populated by user-authored 3D assets and experiences.
- Crowdsourced knowledge bases and collaborative documentation.
- Creator economies that share revenue and shape [[User Experience]].
- ### Relationships
- partOf:: [[Platform Economy]]
- hasPart:: [[Digital Content]]
- dependsOn:: [[Community]]
- dependsOn:: [[Content Creation]]
- enables:: [[Virtual World]]
- enables:: [[Metaverse]]
- requires:: [[Content Moderation]]
- supports:: [[User Experience]]
- contrastsWith:: [[Content Creation]]
- relatedTo:: [[Platform Economy]]
- relatedTo:: [[Spatial Computing]]
- relatedTo:: [[Digital Content]]
- ### Provenance
- updated:: 2026-06-15
