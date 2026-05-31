public:: true

# Automata Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:automata-theory",
  "@type": "Page",
  "vc:slug": "automata-theory",
  "title": "Automata Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automata-theory",
  "@type": "Class",
  "label": "Automata Theory",
  "definition": "Automata theory is the branch of theoretical computer science that studies abstract computing machines (automata) and the classes of formal languages they can recognise. It classifies machines such as finite-state automata, pushdown automata, and Turing machines by their computational power, establishing a hierarchy that defines what problems are decidable. The theory provides the formal foundations for compiler design, regular expressions, protocol verification, and model checking.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:formal-methods-domain", "label": "Formal Methods Domain"},
      {"@id": "urn:ngm:class:state-machine", "label": "State Machine"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Automata theory formalises abstract machines and the languages they accept, underpinning [[Formal Methods Domain]] and providing the mathematical model behind the [[State Machine]].
- ### Content
  - The Chomsky hierarchy links automata classes to grammar classes: finite automata recognise regular languages, pushdown automata context-free languages, and Turing machines recursively enumerable languages. These results bound the expressiveness and decidability of computation, informing parsing, verification, and circuit design.
