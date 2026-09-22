public:: true

# International Trade

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:international-trade",
  "@type": "Page",
  "title": "International Trade",
  "vc:slug": "international-trade",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:international-trade",
  "@type": "Class",
  "label": "International Trade",
  "definition": "International trade is the exchange of goods, services, and capital across national borders, allowing countries to specialise according to comparative advantage and access markets, inputs, and resources beyond their own economies. It is governed by tariffs, trade agreements, and institutions such as the World Trade Organization, and is recorded in the balance of payments. It is a primary driver of economic growth and global interdependence.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:macroeconomics",
      "label": "Macroeconomics"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:global-trade",
        "label": "Global Trade"
      },
      {
        "@id": "urn:ngm:class:customs",
        "label": "Customs"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:balance-of-payments",
        "label": "Balance of Payments"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:world-trade-organization",
        "label": "World Trade Organization"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:customs",
        "label": "Customs"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      },
      {
        "@id": "urn:ngm:class:gross-domestic-product",
        "label": "Gross Domestic Product"
      },
      {
        "@id": "urn:ngm:class:global-trade",
        "label": "Global Trade"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[International Trade]] is the cross-border exchange of goods, services, and capital between national economies.
  - It lets countries specialise by comparative advantage and reach markets and resources beyond their borders.
  - It is studied within [[Macroeconomics]] and recorded in the [[Balance of Payments]].
- ### Overview
  - Trade arises because countries differ in endowments, technology, and costs, so exchange raises aggregate welfare relative to autarky.
  - Flows are shaped by tariffs, quotas, exchange rates, and agreements, and are overseen multilaterally by the [[World Trade Organization]].
  - Exports and imports feed directly into national accounts and the [[Balance of Payments]].
- ### Key aspects
  - Comparative advantage as the core gains-from-trade principle.
  - Exports, imports, and the resulting trade balance.
  - Tariffs, trade agreements, and customs procedures.
  - Deep linkage to global [[Supply Chain]] networks.
- ### Mechanisms
  - Bilateral and multilateral trade agreements lowering barriers.
  - Customs valuation, classification, and clearance via [[Customs]].
  - Exchange-rate adjustment affecting competitiveness.
  - Dispute settlement under the [[World Trade Organization]].
- ### Applications
  - Driving [[Economic Growth]] through market access and specialisation.
  - Coordinating cross-border [[Supply Chain]] sourcing.
  - Informing trade and industrial policy.
  - Contributing net exports to [[Gross Domestic Product]].
- ### Relationships
  - enables:: [[Economic Growth]]
  - hasPart:: [[Global Trade]]
  - hasPart:: [[Customs]]
  - supports:: [[Supply Chain]]
  - uses:: [[Balance of Payments]]
  - standardizedBy:: [[World Trade Organization]]
  - requires:: [[Customs]]
  - relatedTo:: [[Macroeconomics]]
  - relatedTo:: [[Gross Domestic Product]]
  - relatedTo:: [[Global Trade]]
  - dependsOn:: [[Supply Chain]]
  - partOf:: [[Macroeconomics]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
