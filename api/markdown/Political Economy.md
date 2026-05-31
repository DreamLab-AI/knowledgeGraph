public:: true

# Political Economy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:01d6018fd8aa14c31f2a816b92b5e09241e8ba4cbd61bddaf066a01627f596d7",
  "@type": "Page",
  "vc:slug": "political-economy",
  "title": "Political Economy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Political Economy"
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
  "@id": "urn:ngm:class:political-economy",
  "@type": "Class",
  "label": "Political Economy",
  "definition": "The study of how political institutions, the political environment, and economic systems interact and influence one another. It examines how power and policy shape the production and distribution of wealth.",
  "domain": "economics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:political-economy:291b0f4fd823",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:01d6018fd8aa14c31f2a816b92b5e09241e8ba4cbd61bddaf066a01627f596d7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Policy]]",
      "resolved": "urn:visionflow:linked:monetary-policy",
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
  - The study of how political institutions, the political environment, and economic systems interact and influence one another. It examines how power and policy shape the production and distribution of wealth.

- ### Semantic Classification
  - owl-class:: economics:PoliticalEconomy
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Economics]]
  - bridges-to:: [[Monetary Policy]]
  - requires:: [[Economics]]
  - enables:: [[Governance]]

- ### Content
  - Political economy combines economics, political science, and sociology to analyse how political and economic forces shape outcomes such as policy, regulation, and the distribution of resources.
  - It is applied to questions ranging from trade and monetary policy to the regulation of new technologies, where the interests of governments, firms, and citizens interact.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
