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
  "subClassOf": [{"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Robotic Safety and Standards"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-standard", "label": "Robot Standard"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - CE Marking is the EU conformity mark certifying that a product, including machinery and robots, satisfies applicable safety directives, making it a gatekeeping requirement aligned with each relevant [[Robot Standard]].
- ### Content
  - Obtaining the mark involves a conformity assessment that may require notified-body involvement for higher-risk machinery, supported by risk assessment, harmonised-standard compliance, and a technical file. The manufacturer affixes the mark and issues an EU Declaration of Conformity, accepting legal responsibility for the product's safety.
