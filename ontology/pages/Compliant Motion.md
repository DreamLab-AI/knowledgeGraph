public:: true

# Compliant Motion

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:compliant-motion",
  "@type": "Page",
  "title": "Compliant Motion",
  "vc:slug": "compliant-motion",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compliant-motion",
  "@type": "Class",
  "label": "Compliant Motion",
  "definition": "Compliant motion is robot motion that yields to external contact forces rather than rigidly tracking a predefined trajectory, allowing a manipulator to accommodate unexpected contact, surface irregularities or misalignment. It is achieved through admittance or impedance control, which regulate the relationship between measured force and commanded motion. It is essential for tasks involving physical contact with uncertain environments, such as assembly, polishing and human-robot interaction.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:force-control",
      "label": "Force Control"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Compliant motion is robot motion that yields to external contact forces rather than rigidly tracking a predefined trajectory, allowing a manipulator to accommodate unexpected contact, surface irregularities or misalignment. It is achieved through admittance or impedance control, which regulate the relationship between measured force and commanded motion. It is essential for tasks involving physical contact with uncertain environments, such as assembly, polishing and human-robot interaction.
- ### Relationships
	- subClassOf:: [[Force Control]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
