public:: true

# Macroeconomics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c03586b1229f07c1a0b25a412e15f5cf988e85702dd2b59e6fc2de3b095395dc",
  "@type": "Page",
  "vc:slug": "macroeconomics",
  "title": "Macroeconomics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inflation-hedge",
      "vc:label": "Inflation Hedge"
    },
    {
      "@id": "urn:visionflow:linked:inflation",
      "vc:label": "Inflation"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
    },
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Macroeconomics"
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
  "@id": "urn:ngm:class:macroeconomics",
  "@type": "Class",
  "label": "Macroeconomics",
  "definition": "Macroeconomics is the branch of economics that studies the behaviour and performance of an economy as a whole, including output, inflation, unemployment and growth. It examines aggregate variables and the effect of monetary and fiscal policy.",
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
    "enables": [
      {
        "@id": "urn:ngm:class:inflation-hedge",
        "label": "Inflation Hedge"
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
  "@id": "urn:visionflow:annotation:link-resolutions:macroeconomics:8ce1b739de4c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c03586b1229f07c1a0b25a412e15f5cf988e85702dd2b59e6fc2de3b095395dc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Inflation Hedge]]",
      "resolved": "urn:visionflow:linked:inflation-hedge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inflation]]",
      "resolved": "urn:visionflow:linked:inflation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Policy]]",
      "resolved": "urn:visionflow:linked:monetary-policy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
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
  - Macroeconomics is the branch of economics that studies the behaviour and performance of an economy as a whole, including output, inflation, unemployment and growth. It examines aggregate variables and the effect of monetary and fiscal policy.

- ### Semantic Classification
  - owl-class:: economics:Macroeconomics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Economics]]
  - bridges-to:: [[Inflation]], [[Monetary Policy]]
  - enables:: [[Inflation Hedge]]

- ### Content
  - Macroeconomics analyses economy-wide phenomena such as gross domestic product, the price level, employment, interest rates and international trade, and how these aggregates evolve over time. It develops models linking household, firm and government behaviour to outcomes like growth and business cycles.
  - A central concern is how monetary and fiscal policy influence inflation, output and employment, including the role of central banks. The field contrasts with microeconomics, which studies individual agents and markets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
