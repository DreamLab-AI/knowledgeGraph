public:: true

# JVM Runtime
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:jvm-runtime",
  "@type": "Page",
  "vc:slug": "jvm-runtime",
  "title": "JVM Runtime",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:jvm-runtime",
  "@type": "Class",
  "label": "JVM Runtime",
  "definition": "The JVM runtime is the execution environment provided by the Java Virtual Machine, which loads, verifies and runs platform-independent bytecode. It supplies just-in-time compilation, automatic garbage collection, threading and a security model that isolates executing code. The JVM hosts many languages beyond Java, including Kotlin and Scala, and underpins several enterprise blockchain platforms.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computing-infrastructure", "label": "Computing Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:r3-corda", "label": "R3 Corda"},
      {"@id": "urn:ngm:class:kotlin", "label": "Kotlin"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The JVM runtime is the bytecode execution environment required by [[R3 Corda]] and by JVM languages such as [[Kotlin]], providing JIT compilation, garbage collection and a managed security model.
- ### Content
  - Bytecode verification, adaptive JIT optimisation and generational garbage collection let the JVM deliver near-native performance with strong memory safety. Its mature, portable runtime is the reason permissioned ledgers and large enterprise back ends standardise on it as a deployment target.
