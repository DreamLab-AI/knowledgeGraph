public:: true

# Demand-Side Response
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:demand-side-response",
  "@type": "Page",
  "vc:slug": "demand-side-response",
  "title": "Demand-Side Response",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:demand-side-response",
  "@type": "Class",
  "label": "Demand-Side Response",
  "definition": "Demand-side response is the adjustment of electricity consumption by end users in reaction to grid signals, time-of-use tariffs, or scarcity events, rather than altering generation. Smart-home and building automation systems shift or curtail loads such as heating, EV charging, and appliances to flatten peaks and exploit cheap or low-carbon periods. It improves grid reliability and lets consumers reduce energy cost and carbon footprint.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:home-assistant", "label": "Home Assistant"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Demand-side response shifts or curtails consumer electricity use in response to grid and price signals. Open automation platforms such as [[Home Assistant]] can implement it by orchestrating smart loads around tariff and carbon-intensity data.
- ### Content
  - Typical actions include pre-heating before a price peak, scheduling EV charging to off-peak windows, and shedding non-critical loads during scarcity. Aggregated across many homes via virtual power plants, demand-side response provides grid services comparable to peaking plants while lowering household bills.
