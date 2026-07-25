public:: true

# Sustainable Bitcoin Certificates
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sustainable-bitcoin-certificates",
  "@type": "Page",
  "vc:slug": "sustainable-bitcoin-certificates",
  "title": "Sustainable Bitcoin Certificates",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sustainable-bitcoin-certificates",
  "@type": "Class",
  "label": "Sustainable Bitcoin Certificates",
  "definition": "Sustainable Bitcoin certificates are tradable attestations that a defined quantity of bitcoin mining was powered by clean or low-carbon energy, allowing holders to claim the environmental attributes of that hashrate. They function analogously to renewable energy certificates, decoupling the green-energy claim from the mined coins so it can be sold to ESG-conscious buyers. The mechanism aims to channel capital toward decarbonising proof-of-work mining.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sustainable-bitcoin-protocol", "label": "Sustainable Bitcoin Protocol"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-environmental-issues", "label": "Bitcoin Environmental Issues"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sustainable Bitcoin certificates are tradable green-energy attestations for mined hashrate, issued under schemes such as the [[Sustainable Bitcoin Protocol]] to address [[Bitcoin Environmental Issues]].
- ### Content
  - Each certificate represents a verified link between a measured amount of bitcoin mining and a quantity of clean electricity, mirroring the renewable energy certificate model used in conventional power markets. By making the environmental attribute separately tradable, the scheme lets sustainability-focused investors fund greener mining without directly operating it. Critics question additionality and double-counting, the same scrutiny applied to carbon-offset and REC markets generally.
