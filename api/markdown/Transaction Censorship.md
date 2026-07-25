public:: true

# Transaction Censorship

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:transaction-censorship", "@type":"Page", "title":"Transaction Censorship", "vc:slug":"transaction-censorship", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:transaction-censorship",
  "@type":"Class",
  "label":"Transaction Censorship",
  "definition":"Transaction censorship is the selective exclusion or delay of specific transactions from a blockchain by miners, validators, or block builders, typically to comply with sanctions lists, extract value, or suppress particular users or protocols. It undermines a blockchain's censorship-resistance guarantees and can arise from regulatory pressure on centralised infrastructure such as relays or MEV builders, or from validator cartels acting in concert. Its severity depends on the degree of validator or mining centralisation, since a sufficiently decentralised set of block producers makes sustained censorship costly to coordinate. Mitigations include inclusion lists, proposer-builder separation, and encrypted mempools.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:censorship-resistance","label":"Censorship Resistance"}],
  "relations":{}
}
```

- ### Definition
	- Transaction censorship is the selective exclusion or delay of specific transactions from a blockchain by miners, validators, or block builders, typically to comply with sanctions lists, extract value, or suppress particular users or protocols. It undermines a blockchain's censorship-resistance guarantees and can arise from regulatory pressure on centralised infrastructure such as relays or MEV builders, or from validator cartels acting in concert. Its severity depends on the degree of validator or mining centralisation, since a sufficiently decentralised set of block producers makes sustained censorship costly to coordinate. Mitigations include inclusion lists, proposer-builder separation, and encrypted mempools.
- ### Relationships
	- subClassOf:: [[Censorship Resistance]]
