public:: true

# Global Trade
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:030a4d3864c3ebcd3ca53fac0156fab8ea6194d6596525d97329c77c9e1b0e35",
  "@type": "Page",
  "vc:slug": "global-trade",
  "title": "Global Trade",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:international-trade", "vc:label": "International Trade"},
    {"@id": "urn:visionflow:linked:supply-chain", "vc:label": "Supply Chain"},
    {"@id": "urn:visionflow:linked:logistics", "vc:label": "Logistics"},
    {"@id": "urn:visionflow:linked:iso", "vc:label": "ISO"},
    {"@id": "urn:visionflow:linked:economic-growth", "vc:label": "Economic Growth"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:global-trade",
  "@type": "Class",
  "label": "Global Trade",
  "definition": "Global trade is the world-wide system of exchange of goods, services, and intangibles across national borders, viewed as an aggregate: the sum of all international trade flows together with the networks of shipping, finance, standards, and agreements that carry them. Worth roughly one third of world GDP, it is organised increasingly through global value chains in which production stages are distributed across many countries, and it depends on shared technical standards, interoperable logistics, and multilateral rules to keep transaction costs low.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:international-trade",
    "label": "International Trade"
  },
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:iso", "label": "ISO"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"},
      {"@id": "urn:ngm:class:logistics", "label": "Logistics"},
      {"@id": "urn:ngm:class:economic-growth", "label": "Economic Growth"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Global trade is the world-wide system of exchange of goods, services, and intangibles across national borders, viewed as an aggregate: the sum of all international trade flows together with the networks of shipping, finance, standards, and agreements that carry them. Worth roughly one third of world GDP, it is organised increasingly through global value chains in which production stages are distributed across many countries, and it depends on shared technical standards, interoperable logistics, and multilateral rules to keep transaction costs low."

- ### Semantic Classification
  - owl-class:: finance:GlobalTrade
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[International Trade]]
  - depends-on:: [[ISO]]
  - related-to:: [[Supply Chain]]
  - related-to:: [[Logistics]]

- ### Content

  ## Definition

  **Global trade** is [[International Trade]] considered as a single world system rather than as bilateral flows between particular countries: the totality of cross-border exchange in goods, services, and, increasingly, data and intellectual property, together with the physical and institutional infrastructure that carries it. World merchandise trade runs to roughly USD 24 trillion a year with services adding several trillion more — together around a third of world GDP, up from under a fifth in the 1960s. Its growth over the post-war period has been one of the strongest correlates of [[Economic Growth]] and poverty reduction, driven by falling tariffs, containerisation, telecommunications, and the entry of China and the former Soviet bloc into the trading system.

  The modern structure of global trade is the global value chain (GVC): intermediate goods cross borders repeatedly as production stages are located wherever they are most efficient, so that most trade is in components and business services rather than finished products. This makes the multinational [[Supply Chain]] the operational unit of global trade, and makes trade volumes highly sensitive to [[Logistics]] costs and disruptions — a reality demonstrated by the container-freight spike of 2021, the Suez blockage, and Red Sea rerouting. Around 80% of trade by volume moves by sea, which places ports, shipping lanes, and maritime chokepoints at the centre of both commercial and geopolitical analysis.

  Because global trade is exchange among parties who share no single legal system, it runs on standards. Technical standards from [[ISO]] — from the shipping container (ISO 668) and country codes (ISO 3166) to quality and food-safety management systems — plus product identification, customs data models, and Incoterms give traders a common language, compressing the transaction costs that would otherwise fragment the system. Multilateral trade rules and dispute settlement supply the legal counterpart; trade finance, marine insurance, and currency markets the financial one.

  ## Current Landscape

  The consensus description of the present era is not "deglobalisation" but reconfiguration. Trade volumes remain near record levels, yet their pattern is shifting: friend-shoring and de-risking are redirecting flows along geopolitical lines, tariffs and export controls (notably in semiconductors and critical minerals) are back as instruments of statecraft, and industrial policy is reshaping comparative advantage. At the same time services and digital trade are the fastest-growing components, carbon border measures such as the EU's CBAM are attaching climate accounting to trade flows, and supply-chain due-diligence and digital product passport regulation are pushing traceability requirements down through the entire system — making data interoperability the newest layer of trade infrastructure.
