iri:: http://narrativegoldmine.com/ontology#PythonToBuildRAGDataPage
uri:: urn:visionclaw:concept:artificial-intelligence:python-to-build-rag-data-page
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:python-to-build-rag-data-page
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Python to build RAG data page
content-hash:: sha256-12-2f40aa1b9760
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Python to build RAG data page is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:PythonToBuildRAGDataPage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Note Python will load the first time this block is evaluated
  - ```python
	  import re
	  import js
	  def clean_text(text):
	      # Remove URLs starting with http or https
	      text = re.sub(r'http\S+', '', text)
	      # Remove unwanted characters: - [ ] ( ) * { }
	      text = re.sub(r'[-\[\]()\*{}]', '', text)
	      # Remove double square brackets [[...]]
	      text = re.sub(r'\[\[|\]\]', '', text)
	      return text
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
	  def load_page_content(page_name):
	      try:
	          blocks = js.logseq.api.get_page_blocks_tree(page_name)
	          content = "\n".join([block.content for block in blocks])
	          return content
	      except Exception as e:
	          js.logseq.api.show_msg(f"Error in load_page_content: {e}", {'timeout': 5000})
	          return ""
	  def ensure_fullrag_page_exists():
	      try:
	          fullrag_page = js.logseq.api.get_page("FULLRAG")
	          if fullrag_page is None:
	              js.logseq.api.create_page("FULLRAG", {"title": "FULLRAG"}, {"createFirstBlockIfNotFound": True})
	          return True
	      except Exception as e:
	          js.logseq.api.show_msg(f"Error in ensure_fullrag_page_exists: {e}", {'timeout': 5000})
	          return False
	  def append_to_fullrag(content):
	      try:
	          js.logseq.api.append_block_in_page("FULLRAG", content)
	          js.logseq.api.show_msg("Content appended successfully to FULLRAG.", {'timeout': 5000})
	      except Exception as e:
	          js.logseq.api.show_msg(f"Error in append_to_fullrag: {e}", {'timeout': 5000})
	  def process_all_public_pages():
	      public_pages = list_public_pages()
	      if not public_pages:
	          return "No public pages found."
	      for public_page_name in public_pages:
	          content = load_page_content(public_page_name)
	          if not content:
	              js.logseq.api.show_msg(f"Could not load content from {public_page_name}.", {'timeout': 5000})
	              continue
	          cleaned_content = clean_text(content)
	          if ensure_fullrag_page_exists():
	              append_to_fullrag(f"# {public_page_name}\n\n{cleaned_content}\n\n")
	          else:
	              return "Could not ensure FULLRAG page exists."
	      return "Processed and added content from all public pages to FULLRAG."
	  def main():
	      result = process_all_public_pages()
	      return result
	  # Execute the main function
	  main()

  ## Python code block execution
	  ```
		- {{evalparent}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
