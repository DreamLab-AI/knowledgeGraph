public:: true

# Turbine A07

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:page/turbine-a07",
  "@type": "Page",
  "vc:slug": "turbine-a07",
  "title": "Turbine A07",
  "vc:public": true,
  "vc:schemaVersion": 3,
  "vc:outboundWikilinks": [
    { "@id": "urn:owf:linked/geared-turbine", "vc:label": "Geared Turbine" },
    { "@id": "urn:owf:linked/gearbox-a07", "vc:label": "Gearbox A07" }
  ]
}
```

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:individual/turbine-a07",
  "@type": "Individual",
  "label": "Turbine A07",
  "definition": "Position A07 in the example array: an 8 MW geared wind turbine generator on a monopile foundation, string 3, commissioned 2021. This is an ABox individual, a real machine in the operator's data lake, and the subject that SCADA telemetry, CMMS work orders and warranty records attach to.",
  "domain": "asset-engineering",
  "instanceOf": [
    { "@id": "urn:owf:class/geared-turbine", "label": "Geared Turbine" }
  ],
  "relations": {
    "partOf": [
      { "@id": "urn:owf:individual/array-string-3", "label": "Array String 3" }
    ],
    "hasPart": [
      { "@id": "urn:owf:individual/gearbox-a07", "label": "Gearbox A07" }
    ],
    "standardizedBy": [
      { "@id": "urn:owf:class/iec-61400-1", "label": "IEC 61400-1" }
    ]
  },
  "sameAs": [
    { "@id": "urn:owf:asset-registry/WTG-000047", "label": "Asset registry WTG-000047" }
  ],
  "grounding": {
    "sources": [
      {
        "dataset": "scada.turbine_10min",
        "locator": "wtg_id=A07",
        "query": "SELECT gearbox_oil_temp, gen_rpm, active_power FROM scada.turbine_10min WHERE wtg_id = 'A07'",
        "retrievedAt": "2026-07-24T06:00:00Z"
      },
      {
        "dataset": "cmms.work_orders",
        "locator": "asset_no=OWF-A07",
        "query": "SELECT * FROM cmms.work_orders WHERE asset_no = 'OWF-A07'",
        "retrievedAt": "2026-07-24T06:00:00Z"
      }
    ],
    "method": "extracted",
    "confidence": 0.98
  },
  "provenance": {
    "attributedTo": "did:nostr:owf-ingest",
    "generatedAt": "2026-07-24T06:05:00Z",
    "inferenceRule": "LakeExtraction"
  }
}
```

- ### Definition
  - Turbine A07 is one physical machine, an instance of [[Geared Turbine]]. It carries no `subClassOf`: individuals sit in the ABox and relate to the TBox through `instanceOf`, not subsumption.
- ### Content
  - Every fact here is traceable. `grounding.method` is `extracted`, and the two sources name the datasets and the exact locators the values came from (`wtg_id=A07` in SCADA, `asset_no=OWF-A07` in the CMMS). An extracted individual with an empty `sources` array is the defect the grounding gate rejects.
  - `sameAs` is genuine identity: the asset-registry IRI and this individual denote the one machine, so `owl:sameAs` is correct. It carries no `quality` field. The reference corpus this playbook draws from has zero individuals; the ABox is the v3 addition, and it is what binds the concept graph to the operator's lake.
