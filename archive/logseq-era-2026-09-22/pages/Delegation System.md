public:: true

# Delegation System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:delegation-system",
  "@type": "Page",
  "vc:slug": "delegation-system",
  "title": "Delegation System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:delegation-system",
  "@type": "Class",
  "label": "Delegation System",
  "definition": "A delegation system is the governance mechanism by which stakeholders entrust their decision-making or voting power to chosen representatives. In decentralized governance it supports liquid democracy, where delegated authority can be reassigned or revoked at any time, scaling participation without requiring every holder to vote directly. It balances broad legitimacy with the expertise and availability of active delegates.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"},
      {"@id": "urn:ngm:class:tokenomics-governance", "label": "Tokenomics Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A delegation system lets holders assign their voting power to representatives, a core part of [[Decentralized Governance]]. It is also a building block of [[Tokenomics Governance]] models that weight influence by token holdings.
- ### Content
  - Delegation systems define how authority is granted, weighted, and revoked, often via an on-chain delegation registry. They improve voter turnout and decision quality but introduce risks of delegate capture, voter apathy, and concentration of power among a few large delegates.
