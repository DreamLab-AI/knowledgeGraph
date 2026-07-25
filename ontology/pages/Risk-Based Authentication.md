public:: true

# Risk-Based Authentication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:risk-based-authentication",
  "@type": "Page",
  "vc:slug": "risk-based-authentication",
  "title": "Risk-Based Authentication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-based-authentication",
  "@type": "Class",
  "label": "Risk-Based Authentication",
  "definition": "Risk-based authentication (RBA) is an adaptive security method that adjusts the strength of identity verification based on the assessed risk of a login attempt. It evaluates contextual signals such as device, location, network reputation, and behaviour to decide whether to allow access, require step-up factors, or block the request. RBA balances security and usability by escalating friction only when risk is elevated.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:authentication", "label": "Authentication"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:trust-framework", "label": "Trust Framework"}, {"@id": "urn:ngm:class:identity-provider", "label": "Identity Provider"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Risk-based authentication adapts verification strength to contextual risk signals, enabling a [[Trust Framework]] and supported by an [[Identity Provider]].
- ### Content
  - By scoring device, location, and behavioural signals at sign-in, RBA permits low-friction access for trusted contexts and demands additional factors or denies access when anomalies appear. This reduces account takeover risk without burdening every legitimate user with maximal challenges.
