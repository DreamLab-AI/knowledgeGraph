schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#RunPageFunctionTest
legacy_uri:: urn:visionclaw:concept:infrastructure:run-page-function-test
public:: true

# Run Page Function Test
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:74caaa830f4500ba47544329ff895c723ed871d65bb77821f6eb8bbb4fcfc3a2",
  "@type": "Page",
  "vc:slug": "run-page-function-test",
  "title": "Run Page Function Test",
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
      "vc:value": "sha256-12-c708429ed82b"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#RunPageFunctionTest"
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
      "vc:value": "Run Page Function Test"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:run-page-function-test"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:run-page-function-test"
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
    "@id": "urn:visionflow:page:74caaa830f4500ba47544329ff895c723ed871d65bb77821f6eb8bbb4fcfc3a2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:run-page-function-test",
  "@type": "OntologyClass",
  "label": "Run Page Function Test",
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
    "@id": "urn:visionflow:page:74caaa830f4500ba47544329ff895c723ed871d65bb77821f6eb8bbb4fcfc3a2"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:74caaa830f4500ba47544329ff895c723ed871d65bb77821f6eb8bbb4fcfc3a2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Run Page Function Test is a concept within the ngm domain.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:run-page-function-test:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:74caaa830f4500ba47544329ff895c723ed871d65bb77821f6eb8bbb4fcfc3a2"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:74caaa830f4500ba47544329ff895c723ed871d65bb77821f6eb8bbb4fcfc3a2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Run Page Function Test is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:RunPageFunctionTest
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - {{runpage}}
  - Note
  - use of global variables to pass values between functions
  - function output accumulated into *output* variable which is displayed in the last code block to show the results of all functions executing
  - ```python
  import js
  global msgno
  msgno=0
  def msg(text):
    global msgno
    global output
    msgno+=1
    output+=str(msgno)+' ' +text+'\n'
  def loadDatabase():
      global dbdict
      global output
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
  loadDatabase()

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
