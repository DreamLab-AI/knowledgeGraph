public:: true

# EIP Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eip-process",
  "@type": "Page",
  "vc:slug": "eip-process",
  "title": "EIP Process",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eip-process",
  "@type": "Class",
  "label": "EIP Process",
  "definition": "The EIP Process is the governance workflow by which Ethereum Improvement Proposals are submitted, reviewed, and standardised. It defines proposal types (Core, Networking, Interface, ERC, Meta), status stages from Draft through Final, and the role of editors and community review in reaching rough consensus. It is the mechanism through which protocol changes and token standards such as ERC-20 are coordinated across the Ethereum ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Blockchain Governance and Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}, {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The EIP Process is the workflow for proposing, reviewing, and standardising Ethereum Improvement Proposals. It standardises [[Smart Contract]] interfaces such as ERCs and is a working example of [[Decentralized Governance]] of a protocol.
- ### Content
  - Proposals progress through defined statuses, with EIP editors checking formatting and process while the community evaluates technical merit toward rough consensus. The ERC category produces interoperable token and contract standards, while Core EIPs require client implementation and network upgrade coordination to take effect.
