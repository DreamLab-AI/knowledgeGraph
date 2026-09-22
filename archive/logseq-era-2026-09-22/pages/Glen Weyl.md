public:: true

# Glen Weyl
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:33529e51ab40c77ccff1903c7a2c72be55090121a03a88e2491eea1bb5d8e2e1",
  "@type": "Page",
  "vc:slug": "glen-weyl",
  "title": "Glen Weyl",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:quadratic-funding",
      "vc:label": "Quadratic Funding"
    },
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    },
    {
      "@id": "urn:visionflow:linked:mechanism-design",
      "vc:label": "Mechanism Design"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Glen Weyl"
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
  "@id": "urn:ngm:class:glen-weyl",
  "@type": "Class",
  "label": "Glen Weyl",
  "definition": "Glen Weyl is an economist known for work on mechanism design, quadratic voting and quadratic funding, and the ideas in the book Radical Markets. He founded the RadicalxChange movement.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mechanism-design",
      "label": "Mechanism Design"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
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
  "@id": "urn:visionflow:annotation:link-resolutions:glen-weyl:f6b5f48721bc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:33529e51ab40c77ccff1903c7a2c72be55090121a03a88e2491eea1bb5d8e2e1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Quadratic Funding]]",
      "resolved": "urn:visionflow:linked:quadratic-funding",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mechanism Design]]",
      "resolved": "urn:visionflow:linked:mechanism-design",
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
  - Glen Weyl is an economist known for work on mechanism design, quadratic voting and quadratic funding, and the ideas in the book Radical Markets. He founded the RadicalxChange movement.

- ### Semantic Classification
  - owl-class:: economics:GlenWeyl
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Mechanism Design]]
  - bridges-to:: [[Economics]]
  - enables:: [[Quadratic Funding]]

- ### Content
  - Glen Weyl is an economist and researcher whose work focuses on market and mechanism design aimed at improving social institutions. With co-authors he proposed quadratic voting and quadratic funding and set out broader proposals in the book Radical Markets.
  - He founded RadicalxChange, a movement promoting these ideas, and his proposals on plural funding influenced experiments in decentralised public goods funding. His research links economic theory to concrete mechanisms for collective decision making.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
