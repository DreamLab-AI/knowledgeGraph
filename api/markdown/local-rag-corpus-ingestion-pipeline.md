- ### Definition
  - Push To Local RAG is a data-pipeline operation that extracts, cleans, and concatenates Logseq markdown pages, then writes a curated corpus file consumed by a local Retrieval-Augmented Generation system. Steps include URL stripping, special-character normalisation, whitespace normalisation, and a minimum byte-length threshold. The output improves retrieval precision for local LLM inference without sending data to external services.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:PushToLocalRAG
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Knowledge Graph]], [[Tokenization]], [[Data Pipeline]]
  - enables:: [[Retrieval-Augmented Generation]], [[Semantic Search]]
  - dependsOn:: [[Vector Database]], [[Embedding Model]]

- ### Content
  - {{evalpage}}
  - # Simple Data Cleaning and Concatenation for RAG
  - This Logseq page will clean and concatenate markdown files from a specified directory.
  - Steps:
		- Remove URLs
		- Remove unwanted characters and special symbols
		- Normalize whitespace
		- Exclude files with cleaned content less than 500 bytes
  - Finally, it will write the cleaned and concatenated text to a single output file for use in Retrieval-Augmented Generation (RAG).
  - ```python
	  import os
	  import re
	  global input_directory, output_file, concatenated_text
	  # Define the input directory containing markdown files and the output file path
	  input_directory = "pages"
	  output_file = "cleaned_concatenated_text.txt"
	  concatenated_text = ""
	  "Directories and paths set up."
	  ```
		- {{evalparent}}
  - ```python
	  processed_files = 0
	  skipped_files = 0
	  for root, _, files in os.walk(input_directory):
	      for filename in files:
	          if filename.endswith(".md"):
	              input_path = os.path.join(root, filename)
	              with open(input_path, 'r', encoding='utf-8') as infile:
	                  content = infile.read()
	              cleaned_content = clean_text(content)
	              if len(cleaned_content.encode('utf-8')) < 500:
	                  skipped_files += 1
	                  continue
	              concatenated_text += cleaned_content + "\n\n" # Ensure each file's content is separated by a newline
	              processed_files += 1
	  "Files concatenated and cleaned. Proceed to write to output."
	  ```
		- {{evalparent}}
  - This script has:
		- Defined paths for input and output
		- Created a text cleaning process to remove URLs, special characters, and normalize whitespace
		- Concatenated all eligible markdown files
		- Written the cleaned and concatenated text to a single output file
  - The resulting concatenated and cleaned text is stored in the `cleaned_concatenated_text.txt` file, ready for further processing with the RAG system in the Open-webui LLM interface.

  - ## Task Description
  - ## Define File Paths and Import Required Modules
	  ```
		- {{evalparent}}
  - ## Text Cleaning Logic
  - ```python
	  # Define a function-free cleaning process
	  def clean_text(text):
	      # Remove URLs starting with http or https
	      text = re.sub(r'http\S+', '', text)

	      # Remove unwanted characters: - [ ] ( ) * { }
	      text = re.sub(r'[-\[\]()\*{}]', '', text)

	      # Remove double square brackets [[...]]
	      text = re.sub(r'\[\[|\]\]', '', text)

	      # Additional cleanup: Remove special characters and normalize whitespace
	      text = re.sub(r'[^\w\s]', '', text)
	      text = re.sub(r'\s+', ' ', text).strip()

	      return text

	  "Text cleaning process defined."
  - ## Concatenate and Clean Files
	  ```
		- {{evalparent}}
  - ## Write to Output File
  - ```python
	  with open(output_file, 'w', encoding='utf-8') as outfile:
	      outfile.write(concatenated_text)

	  result_message = f"Processed {processed_files} files, skipped {skipped_files} files. Output written to {output_file}."
	  result_message
  - ## Summary

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z