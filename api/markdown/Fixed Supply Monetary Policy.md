public:: true

# Fixed Supply Monetary Policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fixed-supply-monetary-policy",
  "@type": "Page",
  "vc:slug": "fixed-supply-monetary-policy",
  "title": "Fixed Supply Monetary Policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fixed-supply-monetary-policy",
  "@type": "Class",
  "label": "Fixed Supply Monetary Policy",
  "definition": "A fixed supply monetary policy is a rule embedded in a cryptocurrency protocol that caps the total quantity of units that will ever exist, removing discretionary issuance. By making the maximum supply algorithmically predetermined and credibly enforced by consensus, it produces verifiable scarcity and predictable issuance schedules. Bitcoin's 21-million-coin cap is the canonical example, underpinning narratives of digital scarcity and store of value.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-as-money", "label": "Bitcoin as Money"},
      {"@id": "urn:ngm:class:store-of-value", "label": "Store of Value"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A fixed supply monetary policy caps total issuance by protocol rule, creating credible digital scarcity that supports [[Bitcoin as Money]] and the [[Store of Value]] thesis. It is an [[Economic Mechanism]] enforced by consensus rather than discretion.
- ### Content
  - Fixed-supply schemes typically combine a hard cap with a disinflationary emission curve, such as Bitcoin's periodic halving of block rewards, so that new issuance asymptotically approaches zero. Proponents argue this immunity to discretionary debasement underwrites long-term value, while critics note that a fully fixed supply offers no monetary flexibility to respond to demand shocks or fee-market sustainability after issuance ends.
