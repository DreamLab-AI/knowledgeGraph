public:: true

# Templates
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ace24cd426e0e5dd4c0aecb21704a8dc77f058f17b8ca3c9c1e81899be2e9d58",
  "@type": "Page",
  "vc:slug": "templates",
  "title": "Templates",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Templates"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:templates",
  "@type": "Class",
  "label": "Templates",
  "definition": "Templates is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:templates:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ace24cd426e0e5dd4c0aecb21704a8dc77f058f17b8ca3c9c1e81899be2e9d58"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Templates is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Templates
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  ```
		- {{evalparent}}
	  ```
		- {{evalparent}}

  #### Basic Python code block
	  ```python
	  def sayhello():
	    return "Hello World"
	  sayhello()
  - #### Basic Javascript  block
	  ```javascript
	  function sayHello() {
	      return "Hello World"
	  }
	  return sayHello()

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
