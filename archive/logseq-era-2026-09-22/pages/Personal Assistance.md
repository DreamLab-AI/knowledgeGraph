public:: true

# Personal Assistance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:personal-assistance",
  "@type": "Page",
  "vc:slug": "personal-assistance",
  "title": "Personal Assistance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:personal-assistance",
  "@type": "Class",
  "label": "Personal Assistance",
  "definition": "Personal assistance is an AI application class in which an agent helps an individual accomplish everyday tasks such as scheduling, information lookup, communication, and device or browser control. It combines natural-language understanding with tool use and memory to act on the user's behalf within their personal context. Modern personal assistants increasingly automate multi-step workflows rather than only answering questions.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agents", "label": "Agents"}, {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Personal assistance is an AI application where an agent acts on a user's behalf for daily tasks, supported by general-purpose [[Agents]] and by [[Computer Use and Browser Agents]].
- ### Content
  - These assistants pair language understanding with calendars, email, search, and device APIs, maintaining user context and preferences to personalise actions. As computer-use and browser-control capabilities mature, personal assistance shifts from conversational Q&A toward executing real-world tasks autonomously, raising new requirements for permissioning, privacy, and reliability.
