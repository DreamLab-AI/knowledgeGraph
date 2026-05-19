schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#PEOPLE
legacy_uri:: urn:visionclaw:concept:infrastructure:people
public:: true

# PEOPLE
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:915a945fcae09fe3f3d5d79cfbadc724a3db20e85c0cab78089f28adbbcc9094",
  "@type": "Page",
  "vc:slug": "people",
  "title": "PEOPLE",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:could",
      "vc:label": "Could"
    },
    {
      "@id": "urn:visionflow:owl:class:education-and-ai",
      "vc:label": "Education and AI"
    },
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
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
      "vc:value": "sha256-12-3228497b3d36"
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
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#PEOPLE"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "PEOPLE"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:people"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:people"
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
    "@id": "urn:visionflow:page:915a945fcae09fe3f3d5d79cfbadc724a3db20e85c0cab78089f28adbbcc9094@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:people",
  "@type": "OntologyClass",
  "label": "PEOPLE",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:915a945fcae09fe3f3d5d79cfbadc724a3db20e85c0cab78089f28adbbcc9094"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:915a945fcae09fe3f3d5d79cfbadc724a3db20e85c0cab78089f28adbbcc9094@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "PEOPLE is a concept within the ngm domain.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:people:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:915a945fcae09fe3f3d5d79cfbadc724a3db20e85c0cab78089f28adbbcc9094"
  },
  "vc:resolutions": [
    {
      "raw": "[[Could]]",
      "resolved": "urn:visionflow:owl:class:could",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Education and AI]]",
      "resolved": "urn:visionflow:owl:class:education-and-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:915a945fcae09fe3f3d5d79cfbadc724a3db20e85c0cab78089f28adbbcc9094@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - PEOPLE is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PEOPLE
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # Nick Avis
		- Nick is after a CTO for his new project which is ostensibly training for ultrasound using graphics that are hand made, but it is trending toward GenAI
		- DONE Send a LinkedIn message to catch up soon. Follow up #SHOULD
			- Thanks for the link
		- looks great and to win the STAR at MICCAI it must be good/leading edge
		   I'm still pursuing the opportunity I mentioned to you in Manchester
		- just had a call yesterday with someone I would want to bring back as the medical lead
		- he is interested. Also just awaiting final revenue numbers for 2023
		- so we will see if the OEM goes ahead with their bid once they know our preliminary revenue numbers for 2023.
		   I'm starting to read your book!!
		- really interesting
		- but not got far
			- Need to see if you can benefit from The Growth Company E19 Shared prosperity funds (but needs matched funding and a company in the GM area )
			  Lets catch up soon
		- I'm in Manchester City centre a couple of days a week now
		- so if you are in also lets catch up
  - # Ethan Mollick
  - # Richard Bentall
  - Electricity use micro grids
  - Amonia
  - [Contact – Microturbine Developments](https://microturbinedevelopments.elementor.cloud/contact/)
  - Make him a bespoke microgrid proposal for [[Education and AI]] using [[Large Language Models]]
  - Consider David Leitch at Peak AI for approaching [[Could]]

  - ## Intelligent Ultrasound

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
