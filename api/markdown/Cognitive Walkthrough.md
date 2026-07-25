public:: true

# Cognitive Walkthrough

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cognitive-walkthrough", "@type":"Page", "title":"Cognitive Walkthrough", "vc:slug":"cognitive-walkthrough", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cognitive-walkthrough",
  "@type": "Class",
  "label": "Cognitive Walkthrough",
  "definition": "A cognitive walkthrough is a usability inspection method in which evaluators step through a task sequence as a first-time user would, at each step asking whether the user would know what to do, would notice the correct action is available, and would correctly interpret the feedback received. Unlike heuristic evaluation, which checks a design against general usability principles, a cognitive walkthrough focuses specifically on learnability for new users performing a defined task. It is typically conducted early in design, using prototypes rather than finished products.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:usability",
      "label": "Usability"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:usability",
        "label": "Usability"
      }
    ]
  },
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
  - A cognitive walkthrough is a usability inspection method in which evaluators step through a task sequence as a first-time user would, at each step asking whether the user would know what to do, would notice the correct action is available, and would correctly interpret the feedback received. Unlike heuristic evaluation, which checks a design against general usability principles, a cognitive walkthrough focuses specifically on learnability for new users performing a defined task. It is typically conducted early in design, using prototypes rather than finished products.
