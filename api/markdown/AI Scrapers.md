public:: true

- # AI Scrapers
- AI scrapers are tools that use artificial intelligence to extract data from websites. They can be used for a variety of purposes, including data mining, research, and content aggregation.
- ## Tools and Platforms
	- ### [Crawl4AI](https://github.com/unclecode/crawl4ai)
		- An open-source web crawler and scraper that is designed to be friendly for Large Language Models (LLMs). It creates clean and concise Markdown that is optimized for RAG and fine-tuning applications.
	- ### [swift-ocr-llm-powered-pdf-to-markdown](https://github.com/yigitkonur/swift-ocr-llm-powered-pdf-to-markdown)
		- A tool that uses OCR and LLMs to convert PDFs to Markdown.
	- ### [Firecrawl](https://github.com/mendableai/firecrawl)
		- A tool that turns entire websites into LLM-ready markdown or structured data.
	- ### [Pattern](https://github.com/NicolasBizzozzero/pattern)
		- A web mining module for Python, with tools for scraping, natural language processing, machine learning, network analysis and visualization.
	- ### [Scrapegraph-ai](https://github.com/VinciGit00/Scrapegraph-ai)
		- A Python scraper based on AI.
	- ### [MM-Search](https://mmsearch.github.io/)
		- A search engine that uses AI to search for images and videos.
- ## Research and Papers
	- [2408.08435v1.pdf (arxiv.org)](https://arxiv.org/pdf/2408.08435)
- ## Projects
	- ### Web scraper project for OpenWebUI
		- This diagram shows the sequence of events for a web scraper pipeline that uses OpenWebUI, Playwright, and RedditClient to extract and summarize content from web pages.
		- ```mermaid
		  sequenceDiagram
		      participant User
		      participant Pipeline
		      participant OpenWebUI
		      participant AsyncOpenAI
		      participant Playwright
		      participant RedditClient
		      participant WebPage
		  
		      User->>Pipeline: Send user_message
		      Pipeline->>OpenWebUI: Get OPENAI_API_KEY, TOPICS, etc.
		      Pipeline->>AsyncOpenAI: Initialize with API key
		      Pipeline->>Playwright: setup_playwright()
		      Playwright->>Pipeline: Playwright setup complete
		      Pipeline->>RedditClient: Initialize with credentials
		  
		      Pipeline->>Pipeline: extract_blocks(user_message)
		      loop For each block
		          Pipeline->>Pipeline: should_process_block(block)
		          alt Block should be processed
		              Pipeline->>Pipeline: extract_url_from_block(block)
		              alt URL is a Reddit URL
		                  Pipeline->>RedditClient: is_reddit_url(url)
		                  RedditClient->>Pipeline: True
		                  Pipeline->>RedditClient: get_reddit_content(url)
		                  RedditClient->>Pipeline: Return Reddit content
		              else URL is not a Reddit URL
		                  Pipeline->>Playwright: scrape_url(url, random_user_agent)
		                  Playwright->>WebPage: Fetch and filter content
		                  WebPage->>Playwright: Return filtered content
		                  Playwright->>Pipeline: Return filtered content
		                  alt Scraping successful
		                      Pipeline->>Pipeline: create_prompt(link_text, url, topics, max_tokens)
		                      Pipeline->>AsyncOpenAI: Generate summary
		                      AsyncOpenAI->>Pipeline: Return summary JSON
		                      Pipeline->>Pipeline: Format summary to Logseq style
		                  else Scraping failed
		                      Pipeline->>Pipeline: Return original block
		              end
		          else Block should not be processed
		              Pipeline->>Pipeline: Return original block
		          end
		          Pipeline->>Pipeline: Add processed block to processed_blocks
		      end
		      Pipeline->>User: Return processed text
		  end
		  ```