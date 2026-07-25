public:: true

# Project Agora
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:project-agora",
  "@type": "Page",
  "vc:slug": "project-agora",
  "title": "Project Agora",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:project-agora",
  "@type": "Class",
  "label": "Project Agora",
  "definition": "Project Agora is a cross-border wholesale payments initiative led by the Bank for International Settlements with several central banks and private financial institutions. It explores integrating tokenised commercial-bank deposits with tokenised central-bank money on a unified programmable ledger to improve cross-border settlement. It is a flagship experiment in the tokenisation of the monetary and financial system.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cbdc-frameworks", "label": "CBDC Frameworks"},
      {"@id": "urn:ngm:class:hyperledger-iroha", "label": "Hyperledger Iroha"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Project Agora is a BIS-led experiment integrating tokenised commercial-bank deposits with central-bank money on a shared programmable platform for cross-border payments. It relates to [[CBDC Frameworks]] and explores permissioned ledger technology comparable to [[Hyperledger Iroha]].
- ### Content
  - The project tests a unified ledger in which different forms of money coexist as programmable tokens, aiming to reduce friction, cost, and settlement risk in correspondent banking. By combining tokenised deposits and wholesale central-bank money with smart-contract automation, it probes how regulatory compliance, FX, and finality can be embedded directly into the settlement layer.
