public:: true

# Methane Abatement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:methane-abatement",
  "@type": "Page",
  "vc:slug": "methane-abatement",
  "title": "Methane Abatement",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:methane-abatement",
  "@type": "Class",
  "label": "Methane Abatement",
  "definition": "Methane abatement is the set of techniques for capturing, destroying, or preventing the release of methane, a greenhouse gas with roughly 80 times the near-term warming potential of carbon dioxide. Approaches include flaring, combustion in engines or turbines, and conversion of otherwise-vented or flared gas into useful energy. In the Bitcoin context it underpins the use of stranded or waste methane to power mining as an emissions-reduction strategy.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stranded-energy-monetisation", "label": "Stranded Energy Monetisation"},
      {"@id": "urn:ngm:class:bitcoin-environmental-issues", "label": "Bitcoin Environmental Issues"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Methane abatement captures, combusts, or otherwise prevents the venting of methane, a potent greenhouse gas. It links to [[Stranded Energy Monetisation]] and is raised in debates over [[Bitcoin Environmental Issues]].
- ### Content
  - Because methane traps far more heat than CO2 over short horizons, combusting it (even without useful work) yields a large net warming reduction. Bitcoin miners deployed at oil wells or landfills can consume vented or flared gas on-site, converting a wasted emission into electricity and an economic incentive to abate.
