public:: true

# Content Curation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:05cd35c371029c94e3e1bf498a457b3640d56b822414f21ed1e4cbf097708437",
  "@type": "Page",
  "vc:slug": "content-curation",
  "title": "Content Curation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:content-creation",
      "vc:label": "Content Creation"
    },
    {
      "@id": "urn:visionflow:linked:information-management",
      "vc:label": "Information Management"
    },
    {
      "@id": "urn:visionflow:linked:recommendation-system",
      "vc:label": "Recommendation System"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:content-curation",
  "@type": "Class",
  "label": "Content Curation",
  "definition": "The practice of discovering, selecting, contextualising, and organising existing content for a particular audience, in contrast to producing new material. Content curation adds value through judgement—filtering signal from an overwhelming volume of published media, sequencing items into coherent collections, and annotating them with commentary or provenance—whether performed by human editors, algorithmic recommendation systems, or hybrid pipelines that combine both.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:information-management",
    "label": "Information Management"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:content-creation",
        "label": "Content Creation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Content Moderation"
      },
      {
        "@id": "urn:ngm:class:data-curation",
        "label": "Data Curation"
      },
      {
        "@id": "urn:ngm:class:attention-economy",
        "label": "Attention Economy"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The practice of discovering, selecting, contextualising, and organising existing content for a particular audience, in contrast to producing new material. Content curation adds value through judgement—filtering signal from an overwhelming volume of published media, sequencing items into coherent collections, and annotating them with commentary or provenance—whether performed by human editors, algorithmic recommendation systems, or hybrid pipelines that combine both."

- ### Semantic Classification
  - owl-class:: data:ContentCuration
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Information Management]]
  - contrasts-with:: [[Content Creation]]
  - uses:: [[Recommendation System]]

- ### Content

  ## Definition

  **Content curation** is the counterpart to [[Content Creation]]: where creation produces new artefacts, curation selects, arranges, and frames artefacts that already exist. The curator's raw material is the published corpus—articles, videos, papers, posts, products—and the output is a filtered, ordered, annotated view of it: a newsletter digest, a playlist, a museum exhibition, a reading list, a "for you" feed. The two practices are opposed in method but symbiotic in effect; creation without curation drowns in its own volume, and curation without creation has nothing to select.

  The value curation adds is judgement under abundance. Selection asserts that these items, out of millions, deserve attention; sequencing gives them narrative or pedagogical order; contextualisation—commentary, comparison, provenance—tells the audience why each item matters and how much to trust it. This editorial layer is what distinguishes curation from mere aggregation, which collects without discriminating. In knowledge-work settings curation shades into [[Data Curation]] and knowledge management: maintaining a team's canonical sources, pruning stale material, and surfacing the authoritative version among near-duplicates.

  At platform scale, curation is performed algorithmically. A [[Recommendation System]] is industrialised curation: it ranks a catalogue against a model of each user's interests, replacing one editor's judgement for many readers with per-user selection at machine speed. Hybrid models are now the norm—human editors set policy, define collections, and handle high-stakes surfaces, while algorithms personalise within those boundaries. Curation also borders [[Content Moderation]], which removes impermissible content; curation decides what to *elevate*, moderation decides what may *remain*.

  ## Current Landscape

  Generative AI has sharply raised curation's importance. As the marginal cost of producing plausible content approaches zero, the scarce resource shifts from production capacity to trustworthy selection—audiences increasingly pay (in money or attention) for filtering, not output. Curated newsletters, expert round-ups, and provenance-verified feeds have grown precisely because synthetic volume has exploded, and platforms have begun labelling or down-ranking unverified synthetic media, folding authenticity signals into curatorial ranking.

  The unresolved tensions are economic and epistemic. Algorithmic curation optimised for engagement can amplify sensational material—the central critique of the attention economy—prompting regulatory interest in feed transparency, notably the EU Digital Services Act's provisions on recommender systems. Meanwhile the boundary between curating and republishing keeps copyright questions live: curation depends on linking, excerpting, and framing others' work, and the licensing settlement between publishers, platforms, and AI aggregators remains in flux.
