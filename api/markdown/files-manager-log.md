schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Filesmanagerlog
legacy_uri:: urn:visionclaw:concept:infrastructure:files-manager-log
public:: true

# files-manager-log
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7cef13a08d9f5274c2b056962e114cb41908edb36b7d2bcef3d3b2e229d08486",
  "@type": "Page",
  "vc:slug": "files-manager-log",
  "title": "files-manager-log",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:files-manager",
      "vc:label": "files-manager"
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
      "vc:value": "sha256-12-1ed083fd4111"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#Filesmanagerlog"
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
      "vc:value": "files-manager-log"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:files-manager-log"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:files-manager-log"
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
    "@id": "urn:visionflow:page:7cef13a08d9f5274c2b056962e114cb41908edb36b7d2bcef3d3b2e229d08486@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:annotation:link-resolutions:files-manager-log:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7cef13a08d9f5274c2b056962e114cb41908edb36b7d2bcef3d3b2e229d08486"
  },
  "vc:resolutions": [
    {
      "raw": "[[files-manager]]",
      "resolved": "urn:visionflow:linked:files-manager",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:7cef13a08d9f5274c2b056962e114cb41908edb36b7d2bcef3d3b2e229d08486@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - files-manager-log is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Filesmanagerlog
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  #+BEGIN_QUERY
  {:title "All files operate log"
   :query [:find (pull ?b [*])
           :in $ ?current-page
           :where
           [?p :block/name ?current-page]
           [?b :block/page ?p]
           [?b :block/content ?content]
           [(!= ?content "")]
          ]
   :inputs ["files-manager"]}
  #+END_QUERY

- ### Provenance
  - sources:: [[files-manager]]
  - migration-date:: 2026-04-26T00:00:00Z
