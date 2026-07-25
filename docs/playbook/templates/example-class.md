public:: true

# Gearbox

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:page/gearbox",
  "@type": "Page",
  "vc:slug": "gearbox",
  "title": "Gearbox",
  "vc:public": true,
  "vc:schemaVersion": 3,
  "vc:outboundWikilinks": [
    { "@id": "urn:owf:linked/turbine-systems", "vc:label": "Turbine Systems" },
    { "@id": "urn:owf:linked/condition-monitoring", "vc:label": "Condition Monitoring" },
    { "@id": "urn:owf:linked/iso-14224", "vc:label": "ISO 14224" }
  ]
}
```

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:class/gearbox",
  "@type": "Class",
  "label": "Gearbox",
  "definition": "A speed-increasing mechanical transmission between a wind turbine's low-speed rotor shaft and its higher-speed generator, typically a multi-stage planetary and helical arrangement. It is a defining subsystem of a geared drivetrain and one of the highest-cost failure modes in offshore fleets, which is why its bearings, gears and lubrication are the focus of dedicated condition monitoring.",
  "domain": "asset-engineering",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:owf:class/turbine-systems", "label": "Turbine Systems" }
  ],
  "relations": {
    "relatedTo": [
      { "@id": "urn:owf:class/condition-monitoring", "label": "Condition Monitoring" }
    ],
    "contrastsWith": [
      { "@id": "urn:owf:class/direct-drive-generator", "label": "Direct-Drive Generator" }
    ],
    "standardizedBy": [
      { "@id": "urn:owf:class/iso-14224", "label": "ISO 14224" }
    ]
  },
  "grounding": {
    "sources": [
      {
        "dataset": "cmms.equipment_taxonomy",
        "locator": "equipment_class=gearbox",
        "field": "equipment_class",
        "retrievedAt": "2026-07-20T00:00:00Z"
      }
    ],
    "method": "extracted",
    "confidence": 0.9
  },
  "provenance": {
    "attributedTo": "did:nostr:owf-authoring",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "SeedAuthoring"
  }
}
```

- ### Definition
  - A gearbox increases rotational speed from a turbine's rotor shaft to the range a generator needs. It is a defining subsystem of a geared drivetrain, so a machine that has one contrasts with a [[Direct-Drive Generator]] design that removes it.
- ### Content
  - The failure taxonomy for a gearbox (gear scuffing, bearing spalling, lubrication loss) is classified against a maintainable-item taxonomy such as [[ISO 14224]]. Vibration and oil-debris signals feed remaining-useful-life estimates through [[Condition Monitoring]], scheduling a major-component exchange before a functional failure.
  - This page is an authored concept, a standard-tier Class. Its `grounding.method` is `authored`: the single source records that the concept maps to a real CMMS equipment-taxonomy code, not that the definition text was extracted from the lake. It carries no `quality` field; quality is derived downstream from relation density and grounding, never asserted by the author.
