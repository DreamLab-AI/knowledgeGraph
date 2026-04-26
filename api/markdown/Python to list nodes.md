iri:: http://narrativegoldmine.com/infrastructure#PythonToListNodes
uri:: urn:visionclaw:concept:infrastructure:python-to-list-nodes
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:python-to-list-nodes
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Python to list nodes
content-hash:: sha256-12-26a0f163a8dd
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Python to list nodes is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PythonToListNodes
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
