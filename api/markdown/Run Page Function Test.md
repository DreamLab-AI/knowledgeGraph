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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Run Page Function Test"
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
