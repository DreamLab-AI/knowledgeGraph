public:: true

# Market Manipulation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:market-manipulation", "@type":"Page", "title":"Market Manipulation", "vc:slug":"market-manipulation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:market-manipulation",
  "@type":"Class",
  "label":"Market Manipulation",
  "definition":"Market manipulation is the deliberate attempt to interfere with the free and fair operation of a financial market by creating false or misleading appearances of supply, demand or price. It encompasses practices such as spoofing, wash trading, pump-and-dump schemes and the dissemination of false information. As a form of market abuse it is prohibited by securities regulation and undermines price discovery and investor protection.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:market-integrity","label":"Market Integrity"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:market-integrity","label":"Market Integrity"},{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"}],
    "enables":[{"@id":"urn:ngm:class:insider-trading","label":"Insider Trading"}],
    "uses":[{"@id":"urn:ngm:class:front-running","label":"Front Running"}],
    "relatedTo":[{"@id":"urn:ngm:class:insider-trading","label":"Insider Trading"},{"@id":"urn:ngm:class:front-running","label":"Front Running"}],
    "standardizedBy":[{"@id":"urn:ngm:class:securities-regulation","label":"Securities Regulation"}],
    "supports":[{"@id":"urn:ngm:class:market-surveillance","label":"Market Surveillance"}],
    "dependsOn":[{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"}],
    "bridgesTo":[{"@id":"urn:ngm:class:investor-protection","label":"Investor Protection"}],
    "requires":[{"@id":"urn:ngm:class:market-surveillance","label":"Market Surveillance"}],
    "implements":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Market Manipulation]] is the deliberate distortion of supply, demand or price to subvert fair markets, undermining [[Market Integrity]].
- It includes spoofing, wash trading and pump-and-dump schemes and overlaps with [[Insider Trading]] and [[Front Running]].
- It is prohibited under [[Securities Regulation]] and damages [[Price Discovery]] and [[Investor Protection]].
- ### Overview
- Manipulation creates a false or misleading impression of market conditions to induce others to trade on distorted signals.
- Manipulators profit at the expense of honest participants and erode trust in the integrity of markets.
- Modern electronic markets enable rapid, high-volume manipulative strategies that surveillance systems must detect.
- Regulators treat market abuse as a serious offence carrying civil and criminal penalties.
- ### Key aspects
- Trade-based manipulation, such as spoofing and wash trading, fabricates apparent order-book pressure.
- Information-based manipulation spreads false or misleading statements to move prices.
- Pump-and-dump schemes inflate an asset then sell into the induced demand.
- Detection relies on [[Market Surveillance]] analytics over order and trade data.
- ### Applications
- Enforcement of [[Securities Regulation]] and market-abuse regimes.
- Design of [[Market Surveillance]] and anomaly-detection systems.
- Investor-protection policy and exchange rule-making.
- ### Relationships
- subClassOf:: [[Market Integrity]]
- contrastsWith:: [[Market Integrity]]
- contrastsWith:: [[Price Discovery]]
- enables:: [[Insider Trading]]
- uses:: [[Front Running]]
- relatedTo:: [[Insider Trading]]
- relatedTo:: [[Front Running]]
- standardizedBy:: [[Securities Regulation]]
- supports:: [[Market Surveillance]]
- dependsOn:: [[Price Discovery]]
- bridgesTo:: [[Investor Protection]]
- requires:: [[Market Surveillance]]
- implements:: [[Financial Regulation]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
