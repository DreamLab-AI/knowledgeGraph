schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#PythonToListNodes
legacy_uri:: urn:visionclaw:concept:infrastructure:python-to-list-nodes
public:: true

# Python to list nodes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81",
  "@type": "Page",
  "vc:slug": "python-to-list-nodes",
  "title": "Python to list nodes",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-26a0f163a8dd"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#PythonToListNodes"
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
      "vc:value": "Python to list nodes"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:python-to-list-nodes"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:python-to-list-nodes"
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
    "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:python-to-list-nodes",
  "@type": "OntologyClass",
  "label": "Python to list nodes",
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
    "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Python to list nodes is a concept within the ngm domain.",
  "vc:qualityScore": {
    "@value": "0.50",
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
  "@id": "urn:visionflow:annotation:link-resolutions:python-to-list-nodes:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Python to list nodes is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PythonToListNodes
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Note Python will load the first time this block is evaluated
  - ```python
  import js
  def list_public_pages():
      try:
          pages = js.logseq.api.get_all_pages()
          public_pages = []
          for page in pages:
              page_name = page.originalName
              # Get the first block of the page which typically contains metadata
              content = js.logseq.api.get_page_blocks_tree(page_name)
              if content and "public:: true" in content[0].content:
                  public_pages.append(page_name)
          return public_pages
      except Exception as e:
          js.logseq.api.show_msg(f"Error in list_public_pages: {e}", {'timeout': 5000})
          return []
  def main():
      public_pages = list_public_pages()
      if public_pages:
          result = ", ".join(public_pages)
      else:
          result = "No public pages found."
      return result
  # Execute the main function
  main()

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
