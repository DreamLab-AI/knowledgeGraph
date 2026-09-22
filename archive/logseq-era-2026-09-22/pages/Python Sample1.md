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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Python Sample1"
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
  "@id": "urn:ngm:class:python-sample1",
  "@type": "Class",
  "label": "Python Sample1",
  "definition": "Python Sample1 is a Logseq Python code block that demonstrates the Logseq Plugin API via Pyodide: it defines helper utilities for inspecting JavaScript objects, appending timestamped entries to a named Logseq page, and searching all pages for a given term using the Logseq search API. The sample illustrates the pattern of bridging Python scripting with the Logseq knowledge-graph API for automated page discovery and log management.",
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
    "relatedTo": [
      {"@id": "urn:ngm:class:code-generation", "label": "Code Generation"},
      {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:python-sample1:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:579caa13453ba9c26588998580d9c68647c3f141100dd94d1c299dd7746731be"
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
  - Python Sample1 is a Logseq Python code block demonstrating the Logseq Plugin API via Pyodide: it defines helper utilities for inspecting JavaScript objects, appending timestamped entries to a named Logseq page, and searching all pages for a given term. The sample illustrates bridging Python scripting with the Logseq knowledge-graph API for automated page discovery and log management.

- ### Semantic Classification
  - owl-class:: infrastructure:PythonSample1
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Knowledge Graph]], [[Knowledge Management]]
  - relatedTo:: [[Code Generation]], [[Information Retrieval]], [[Semantic Search]]
  - partOf:: [[Software Engineering]]

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
