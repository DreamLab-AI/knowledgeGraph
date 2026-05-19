public:: true

# Executing all code blocks in a page
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec7d695f288a3969f111824fa4fe55f9c02808e167113821c8d91d0e95a9b650",
  "@type": "Page",
  "vc:slug": "executing-all-code-blocks-in-a-page",
  "title": "Executing all code blocks in a page",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Executing all code blocks in a page"
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
  "@id": "urn:visionflow:annotation:link-resolutions:executing-all-code-blocks-in-a-page:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ec7d695f288a3969f111824fa4fe55f9c02808e167113821c8d91d0e95a9b650"
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
  - Executing all code blocks in a page is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:ExecutingAllCodeBlocksInAPage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - {{evalpage}}
  - ```javascript
	  return Math.random(); //da
	  ```
		- {{evalparent}}
  - ```python
	  # test if var1 still exists
	  global var1
	  def hello2():
	    if var1 == "VAR1":
	      return "var1 has been passed successfully from the previous code block"
	    else:
	      return "var1 did not get passed from the previous code block"
	  hello2()
	  ```
		- {{evalparent}}
  - ```python
	  # test if var1 still exists
	  global var1
	  def hello3():
	    if var1 == "VAR1":
	      return "var1 has been passed successfully from the previous code block"
	    else:
	      return "var1 did not get passed from the previous code block"
	  hello2()

  - ## Javascript code block execution
	  ```
		- {{evalparent}}
  - ## Python multiple code block execution with global variable passing between blocks
  - Note global variable var1 is passed successfully to all the following code blocks
  - ```python
	  from random import random
	  global var1
	  var1="VAR1"
	  def hello():
	    return "Hi " + var1
	  hello()
	  ```
		- {{evalparent}}
  - ```python
	  import sys
	  def run():
	  	return sys.version
	  run()
	  ```
		- {{evalparent}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
