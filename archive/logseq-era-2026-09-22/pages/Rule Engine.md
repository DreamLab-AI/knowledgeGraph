public:: true

# Rule Engine

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:rule-engine",
  "@type": "Page",
  "title": "Rule Engine",
  "vc:slug": "rule-engine",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rule-engine",
  "@type": "Class",
  "label": "Rule Engine",
  "definition": "A rule engine is a software component that evaluates a set of declarative if-then rules against input data and executes the associated actions when conditions are met, separating business or policy logic from application code. It is a specialised form of inference engine that applies forward- or backward-chaining evaluation over a rule base rather than general-purpose reasoning. Rule engines underpin automated compliance and policy engine systems, where regulatory or organisational rules must be applied consistently and updated without redeploying software.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:inference-engine",
      "label": "Inference Engine"
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
	- A rule engine is a software component that evaluates a set of declarative if-then rules against input data and executes the associated actions when conditions are met, separating business or policy logic from application code. It is a specialised form of inference engine that applies forward- or backward-chaining evaluation over a rule base rather than general-purpose reasoning. Rule engines underpin automated compliance and policy engine systems, where regulatory or organisational rules must be applied consistently and updated without redeploying software.
- ### Relationships
	- subClassOf:: [[Inference Engine]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
