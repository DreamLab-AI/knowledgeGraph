public:: true

# Hyperledger Aries
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hyperledger-aries",
  "@type": "Page",
  "vc:slug": "hyperledger-aries",
  "title": "Hyperledger Aries",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hyperledger-aries",
  "@type": "Class",
  "label": "Hyperledger Aries",
  "definition": "Hyperledger Aries is an open-source toolkit providing the infrastructure for peer-to-peer interactions, secure messaging, and the exchange of verifiable credentials between decentralised identity agents. It implements DIDComm messaging and credential protocols, sitting above the ledger layer so that agents can issue, hold, and verify credentials independently of any specific blockchain. Aries is commonly paired with Hyperledger Indy as its verifiable-data registry.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hyperledger-indy", "label": "Hyperledger Indy"}],
    "dependsOn": [{"@id": "urn:ngm:class:hyperledger-indy", "label": "Hyperledger Indy"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Hyperledger Aries is an agent toolkit for issuing and verifying credentials over secure DIDComm channels, typically built on top of [[Hyperledger Indy]] as its trust registry.
- ### Content
  - Aries defines wallet, agent, and protocol layers that let identity holders manage credentials off-ledger while anchoring schemas and revocation registries on-ledger. This separation enables interoperable self-sovereign identity ecosystems where any compliant agent can interact regardless of the underlying ledger.
