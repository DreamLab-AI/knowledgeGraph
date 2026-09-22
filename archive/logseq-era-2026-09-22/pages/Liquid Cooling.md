public:: true

# Liquid Cooling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:liquid-cooling",
  "@type": "Page",
  "vc:slug": "liquid-cooling",
  "title": "Liquid Cooling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:liquid-cooling",
  "@type": "Class",
  "label": "Liquid Cooling",
  "definition": "Liquid cooling is a thermal-management technique that removes heat from compute hardware using a circulating liquid coolant, which has far higher heat capacity than air. Implementations include direct-to-chip cold plates and full immersion in dielectric fluid, both enabling higher power densities and lower energy overhead. It is increasingly essential for cooling dense GPU clusters used in AI training and high-performance computing.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-computing-and-cloud", "label": "Computing and Cloud"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}, {"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Liquid cooling circulates coolant to extract heat from servers far more efficiently than air; it is a key part of modern [[Compute Infrastructure]] and contributes to data-centre [[Sustainability]] by lowering cooling energy.
- ### Content
  - Direct-to-chip systems route coolant through cold plates on the hottest components, while immersion submerges entire boards in dielectric fluid. Both reduce Power Usage Effectiveness, enable rack densities beyond air-cooling limits, and allow waste-heat reuse.
