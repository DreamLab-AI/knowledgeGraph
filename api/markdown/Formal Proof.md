public:: true

# Formal Proof
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:formal-proof",
  "@type": "Page",
  "title": "Formal Proof",
  "vc:slug": "formal-proof",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:formal-proof",
  "@type": "Class",
  "label": "Formal Proof",
  "definition": "A formal proof is a rigorous, mathematically precise derivation that establishes a proposition follows from a set of axioms and inference rules, without reliance on informal argument or empirical testing. In distributed systems theory, formal proofs are used to establish results such as impossibility theorems and the correctness of consensus protocols under stated failure and timing assumptions. They provide the strongest available assurance of correctness, distinguishing rigorously proven properties from properties merely tested or believed.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:formal-verification",
      "label": "Formal Verification"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - A formal proof is a rigorous, mathematically precise derivation that establishes a proposition follows from a set of axioms and inference rules, without reliance on informal argument or empirical testing.
  - It is a subclass of [[Formal Verification]].
- ### Content
  - A formal proof is a rigorous, mathematically precise derivation that establishes a proposition follows from a set of axioms and inference rules, without reliance on informal argument or empirical testing. In distributed systems theory, formal proofs are used to establish results such as impossibility theorems and the correctness of consensus protocols under stated failure and timing assumptions. They provide the strongest available assurance of correctness, distinguishing rigorously proven properties from properties merely tested or believed.
