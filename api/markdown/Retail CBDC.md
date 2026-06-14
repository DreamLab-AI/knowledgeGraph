public:: true

# Retail CBDC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:retail-cbdc",
  "@type": "Page",
  "vc:slug": "retail-cbdc",
  "title": "Retail CBDC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:retail-cbdc",
  "@type": "Class",
  "label": "Retail CBDC",
  "definition": "A retail central bank digital currency (CBDC) is a digital form of sovereign money issued directly by a central bank for use by the general public in everyday payments. Unlike wholesale CBDCs, which serve interbank settlement, retail CBDCs target consumers and merchants and may use account-based or token-based designs over distributed or centralised ledgers. They aim to provide a public digital payment instrument with central-bank credit safety.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-token-and-asset", "label": "Token and Asset"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"}, {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Retail CBDC is central-bank digital money for public use, a subtype of [[CBDCs]] often supported by a [[Distributed Ledger]] for issuance and settlement.
- ### Content
  - Design choices span account-based versus token-based models, offline capability, and privacy tiers. Retail CBDCs seek to combine the safety of central-bank money with the convenience of digital payments while managing disintermediation risk to commercial banks.
