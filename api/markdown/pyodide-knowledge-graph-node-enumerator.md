- ### Definition
  - Python to list nodes is a Logseq Pyodide script that iterates over all knowledge-graph pages, filters those with the `public:: true` metadata property, and returns a comma-separated inventory of public page names. It demonstrates direct Python integration with the Logseq Plugin API for programmatic graph introspection.

- ### Semantic Classification
  - owl-class:: infrastructure:PythonToListNodes
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Knowledge Graph]], [[Knowledge Management]]
  - enables:: [[Information Retrieval]]
  - relatedTo:: [[Semantic Search]], [[Data Governance]]
  - partOf:: [[Software Engineering]]

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
  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z