public:: true
alias:: Non-Linear Storytelling

# Non Linear Storytelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:68cf335075b9062694fc0b9abd1aebc4857673c1ab01a0bbc42c09ec971718b3",
  "@type": "Page",
  "vc:slug": "non-linear-storytelling",
  "title": "Non Linear Storytelling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:multiple-endings",
      "vc:label": "Multiple Endings"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:storytelling",
      "vc:label": "Storytelling"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9986"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Non Linear Storytelling"
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
  "@id": "urn:ngm:class:non-linear-storytelling",
  "@type": "Class",
  "label": "Non Linear Storytelling",
  "definition": "The craft and practice of creating narratives where story events can be experienced in multiple sequences through branching paths, player choices, or temporal manipulation, commonly used in video games, interactive fiction, and immersive experiences.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:storytelling",
      "label": "Storytelling"
    }
  ],
  "relations": {},
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
  "@id": "urn:visionflow:annotation:link-resolutions:non-linear-storytelling:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:68cf335075b9062694fc0b9abd1aebc4857673c1ab01a0bbc42c09ec971718b3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Multiple Endings]]",
      "resolved": "urn:visionflow:linked:multiple-endings",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Storytelling]]",
      "resolved": "urn:visionflow:owl:class:storytelling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - The craft and practice of creating narratives where story events can be experienced in multiple sequences through branching paths, player choices, or temporal manipulation, commonly used in video games, interactive fiction, and immersive experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:NonLinearStorytelling
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Storytelling]]
  - enables:: [[Multiple Endings]]
  - bridges-to:: [[Telecollaboration]] (domain: tc) for shared narrative spaces and collaborative storytelling

- ### Content

  - #### Authoring Tools
		- Twine: Free open-source interactive fiction tool
		- Articy Draft: Professional narrative design software
		- Narrat: Game engine for narrative RPGs
		- Ink: Scripting language for branching stories
		- Dialogue System for Unity: Complex branching dialogue
  - #### Notable Examples
		- The Witcher 3: Multiple endings based on player decisions
		- Visual novels: Branching storylines with multiple endings
		- Chrono series: Time travel affecting story outcomes
		- Radiant Historia: Timeline manipulation mechanics

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
