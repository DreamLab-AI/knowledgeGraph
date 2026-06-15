public:: true

# CE Marking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ce-marking",
  "@type": "Page",
  "vc:slug": "ce-marking",
  "title": "CE Marking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ce-marking",
  "@type": "Class",
  "label": "CE Marking",
  "definition": "CE marking is a mandatory conformity mark indicating that a product placed on the European Economic Area market meets the applicable EU health, safety, and environmental protection requirements. For machinery and robots it signals compliance with directives such as the Machinery Regulation, the EMC Directive, and relevant harmonised standards, often supported by a declaration of conformity and technical file. It matters because it is a legal precondition for market access and embeds robot safety standards into commercial deployment.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Safety and Standards"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:declaration-of-conformity", "label": "Declaration of Conformity"},
      {"@id": "urn:ngm:class:technical-file", "label": "Technical File"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:conformity-assessment", "label": "Conformity Assessment"},
      {"@id": "urn:ngm:class:harmonised-standard", "label": "Harmonised Standard"},
      {"@id": "urn:ngm:class:notified-body", "label": "Notified Body"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:market-access", "label": "Market Access"},
      {"@id": "urn:ngm:class:product-commercialisation", "label": "Product Commercialisation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:machinery-regulation", "label": "Machinery Regulation"},
      {"@id": "urn:ngm:class:emc-directive", "label": "EMC Directive"},
      {"@id": "urn:ngm:class:low-voltage-directive", "label": "Low Voltage Directive"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:eu-product-safety-framework", "label": "EU Product Safety Framework"},
      {"@id": "urn:ngm:class:new-approach-directive", "label": "New Approach Directive"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:robot-standard", "label": "Robot Standard"},
      {"@id": "urn:ngm:class:iso-12100", "label": "ISO 12100"},
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ul-certification", "label": "UL Certification"},
      {"@id": "urn:ngm:class:fcc-certification", "label": "FCC Certification"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-standard", "label": "Robot Standard"},
      {"@id": "urn:ngm:class:product-liability", "label": "Product Liability"},
      {"@id": "urn:ngm:class:european-economic-area", "label": "European Economic Area"},
      {"@id": "urn:ngm:class:type-examination", "label": "Type Examination"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:conformite-europeenne", "label": "Conformite Europeenne"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - CE Marking is the EU conformity mark certifying that a product, including machinery and robots, satisfies applicable safety directives, making it a gatekeeping requirement aligned with each relevant [[Robot Standard]].
- ### Content
  - Obtaining the mark involves a conformity assessment that may require notified-body involvement for higher-risk machinery, supported by risk assessment, harmonised-standard compliance, and a technical file. The manufacturer affixes the mark and issues an EU Declaration of Conformity, accepting legal responsibility for the product's safety.
