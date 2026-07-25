public:: true

# Purchasing Power
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:purchasing-power", "@type":"Page", "title":"Purchasing Power", "vc:slug":"purchasing-power", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:purchasing-power",
  "@type":"Class",
  "label":"Purchasing Power",
  "definition":"Purchasing power is the quantity of goods and services that a unit of currency can buy at a given point in time. It declines as prices rise, so it is inversely related to inflation and is commonly tracked through price indices such as the consumer price index. Real purchasing power, adjusted for price changes, is central to comparing incomes, wages and asset values across time and between economies.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:finance","label":"Finance"}],
  "relations":{
    "relatedTo":[{"@id":"urn:ngm:class:inflation","label":"Inflation"},{"@id":"urn:ngm:class:price-stability","label":"Price Stability"},{"@id":"urn:ngm:class:money","label":"Money"}],
    "supports":[{"@id":"urn:ngm:class:price-stability","label":"Price Stability"},{"@id":"urn:ngm:class:financial-system","label":"Financial System"}],
    "dependsOn":[{"@id":"urn:ngm:class:inflation","label":"Inflation"},{"@id":"urn:ngm:class:monetary-policy","label":"Monetary Policy"}],
    "uses":[{"@id":"urn:ngm:class:consumer-price-index","label":"Consumer Price Index"}],
    "partOf":[{"@id":"urn:ngm:class:economics","label":"Economics"}],
    "contrastsWith":[{"@id":"urn:ngm:class:inflation","label":"Inflation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:central-bank","label":"Central Bank"}],
    "requires":[{"@id":"urn:ngm:class:money","label":"Money"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Purchasing Power]] is the real value of [[Money]], expressed as the quantity of goods and services a currency unit can buy.
  - It moves inversely with [[Inflation]] and is a core measure underpinning [[Price Stability]].
  - It is quantified through price indices such as the [[Consumer Price Index]].
- ### Overview
  - Nominal sums say nothing about real wealth without reference to the prices they face; purchasing power supplies that reference.
  - When the general price level rises, each unit of currency commands fewer goods, so purchasing power erodes.
  - Conversely, deflation raises purchasing power, although it carries its own macroeconomic risks.
  - Central banks target low and stable inflation precisely to preserve the purchasing power of the currency they issue.
- ### Key aspects
  - Real versus nominal values: purchasing power isolates the real component by deflating nominal figures by a price index.
  - Cross-time comparison: it allows wages, savings and asset prices to be compared meaningfully across decades.
  - Cross-country comparison: purchasing power parity adjusts exchange rates so that equivalent baskets cost the same.
  - Distributional effects: inflation redistributes purchasing power between debtors, creditors and fixed-income groups.
- ### Applications
  - Indexing pensions, wages and benefits to maintain recipients' real living standards.
  - Setting monetary policy, where preserving purchasing power is a primary mandate of central banks.
  - International comparison of living standards via purchasing power parity in economic statistics.
  - Investment analysis, where real returns net of inflation determine genuine gains.
- ### Relationships
  - relatedTo:: [[Inflation]]
  - relatedTo:: [[Price Stability]]
  - relatedTo:: [[Money]]
  - supports:: [[Price Stability]]
  - supports:: [[Financial System]]
  - dependsOn:: [[Monetary Policy]]
  - uses:: [[Consumer Price Index]]
  - partOf:: [[Economics]]
  - contrastsWith:: [[Inflation]]
  - bridgesTo:: [[Central Bank]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
