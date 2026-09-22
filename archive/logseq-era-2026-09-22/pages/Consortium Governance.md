public:: true

# Consortium Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:consortium-governance",
  "@type": "Page",
  "vc:slug": "consortium-governance",
  "title": "Consortium Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:consortium-governance",
  "@type": "Class",
  "label": "Consortium Governance",
  "definition": "Consortium governance is the model by which a defined group of organisations jointly operates and controls a permissioned blockchain or shared infrastructure. Membership, validator rights, and decision-making authority are restricted to vetted participants who agree to a governing charter. It balances the decentralisation benefits of distributed ledgers with the accountability and access control enterprises require.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Governance and Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}, {"@id": "urn:ngm:class:blockchain-as-a-service", "label": "Blockchain As A Service"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Consortium governance is the joint control model for permissioned ledgers shared among vetted organisations, supporting [[Enterprise Smart Contracts]] and underpinning [[Blockchain as a Service]] offerings.
- ### Content
  - A governing charter defines onboarding, voting weights, validator selection, and upgrade procedures across consortium members. This model suits inter-organisational settlement, supply-chain tracking, and regulated finance where participants need shared infrastructure without ceding control to a fully public network.
