public:: true

# LNP-BP Standards Association
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lnp-bp-standards-association",
  "@type": "Page",
  "vc:slug": "lnp-bp-standards-association",
  "title": "LNP-BP Standards Association",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lnp-bp-standards-association",
  "@type": "Class",
  "label": "LNP-BP Standards Association",
  "definition": "The LNP-BP Standards Association is a non-profit body that develops and maintains specifications for Bitcoin and Lightning Network protocols, most notably the RGB smart-contract system and client-side validation. It curates the LNPBP specification series covering layer-2 and layer-3 constructs that extend Bitcoin without altering its base consensus. The association coordinates the engineers and researchers building these client-side-validated protocols.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client Side Validation"}, {"@id": "urn:ngm:class:btc-layer-3", "label": "BTC Layer 3"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The LNP-BP Standards Association maintains specifications for Bitcoin layer-2/3 protocols, defining [[RGB and Client-Side Validation]] and standardising the [[BTC Layer 3]] constructs built atop Lightning.
- ### Content
  - Its work centres on client-side validation, where contract state is kept and verified off-chain while Bitcoin transactions provide commitment and ordering. By publishing open LNPBP specifications the association enables interoperable RGB asset and smart-contract implementations.
