schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#PythonSample1
legacy_uri:: urn:visionclaw:concept:infrastructure:python-sample1
public:: true

# Python Sample1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:579caa13453ba9c26588998580d9c68647c3f141100dd94d1c299dd7746731be",
  "@type": "Page",
  "vc:slug": "python-sample1",
  "title": "Python Sample1",
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
      "vc:value": "sha256-12-d497c0bfd670"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#PythonSample1"
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
      "vc:value": "Python Sample1"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:python-sample1"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:python-sample1"
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
    "@id": "urn:visionflow:page:579caa13453ba9c26588998580d9c68647c3f141100dd94d1c299dd7746731be@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:python-sample1",
  "@type": "OntologyClass",
  "label": "Python Sample1",
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
    "@id": "urn:visionflow:page:579caa13453ba9c26588998580d9c68647c3f141100dd94d1c299dd7746731be"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:579caa13453ba9c26588998580d9c68647c3f141100dd94d1c299dd7746731be@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Python Sample1 is a technology infrastructure concept and a type of infrastructure.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:python-sample1:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:579caa13453ba9c26588998580d9c68647c3f141100dd94d1c299dd7746731be"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:579caa13453ba9c26588998580d9c68647c3f141100dd94d1c299dd7746731be@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - PythonSample1 is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PythonSample1
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - ```javascript
  import js
  # Helper function to convert object to a readable format
  def props(title, obj):
      print("---------------------------\n")
      try:
          keys = obj.object_keys()
          vals = obj.object_values()
          output = title + " Objects\n"
          for ctr in range(len(keys)):
              output += f"{str(keys[ctr]): <12}  =>  {str(vals[ctr]): <40}\n"
      except:
          output = "Not an object"
      print(output)
      return output
  # Function to log output to a specific Logseq page
  def log_output(content, clearlog=False):
      import datetime
      output_page = "Execution Log"  # API always uses lower case page names
      if clearlog:
          logpage = js.logseq.api.get_page(output_page.lower())
          blocks = js.logseq.api.get_page_blocks_tree(logpage.uuid)
          for block in blocks:
              js.logseq.api.remove_block(block.uuid)
      js.logseq.api.append_block_in_page(
          output_page,
          str(datetime.datetime.now())[:19] + " => " + content)
      return "Done"
  # Function to list files containing the specified term
  def list_files_containing_term(search_term):
      output = ""
      files_with_term = set()
      # Searching for the term using Logseq's search feature (Python compatible)
      try:
          blocks = js.logseq.api.search(search_term)
          for block in blocks:
              obj_map = block.as_object_map()  # Translate returned block for Python usage
              page_id = obj_map["block/page"]["original-name"]
              files_with_term.add(page_id)
      except Exception as e:
          log_output(f"Error searching: {str(e)}", clearlog=True)
          return "Error while searching"
      for file in files_with_term:
          output += f"{file}\n"
      log_output(output, clearlog=True)
      return output
  # Define the search term
  search_term = "public:: true"
  # Execute the search and log the result
  result = list_files_containing_term(search_term)
  print(result)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
