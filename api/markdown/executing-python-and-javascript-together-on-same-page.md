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