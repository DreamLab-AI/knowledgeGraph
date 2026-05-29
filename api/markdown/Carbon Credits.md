public:: true

# carbon credits
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:46b71e529574edee68b6551feb12dca23a4e3a7a7df79fb868f6bfffce256b04",
  "@type": "Page",
  "vc:slug": "carbon-credits",
  "title": "carbon credits",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:carbon-credits",
  "@type": "Class",
  "label": "Carbon Credits",
  "definition": "Carbon credits are tradeable instruments, each representing the verified reduction or removal of one tonne of carbon dioxide equivalent (tCO₂e) from the atmosphere, used in both compliance and voluntary markets to incentivise greenhouse gas mitigation. In compliance cap-and-trade systems, regulators issue a capped total of allowances and require regulated emitters to surrender one allowance per tonne emitted, creating a price signal for abatement. Voluntary carbon markets allow organisations to purchase credits from validated offset projects — such as reforestation, renewable energy deployment, or methane capture — to offset residual emissions.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal and Regulatory"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:carbon-offset-trading", "label": "Carbon Offset Trading"},
      {"@id": "urn:ngm:class:carbon-registry", "label": "Carbon Registry"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:carbon-credit-token", "label": "Carbon Credit Token"},
      {"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:environmental-accounting", "label": "Environmental Accounting"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Carbon credits are tradeable instruments, each representing the verified reduction or removal of one tonne of carbon dioxide equivalent (tCO₂e) from the atmosphere, used in both compliance and voluntary markets to incentivise greenhouse gas mitigation. In compliance cap-and-trade systems, regulators issue a capped total of allowances and require regulated emitters to surrender one allowance per tonne emitted, creating a price signal for abatement. Voluntary carbon markets allow organisations to purchase credits from validated offset projects — such as reforestation, renewable energy deployment, or methane capture — to offset residual emissions.

- ### Semantic Classification
  - owl-class:: carbon-credits:Carbon Credits
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Carbon Offset Trading]]
  - relatedTo [[Carbon Registry]]
  - enables [[Carbon Credit Token]]
  - enables [[Carbon Accounting]]
  - supports [[Environmental Accounting]]

- ### Content
  - Carbon credit markets operate through a lifecycle of project development, validation, registration, monitoring and verification, issuance, and retirement. Independent standard bodies — including Verra's Verified Carbon Standard (VCS), Gold Standard, and the American Carbon Registry — define methodologies for quantifying emission reductions and certify projects. Verified credits are registered and assigned unique serial numbers in public registries to prevent double-counting and facilitate transparent trading.
  - The integrity of voluntary carbon markets has faced scrutiny over the additionality and permanence of offset projects: additionality requires that reductions would not have occurred without the carbon finance; permanence requires that stored carbon (e.g. in forests) is not subsequently released. Measurement, reporting, and verification (MRV) standards are evolving to address these concerns, with satellite monitoring and IoT sensor networks improving the scientific rigour of project quantification.
  - Blockchain technology is being applied to carbon markets through tokenised carbon credits (e.g. on-chain carbon credit tokens), which promise greater transparency, fractional ownership, and automated retirement via smart contracts. Projects such as Toucan Protocol and KlimaDAO pioneered on-chain carbon token bridges, though questions around the quality of underlying credits tokenised in early schemes prompted industry debate. Compliance markets — notably the EU Emissions Trading System (EU ETS) — remain the dominant mechanism by volume and carbon price.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
