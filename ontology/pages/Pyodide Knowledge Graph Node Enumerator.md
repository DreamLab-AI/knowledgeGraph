public:: true

elevatedFrom:: [[Python to list nodes]]
# Pyodide Knowledge Graph Node Enumerator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81",
  "@type": "Page",
  "vc:slug": "pyodide-knowledge-graph-node-enumerator",
  "title": "Pyodide Knowledge Graph Node Enumerator",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Python to list nodes"
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
  "@id": "urn:ngm:class:pyodide-knowledge-graph-node-enumerator",
  "@type": "Class",
  "label": "Pyodide Knowledge Graph Node Enumerator",
  "definition": "Python to list nodes is a Logseq Pyodide script that iterates over all pages in the knowledge graph, filters those with the `public:: true` metadata property, and returns a comma-separated list of public page names. It demonstrates direct integration of Python scripting with the Logseq Plugin API for programmatic knowledge-graph introspection and inventory generation.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:python-to-list-nodes:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:557fa44843510c8a1347f39cc0d676791016c0af649ae68ebfc8990bbedd9c81"
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
  - Python to list nodes is a Logseq Pyodide script that iterates over all knowledge-graph pages, filters those with the `public:: true` metadata property, and returns a comma-separated inventory of public page names. It demonstrates direct Python integration with the Logseq Plugin API for programmatic graph introspection.

- ### Semantic Classification
  - owl-class:: infrastructure:PythonToListNodes
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Knowledge Graph]], [[Knowledge Management]]
  - enables:: [[Information Retrieval]]
  - relatedTo:: [[Semantic Search]], [[Data Governance]]
  - partOf:: [[Software Engineering]]

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
  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
