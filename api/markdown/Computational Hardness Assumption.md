public:: true

# Computational Hardness Assumption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:computational-hardness-assumption",
  "@type": "Page",
  "vc:slug": "computational-hardness-assumption",
  "title": "Computational Hardness Assumption",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computational-hardness-assumption",
  "@type": "Class",
  "label": "Computational Hardness Assumption",
  "definition": "A computational hardness assumption is a conjecture that a particular mathematical problem cannot be solved efficiently by any probabilistic polynomial-time algorithm. Such assumptions, including integer factorisation, the discrete logarithm, and learning-with-errors, are the foundations on which provable security of cryptographic schemes is reduced. If an assumption is broken, every construction whose security reduces to it is compromised.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}, {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A computational hardness assumption conjectures that a problem cannot be solved in polynomial time, providing the basis for security reductions in [[Cryptography]] and constructions such as the [[Digital Signature]].
- ### Content
  - Schemes are proven secure by reducing an attack to solving the underlying hard problem, so a scheme is only as strong as its assumption. Post-quantum cryptography migrates from factorisation and discrete-log assumptions to lattice, code, and isogeny problems believed to resist quantum attack.
