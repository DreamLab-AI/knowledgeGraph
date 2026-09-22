public:: true

# Logistics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:logistics",
  "@type": "Page",
  "vc:slug": "logistics",
  "title": "Logistics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:logistics",
  "@type": "Class",
  "label": "Logistics",
  "definition": "Logistics is the planning, execution, and control of the efficient movement and storage of goods, services, and related information between points of origin and consumption. It encompasses transportation, warehousing, inventory management, order fulfilment, and reverse flows, with the objective of meeting demand at the required service level and lowest total cost. Logistics is a constituent function of supply-chain management and is increasingly mediated by sensor data, real-time tracking, and optimisation algorithms that coordinate multimodal networks under uncertainty.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:process", "label": "Process"}],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:supply-chain-management", "label": "Supply Chain Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:logistics-optimisation", "label": "Logistics Optimization"},
      {"@id": "urn:ngm:class:reverse-logistics", "label": "Reverse Logistics"}
    ]
  },
  "quality": 0.78
}
```

- ### Definition
  - [[Logistics]] is the planning, execution, and control of the movement and storage of goods, services, and information from origin to consumption. It is a [[Process]] spanning transportation, warehousing, inventory, and fulfilment.
- ### Relationships
  - Logistics is a constituent function and is therefore part of [[Supply Chain Management]]. Its efficiency is improved through [[Logistics Optimisation]] techniques, and its scope extends to [[Reverse Logistics]] flows for returns, repair, and recycling.
- ### Content
  - Logistics balances competing objectives of cost, speed, and reliability across transportation modes, inventory positioning, and facility location. The classic trade-off between holding inventory and incurring transportation cost is central to network design.

  - Modern logistics is increasingly data-driven: GPS and IoT sensors provide real-time visibility, while routing, scheduling, and inventory-replenishment algorithms optimise multimodal networks under demand and supply uncertainty. Cold-chain and pharmaceutical logistics add stringent traceability and condition-monitoring requirements.
