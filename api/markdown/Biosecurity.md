public:: true

# Biosecurity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:biosecurity",
  "@type": "Page",
  "vc:slug": "biosecurity",
  "title": "Biosecurity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:biosecurity",
  "@type": "Class",
  "label": "Biosecurity",
  "definition": "Biosecurity is the set of policies, practices, and controls aimed at preventing the accidental or deliberate misuse of biological agents, including pathogens, toxins, and biotechnology. It spans laboratory containment, pathogen access controls, dual-use research oversight, and increasingly the governance of AI tools that could lower barriers to engineering dangerous organisms. As a field, it is central to mitigating biological existential and catastrophic risks.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:existential-risk", "label": "Existential Risk"},
      {"@id": "urn:ngm:class:bio-terror", "label": "Bio Terror"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Biosecurity comprises the controls that prevent misuse of biological agents and biotechnology, a key safeguard against [[Existential Risk]] and the parent concern under which [[Bio-Terror]] sits.
- ### Content
  - Measures include physical and personnel containment, regulated access to select agents, oversight of gain-of-function and other dual-use research, and emerging scrutiny of AI models capable of assisting pathogen design. Effective biosecurity blends technical safeguards with international norms and enforcement.
