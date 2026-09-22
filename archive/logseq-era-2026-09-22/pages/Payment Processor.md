public:: true

# Payment Processor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:payment-processor",
  "@type": "Page",
  "vc:slug": "payment-processor",
  "title": "Payment Processor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-processor",
  "@type": "Class",
  "label": "Payment Processor",
  "definition": "A payment processor is a service that handles the transaction lifecycle between a merchant, the customer's payment instrument, and the settlement networks. It authorises, captures, clears, and settles funds while applying fraud checks, currency conversion, and compliance controls. Processors are foundational components of digital payment infrastructure, abstracting card networks, bank rails, and blockchain settlement behind a single integration.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-computing-and-cloud", "label": "Computing and Cloud"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:payment-infrastructure", "label": "Payment Infrastructure"}, {"@id": "urn:ngm:class:digital-payments", "label": "Digital Payments"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A payment processor is a service that routes and settles transactions across card networks and banking rails, forming a core element of [[Payment Infrastructure]] and underpinning [[Digital Payments]].
- ### Content
  - Processors authorise transactions in real time, batch captures for clearing, and settle funds to merchant accounts, while enforcing PCI-DSS compliance and risk scoring. Modern processors expose APIs supporting cards, wallets, account-to-account transfers, and increasingly stablecoin settlement, decoupling merchants from the complexity of underlying financial networks.
