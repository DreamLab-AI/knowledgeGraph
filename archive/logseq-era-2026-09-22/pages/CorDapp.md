public:: true

# CorDapp
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cor-dapp",
  "@type": "Page",
  "vc:slug": "cor-dapp",
  "title": "CorDapp",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cor-dapp",
  "@type": "Class",
  "label": "CorDapp",
  "definition": "A CorDapp (Corda Distributed Application) is a distributed application built to run on the R3 Corda enterprise blockchain platform. It bundles the contracts, states, and flows that define shared business logic and the point-to-point messaging that coordinates transactions between participating nodes. CorDapps are the unit of deployment by which enterprises implement permissioned, privacy-preserving workflows on Corda.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:r3-corda", "label": "R3 Corda"}, {"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A CorDapp is a distributed application packaging contracts, states, and flows for the [[R3 Corda]] platform, the delivery mechanism for [[Enterprise Smart Contracts]] on Corda.
- ### Content
  - CorDapps define legal-prose-linked contract code that validates state transitions, the immutable states they govern, and flows that orchestrate the multi-party protocols for proposing and finalising transactions. Corda's notary service prevents double-spends while keeping transaction data shared only with the relevant parties, supporting regulated, privacy-sensitive use cases.
