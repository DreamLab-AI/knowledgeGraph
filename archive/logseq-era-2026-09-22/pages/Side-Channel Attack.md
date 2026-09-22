public:: true

# Side-Channel Attack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:side-channel-attack",
  "@type": "Page",
  "vc:slug": "side-channel-attack",
  "title": "Side-Channel Attack",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:side-channel-attack",
  "@type": "Class",
  "label": "Side-Channel Attack",
  "definition": "A side-channel attack recovers secret information by observing physical or behavioural artefacts of a cryptographic implementation rather than breaking its underlying mathematics. Exploitable channels include timing variation, power consumption, electromagnetic emissions, cache access patterns, and acoustic emanations. It is a critical implementation-level threat that motivates constant-time code and masking countermeasures.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}, {"@id": "urn:ngm:class:cryptography-security-and-privacy", "label": "Cryptography Security and Privacy"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A side-channel attack extracts secrets by measuring physical leakage such as timing, power, or electromagnetic emissions instead of attacking the algorithm directly. It threatens implementations of primitives like a [[Hash Function]] and is a central concern of [[Cryptography Security and Privacy]].
- ### Content
  - Classic examples include timing attacks on modular exponentiation, differential power analysis, and cache-timing attacks such as those underlying Spectre-class vulnerabilities. Defences include constant-time execution, blinding, masking, and noise injection, none of which are visible at the level of the mathematical specification.
