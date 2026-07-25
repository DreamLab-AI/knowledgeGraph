public:: true

# OWASP LLM Top 10 2025
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:owasp-llm-top-10-2025",
  "@type": "Page",
  "vc:slug": "owasp-llm-top-10-2025",
  "title": "OWASP LLM Top 10 2025",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:owasp-llm-top-10-2025",
  "@type": "Class",
  "label": "OWASP LLM Top 10 2025",
  "definition": "The OWASP LLM Top 10 2025 is the updated edition of OWASP's ranked list of the most critical security risks for applications built on large language models. It catalogs threats such as prompt injection, sensitive information disclosure, supply-chain vulnerabilities, excessive agency, and improper output handling, with guidance on mitigation. The list is a widely referenced baseline for securing LLM and agentic AI systems.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agents", "label": "Agents"},
      {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The OWASP LLM Top 10 2025 ranks the most critical security risks for LLM applications, providing a baseline that secures [[Agents]] and [[Computer Use and Browser Agents]] against threats like prompt injection.
- ### Content
  - It enumerates risks including prompt injection, sensitive data disclosure, supply-chain compromise, excessive agency, and unsafe output handling, each with mitigation guidance. As agentic systems gain real-world capabilities, the list serves as a shared reference for threat modeling and secure design.
