public:: true

# Weather Window

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:page/weather-window",
  "@type": "Page",
  "vc:slug": "weather-window",
  "title": "Weather Window",
  "vc:public": true,
  "vc:schemaVersion": 3,
  "vc:outboundWikilinks": [
    { "@id": "urn:owf:linked/met-ocean-forecast", "vc:label": "Met-Ocean Forecast" },
    { "@id": "urn:owf:linked/jack-up-campaign", "vc:label": "Jack-up Campaign" },
    { "@id": "urn:owf:linked/curtailment", "vc:label": "Curtailment" }
  ]
}
```

```json-ld
{
  "@context": "https://owf.example/owf/ns/v3.jsonld",
  "@id": "urn:owf:class/weather-window",
  "@type": "Class",
  "label": "Weather Window",
  "definition": "A bounded period during which forecast met-ocean conditions (significant wave height, wind speed, visibility) stay inside the operating limits required to carry out an offshore task safely, such as turbine access, a heavy lift, or subsea cable work. The same interval is at once an operational constraint on marine access and an opportunity to execute a maintenance intervention, and it closes when any governing limit is forecast to be exceeded.",
  "domain": "marine-operations",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:owf:class/operational-constraint", "label": "Operational Constraint" },
    { "@id": "urn:owf:class/maintenance-opportunity", "label": "Maintenance Opportunity" }
  ],
  "relations": {
    "dependsOn": [
      { "@id": "urn:owf:class/met-ocean-forecast", "label": "Met-Ocean Forecast" }
    ],
    "enables": [
      { "@id": "urn:owf:class/jack-up-campaign", "label": "Jack-up Campaign" }
    ],
    "bridgesTo": [
      { "@id": "urn:owf:class/curtailment", "label": "Curtailment" }
    ]
  },
  "closeMatch": [
    { "@id": "http://www.w3.org/2006/time#Interval", "label": "time:Interval" }
  ],
  "grounding": {
    "sources": [
      {
        "dataset": "standards-library",
        "locator": "bvg-om-guide#weather-window",
        "field": "definition",
        "retrievedAt": "2026-07-25T00:00:00Z"
      }
    ],
    "method": "authored",
    "confidence": 0.9
  },
  "provenance": {
    "attributedTo": "did:nostr:owf-authoring",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "BridgeAuthoring"
  }
}
```

- ### Definition
  - A weather window is the interval where sea state and wind stay under the vessel and task limits long enough to complete an intervention safely.
- ### Content
  - This is a first-class bridge. It carries two `subClassOf` parents on purpose: a reader looking under marine access ([[Operational Constraint]]) and a reader looking under maintenance planning ([[Maintenance Opportunity]]) both expect to find it, and both assertions are true. The two parents sit in different domains, so this is a cross-domain bridge; the validator reports it as `MULTI_PARENT` at info severity, never as a warning, and the pipeline publishes the crossing into `bridges.json`.
  - `grounding.method` is `authored`: the concept is domain knowledge, corroborated by a standards-library definition, not a value extracted from the lake. A specific weather-window occurrence computed from a wave series is a separate Individual, grounded `inferred`. The page carries no `quality` field.
- ### Relationships
  - is-subclass-of:: [[Operational Constraint]]
  - is-subclass-of:: [[Maintenance Opportunity]]
  - depends-on:: [[Met-Ocean Forecast]]
  - enables:: [[Jack-up Campaign]]
  - bridges-to:: [[Curtailment]]
