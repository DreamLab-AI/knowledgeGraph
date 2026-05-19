schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#SocialNavigation
legacy_uri:: urn:visionclaw:concept:robotics:social-navigation
public:: true

# Social Navigation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82c986b34ddd2168b9bb34f34b048d53395952e1edf8fcbe1f5377fb06830b12",
  "@type": "Page",
  "vc:slug": "social-navigation",
  "title": "Social Navigation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hri",
      "vc:label": "HRI"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robotics",
      "vc:label": "Mobile Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-76becb6f5e60"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#SocialNavigation"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9008"
    },
    {
      "vc:key": "maturity",
      "vc:value": "emerging"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Navigation"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:robotics:social-navigation"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:social-navigation"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:82c986b34ddd2168b9bb34f34b048d53395952e1edf8fcbe1f5377fb06830b12@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:social-navigation",
  "@type": "Class",
  "label": "Social Navigation",
  "definition": "Robot navigation strategies that account for social norms, human comfort, and contextual appropriateness when moving through human-populated environments.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:social-navigation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:82c986b34ddd2168b9bb34f34b048d53395952e1edf8fcbe1f5377fb06830b12"
  },
  "vc:resolutions": [
    {
      "raw": "[[HRI]]",
      "resolved": "urn:visionflow:linked:hri",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Robotics]]",
      "resolved": "urn:visionflow:linked:mobile-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:82c986b34ddd2168b9bb34f34b048d53395952e1edf8fcbe1f5377fb06830b12@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Robot navigation strategies that account for social norms, human comfort, and contextual appropriateness when moving through human-populated environments.

- ### Semantic Classification
  - owl-class:: robotics:SocialNavigation
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Social Navigation — content pending enrichment.

- ### Provenance
  - sources:: [[HRI]], [[Mobile Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z
