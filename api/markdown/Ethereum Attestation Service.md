public:: true

# Ethereum Attestation Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ethereum-attestation-service",
  "@type": "Page",
  "vc:slug": "ethereum-attestation-service",
  "title": "Ethereum Attestation Service",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethereum-smart-contract-platform-attestation-service",
  "@type": "Class",
  "label": "Ethereum Attestation Service",
  "definition": "The Ethereum Attestation Service (EAS) is an open, public infrastructure for making on-chain and off-chain attestations about any subject using registered, reusable schemas. Each attestation is a signed, timestamped claim that can be verified, revoked, and composed by other applications. EAS provides a neutral primitive for building reputation systems, identity credentials, and trust layers without a centralised issuer.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Blockchain Network Component"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:reputation-system", "label": "Reputation System"}, {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Ethereum Attestation Service is open infrastructure for making verifiable, schema-based attestations on-chain, supporting [[Reputation System]] designs and [[Digital Identity]] credentials.
- ### Content
  - Attestations are signed claims linked to reusable schemas, enabling composability across applications. Because EAS is permissionless and issuer-neutral, it serves as a foundational trust primitive for reputation, credentialing, and proof-of-membership use cases.
