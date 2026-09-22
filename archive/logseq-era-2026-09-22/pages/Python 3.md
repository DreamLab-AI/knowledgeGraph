public:: true

# Python 3
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:python-3",
  "@type": "Page",
  "vc:slug": "python-3",
  "title": "Python 3",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:python-3",
  "@type": "Class",
  "label": "Python 3",
  "definition": "Python 3 is the current major series of the Python programming language, a high-level, dynamically typed, interpreted language emphasising readability and a large standard library. It is the dominant language for machine learning, data science, automation, and robotics scripting, supported by an extensive ecosystem of scientific and AI packages. Python 3 introduced Unicode-by-default strings and other breaking changes relative to the discontinued Python 2 series.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-operating-system", "label": "Robot Operating System"},
      {"@id": "urn:ngm:class:lang-chain", "label": "LangChain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Python 3 is the current major version of the Python language, widely used across AI, data, and robotics. It is a runtime requirement for frameworks such as [[Robot Operating System]] and [[LangChain]].
- ### Content
  - Its strengths are readability, rapid development, and a rich ecosystem (NumPy, PyTorch, asyncio). Trade-offs include the Global Interpreter Lock limiting CPU-bound threading and interpreter overhead, mitigated in practice by C-extension acceleration and multiprocessing.
