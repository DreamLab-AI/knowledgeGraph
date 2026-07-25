public:: true

# Just-In-Time Compilation

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:just-in-time-compilation", "@type": "Page", "title": "Just-In-Time Compilation", "vc:slug": "just-in-time-compilation", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:just-in-time-compilation",
  "@type": "Class",
  "label": "Just-In-Time Compilation",
  "definition": "Just-in-time (JIT) compilation translates code, such as bytecode, an intermediate representation, or a traced computation graph, into native machine code at run time rather than fully ahead of time, allowing the compiler to specialise on the shapes, types and hot paths actually observed during execution. It trades a warm-up compilation cost for the performance of native code plus dynamic optimisation opportunities unavailable to static ahead-of-time compilers. It is used both in general-purpose language runtimes and in machine learning frameworks such as JAX to accelerate numerical computation graphs.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:compiler",
      "label": "Compiler"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      }
    ],
    "enables": [],
    "requires": [],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [],
    "supports": []
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
	- Just-in-time (JIT) compilation translates code, such as bytecode, an intermediate representation, or a traced computation graph, into native machine code at run time rather than fully ahead of time, allowing the compiler to specialise on the shapes, types and hot paths actually observed during execution. It trades a warm-up compilation cost for the performance of native code plus dynamic optimisation opportunities unavailable to static ahead-of-time compilers. It is used both in general-purpose language runtimes and in machine learning frameworks such as JAX to accelerate numerical computation graphs.
- ### Relationships
	- uses:: [[Compiler]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
