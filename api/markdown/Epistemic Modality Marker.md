public:: true

elevatedFrom:: [[Could]]
# Epistemic Modality Marker
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9582bb145c4bcd2d40cc6be37b396ca7bf78b077c7c52fc129731d2614cafb75",
  "@type": "Page",
  "vc:slug": "epistemic-modality-marker",
  "title": "Epistemic Modality Marker",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dialogue-systems",
      "vc:label": "Dialogue Systems"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Could"
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
  "@id": "urn:ngm:class:epistemic-modality-marker",
  "@type": "Class",
  "label": "Epistemic Modality Marker",
  "definition": "Could is a modal verb in English expressing past ability, possibility, permission or polite requests. It functions as the past form of the modal can and as a marker of tentative or hypothetical meaning.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:could:0e031e954a43",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9582bb145c4bcd2d40cc6be37b396ca7bf78b077c7c52fc129731d2614cafb75"
  },
  "vc:resolutions": [
    {
      "raw": "[[Dialogue Systems]]",
      "resolved": "urn:visionflow:linked:dialogue-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
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
  - Could is a modal verb in English expressing past ability, possibility, permission or polite requests. It functions as the past form of the modal can and as a marker of tentative or hypothetical meaning.

- ### Semantic Classification
  - owl-class:: linguistics:Could
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Natural Language Processing]]
  - bridges-to:: [[Dialogue Systems]]

- ### Content
  - Could is an auxiliary modal verb used to indicate past ability, as in she could swim, and to express possibility or uncertainty, as in it could rain. It also softens requests and suggestions, giving expressions such as could you help a polite, tentative quality.
  - Modal verbs like could carry no inflection for person or number and combine with a bare infinitive. Their meanings are central to how natural language processing systems interpret intent, conditionality and politeness in dialogue.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
