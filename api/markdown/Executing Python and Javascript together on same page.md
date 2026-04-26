iri:: http://narrativegoldmine.com/infrastructure#ExecutingPythonAndJavascriptTogetherOnSamePage
uri:: urn:visionclaw:concept:infrastructure:executing-python-and-javascript-together-on-same-page
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:executing-python-and-javascript-together-on-same-page
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Executing Python and Javascript together on same page
content-hash:: sha256-12-9c73a7609448
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Executing Python and Javascript together on same page is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:ExecutingPythonAndJavascriptTogetherOnSamePage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Code
  - {{runpage}}
  - ```javascript
	  logseq.can_run = "java?";
  - ```javascript
	  logseq.can_run = logseq.kits.pyfun("script");
  - ```javascript
	  alert("Logseq can edit & run: clojure & " + logseq.can_run + " & r-language");

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
