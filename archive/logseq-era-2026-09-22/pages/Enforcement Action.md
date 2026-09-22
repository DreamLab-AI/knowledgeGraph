public:: true

# Enforcement Action
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:enforcement-action",
  "@type": "Page",
  "vc:slug": "enforcement-action",
  "title": "Enforcement Action",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:enforcement-action",
  "@type": "Class",
  "label": "Enforcement Action",
  "definition": "An enforcement action is a formal measure taken by a regulatory or supervisory authority against an entity that has violated laws, rules, or licence conditions. It can include fines, cease-and-desist orders, licence revocation, restitution to affected parties, or referral for prosecution. Enforcement actions are the operative mechanism by which consumer-protection and market-conduct regulations are made binding.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:consumer-protection", "label": "Consumer Protection"}, {"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Legal and Regulatory"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An enforcement action is a regulator's formal sanction against a rule violation, the tool used by [[Consumer Protection]] regimes and a constituent of the [[Regulatory Domain]].
- ### Content
  - Actions range from monetary penalties to operating bans and are usually preceded by investigation and notice. Their deterrent and corrective effect underpins the credibility of consumer-protection and financial-conduct frameworks.
