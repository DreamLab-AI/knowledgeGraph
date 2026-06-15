public:: true

# Common Pool Resources
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:common-pool-resources",
  "@type": "Page",
  "vc:slug": "common-pool-resources",
  "title": "Common Pool Resources",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:common-pool-resources",
  "@type": "Class",
  "label": "Common Pool Resources",
  "definition": "Natural or human-made resources that are non-excludable to a defined community but rival in consumption, meaning one actor's use diminishes availability for others. Classic examples include fisheries, groundwater, pastures, and shared spectrum; digital analogues include shared compute pools and open training datasets. Sustainable governance requires institutions that constrain extraction without full privatisation or state control.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:resource-management",
      "label": "Resource Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:collective-governance",
        "label": "Collective Governance"
      },
      {
        "@id": "urn:ngm:class:polycentric-governance",
        "label": "Polycentric Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:collective-action",
        "label": "Collective Action"
      },
      {
        "@id": "urn:ngm:class:public-goods-funding",
        "label": "Public Goods Funding"
      },
      {
        "@id": "urn:ngm:class:property-rights",
        "label": "Property Rights"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      }
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Common Pool Resources (CPRs) are resources whose consumption by one actor reduces what is available to others (rivalry) but from which it is difficult or costly to exclude potential users (non-excludability). This combination creates the "tragedy of the commons" risk identified by Garrett Hardin (1968): rational individuals will overexploit the resource in the absence of governance mechanisms. Elinor Ostrom's research demonstrated that communities frequently devise effective self-governance institutions — rules, monitoring, and graduated sanctions — that avert this tragedy without recourse to privatisation or state intervention.

- ### Relationships
  - Common Pool Resources require [[Collective Governance]] and, for large-scale or complex systems, [[Polycentric Governance]] with nested decision layers. Their management is a canonical instance of [[Collective Action]], and their sustainable provision intersects with questions of [[Public Goods Funding]] and [[Property Rights]]. Successful CPR governance often generates [[Community Governance]] institutions as a by-product.

- ### Content
  - The concept of common pool resources was popularised by Garrett Hardin's 1968 essay "The Tragedy of the Commons", which argued that shared pasture would inevitably be overgrazed by self-interested herders. Hardin offered only two solutions: privatisation or government regulation. Ostrom's fieldwork — studying Swiss alpine meadows, Japanese forests, Spanish irrigation systems, and New England lobster fisheries — revealed a third path: robust self-governing institutions crafted by the communities themselves.

  - Ostrom's design principles for durable CPR institutions include clearly defined user boundaries, rules adapted to local conditions, collective choice arrangements that include resource users, effective monitoring, graduated sanctions for rule violation, and accessible conflict resolution mechanisms. These principles have been formalised into game-theoretic and computational models that identify when cooperative equilibria are stable. Key variables include resource boundaries, user group size, monitoring costs, and communication opportunities.

  - Digital commons introduce new CPR dynamics. Open-source codebases and shared training datasets exhibit rivalry when compute or contributor attention is scarce. Shared AI compute clusters, federated learning consortia, and decentralised physical infrastructure networks (DePIN) can be modelled as CPRs requiring governance rules analogous to Ostrom's principles. Blockchain-based smart contracts offer mechanisms for automatic enforcement of extraction quotas and contribution requirements.

  - In 2024–2025, AI infrastructure has become a significant CPR arena. Shared GPU clusters governed by academic consortia, open model weights under licensing regimes, and scientific datasets managed by multi-institutional alliances all face classic CPR challenges: how to ensure equitable access, prevent free-riding, sustain contribution, and handle resource exhaustion. Emerging frameworks applying Ostrom's principles to AI resource governance are being developed by institutions including the Alan Turing Institute and AI commons initiatives.