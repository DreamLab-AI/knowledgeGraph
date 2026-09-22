public:: true

# Mass Customisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mass-customisation",
  "@type": "Page",
  "vc:slug": "mass-customisation",
  "title": "Mass Customisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mass-customisation",
  "@type": "Class",
  "label": "Mass Customisation",
  "definition": "Mass customisation is a production strategy that delivers individually tailored goods or services at costs approaching those of mass production. It combines flexible manufacturing, modular design, and digital configuration so customers can specify variants without sacrificing scale economies. Robotics, additive manufacturing, and data-driven personalisation are key enablers across sectors such as fashion and consumer goods.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:fashion", "label": "Fashion"}, {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Mass customisation produces personalised products at near mass-production cost through flexible, modular, configurable manufacturing. It is applied in domains like [[Fashion]] and made economically viable by the reconfigurability of the [[Industrial Robot]].
- ### Content
  - The model relies on postponement of differentiation, modular product architectures, and automated changeover to handle lot sizes approaching one. Digital twins, configurators, and adaptive robotic cells reduce the cost penalty of variety that previously made bespoke production uneconomic at scale.
