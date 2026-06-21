public:: true

elevatedFrom:: [[Jupyter like behaviour within a page]]
# In-Page Executable Notebook Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a67b6249fbf7b58fb3ed263275af3f1a91636b6e081e18d608b7b4eadd73b6b",
  "@type": "Page",
  "vc:slug": "in-page-executable-notebook-pattern",
  "title": "In-Page Executable Notebook Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Jupyter like behaviour within a page"
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
  "@id": "urn:ngm:class:in-page-executable-notebook-pattern",
  "@type": "Class",
  "label": "In-Page Executable Notebook Pattern",
  "definition": "A knowledge-management pattern that embeds executable code cells with shared global state within a page or document, mimicking the interactive notebook paradigm of Jupyter. Code blocks execute in sequence against a common variable scope, enabling data loading, transformation, and display without leaving the note-taking environment.",
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
      {"@id": "urn:ngm:class:python", "label": "Python"},
      {"@id": "urn:ngm:class:script", "label": "Script"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:jupyter-like-behaviour-within-a-page:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a67b6249fbf7b58fb3ed263275af3f1a91636b6e081e18d608b7b4eadd73b6b"
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
  - A knowledge-management pattern that embeds executable code cells with shared global state within a page or document, mimicking the interactive notebook paradigm of Jupyter. Code blocks execute in sequence against a common variable scope, enabling data loading, transformation, and display without leaving the note-taking environment.

- ### Semantic Classification
  - owl-class:: infrastructure:JupyterLikeBehaviourWithinAPage
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Python]], [[Script]]
  - partOf:: [[Knowledge Management]]
  - relatedTo:: [[Knowledge Graph]]

- ### Content
  - Note use of global variables to pass values between functions
  - ```python
    def loadDatabase():
        global dbdict
        dbdict = {
            "Clients": {
                "ABC Co": {
                    "Address": "13 Harper St, London WC2",
                    "CEO": "Ralph Archer",
                    "Phone": "0732 12435"
                },
                "XYZ Co": {
                    "Address": "200 Finsbury Lane, London E3",
                    "CEO": "James Miller",
                    "Phone": "0726 85786"
                }
            }
        }
        return "Database Loaded"
    loadDatabase()  # remove print
    ```
  - {{evalparent}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
