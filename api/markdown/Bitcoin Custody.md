public:: true

# Bitcoin Custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-custody",
  "@type": "Page",
  "vc:slug": "bitcoin-custody",
  "title": "Bitcoin Custody",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-custody",
  "@type": "Class",
  "label": "Bitcoin Custody",
  "definition": "Bitcoin custody is the practice and infrastructure for securely holding the private keys that control bitcoin, spanning self-custody, collaborative custody, and qualified institutional custodians. Approaches differ in how they distribute key control and recovery, using techniques such as multi-signature, hardware security modules, and multi-party computation to balance security against operational availability. Custody design is foundational to wallets, federations, and regulated products such as exchange-traded funds.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:fedimint", "label": "Fedimint"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-etf", "label": "Bitcoin ETF"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Bitcoin custody covers the secure management of keys controlling bitcoin, ranging from self-custody to federated models like [[Fedimint]] and institutional structures that back products such as a [[Bitcoin ETF]].
- ### Content
  - Custody schemes trade off security, recoverability, and convenience. Multi-signature and threshold cryptography spread key control to avoid single points of failure, while qualified custodians add insurance, audits, and regulatory compliance required by institutional and retail investment vehicles.
