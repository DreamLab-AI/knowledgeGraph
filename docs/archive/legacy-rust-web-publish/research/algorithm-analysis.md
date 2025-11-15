# Algorithm Analysis - Logseq Publish-SPA Converter

## Core Algorithms

### 1. Markdown Parsing Algorithm

#### Input:
- File content (string)
- File path (string)

#### Output:
- Page struct with:
  - Path, title, properties
  - Hierarchical block tree
  - Extracted tags and links

#### Algorithm Pseudocode:

```
FUNCTION parse_logseq_page(content, path):
    page = new Page(path, extract_title(path))
    lines = split(content, '\n')
    index = 0

    // Parse frontmatter if present
    IF lines[0] == "---":
        index = parse_properties(lines[1..], page.properties)
        index += 2  // Skip opening and closing ---

    // Parse blocks
    page.blocks = parse_blocks(lines[index..], base_level=0)

    // Extract metadata
    extract_tags_and_links(page.blocks, page.tags, page.links)

    RETURN page
```

#### Block Parsing Algorithm:

```
FUNCTION parse_blocks(lines, base_level):
    blocks = []
    i = 0

    WHILE i < lines.length:
        line = lines[i]

        // Skip empty lines
        IF line.trim().is_empty():
            i++
            CONTINUE

        // Calculate indentation level
        indent = count_leading_whitespace(line)
        level = indent / 2

        // Extract bullet content
        content = extract_bullet_content(line)

        block = new Block(
            id=generate_id(base_level, blocks.length),
            content=content,
            level=level
        )

        // Look ahead for children
        child_lines = []
        j = i + 1
        WHILE j < lines.length:
            next_line = lines[j]
            next_indent = count_leading_whitespace(next_line)

            IF next_indent > indent:
                child_lines.append(next_line)
                j++
            ELSE:
                BREAK

        // Recursively parse children
        IF child_lines.not_empty():
            block.children = parse_blocks(child_lines, level + 1)
            i = j
        ELSE:
            i++

        blocks.append(block)

    RETURN blocks
```

**Complexity:**
- Time: O(n) where n = number of lines
- Space: O(d) where d = maximum nesting depth
- Recursive depth: O(max_indentation_level)

### 2. Tag and Link Extraction Algorithm

#### Algorithm:

```
FUNCTION extract_tags_and_links(blocks, tags_out, links_out):
    tag_pattern = /#(\w+)/
    link_pattern = /\[\[([^\]]+)\]\]/

    FOR each block IN blocks:
        // Extract tags
        FOR each match IN tag_pattern.find_all(block.content):
            tag = match.group(1)
            IF tag NOT IN tags_out:
                tags_out.append(tag)

        // Extract links
        FOR each match IN link_pattern.find_all(block.content):
            link = match.group(1)
            IF link NOT IN links_out:
                links_out.append(link)

        // Recurse into children
        extract_tags_and_links(block.children, tags_out, links_out)
```

**Complexity:**
- Time: O(n * m) where n = blocks, m = avg content length
- Space: O(t + l) where t = unique tags, l = unique links
- Regex compilation: O(1) - compiled once

### 3. Graph Construction Algorithm

#### Backlink Building:

```
FUNCTION add_page(graph, page):
    path = page.path

    // Build backlinks index
    FOR each link IN page.links:
        IF link NOT IN graph.backlinks:
            graph.backlinks[link] = []
        graph.backlinks[link].append(path)

    // Store page
    graph.pages[path] = page
```

**Complexity:**
- Time: O(l) where l = number of links in page
- Space: O(l) for backlink entries
- Amortized: O(1) HashMap insertion

#### Graph Traversal:

```
FUNCTION traverse_from(graph, start_path, max_depth):
    visited = []
    traverse_recursive(graph, start_path, 0, max_depth, visited)
    RETURN visited

FUNCTION traverse_recursive(graph, path, depth, max_depth, visited):
    IF depth > max_depth OR path IN visited:
        RETURN

    visited.append(path)

    page = graph.pages[path]
    IF page EXISTS:
        FOR each link IN page.links:
            traverse_recursive(graph, link, depth + 1, max_depth, visited)
```

**Complexity:**
- Time: O(V + E) where V = pages, E = links (BFS/DFS)
- Space: O(V) for visited set
- Max recursion depth: O(max_depth)

### 4. Statistics Computation Algorithm

```
FUNCTION compute_stats(graph):
    total_blocks = 0
    total_links = 0
    orphan_count = 0

    FOR each page IN graph.pages:
        total_blocks += count_blocks_recursive(page.blocks)
        total_links += page.links.length

        // Check if orphan
        has_outgoing = page.links.length > 0
        has_incoming = graph.backlinks[page.path].length > 0
        IF NOT has_outgoing AND NOT has_incoming:
            orphan_count++

    RETURN Stats(
        page_count=graph.pages.length,
        total_blocks=total_blocks,
        total_links=total_links,
        orphan_pages=orphan_count
    )

FUNCTION count_blocks_recursive(blocks):
    count = 0
    FOR each block IN blocks:
        count += 1 + count_blocks_recursive(block.children)
    RETURN count
```

**Complexity:**
- Time: O(P * B) where P = pages, B = avg blocks per page
- Space: O(1) - single pass accumulation
- Cache friendly: Sequential page iteration

### 5. HTML Export Algorithm

#### Main Export:

```
FUNCTION export_to_html(graph, config):
    stats = compute_stats(graph)

    html = generate_html_header()
    html += generate_html_body_start(stats)

    FOR each page IN graph.pages:
        backlinks = graph.get_backlinks(page.path)
        html += export_page_to_html(page, backlinks, config)

    html += generate_html_body_end()
    html += generate_javascript(config)

    RETURN html
```

#### Page Export:

```
FUNCTION export_page_to_html(page, backlinks, config):
    html = "<article data-path='" + page.path + "'>"
    html += "<h1>" + page.title + "</h1>"

    // Properties
    IF page.properties.not_empty():
        html += render_properties(page.properties)

    // Tags
    IF page.tags.not_empty():
        html += render_tags(page.tags)

    // Blocks
    FOR each block IN page.blocks:
        html += render_block_recursive(block)

    // Backlinks
    IF config.include_backlinks AND backlinks.not_empty():
        html += render_backlinks(backlinks)

    html += "</article>"
    RETURN html
```

#### Block Rendering:

```
FUNCTION render_block_recursive(block):
    html = "<div class='block' data-id='" + block.id + "'>"
    html += "<div class='content'>"
    html += render_markdown(block.content)
    html += "</div>"

    IF block.children.not_empty():
        html += "<div class='children'>"
        FOR each child IN block.children:
            html += render_block_recursive(child)
        html += "</div>"

    html += "</div>"
    RETURN html
```

**Complexity:**
- Time: O(P * B) where P = pages, B = blocks
- Space: O(H) where H = final HTML size
- String concatenation: Optimized with StringBuilder pattern

### 6. Markdown Rendering Algorithm

```
FUNCTION render_markdown(content):
    // Convert wiki-links [[page]] → <a href>
    content = regex_replace(content, /\[\[([^\]]+)\]\]/,
                           '<a href="#$1" class="wiki-link">$1</a>')

    // Convert tags #tag → <span>
    content = regex_replace(content, /#(\w+)/,
                           '<span class="tag">#$1</span>')

    // Convert bold **text** → <strong>
    content = regex_replace(content, /\*\*([^*]+)\*\*/,
                           '<strong>$1</strong>')

    // Convert italic *text* → <em>
    content = regex_replace(content, /\*([^*]+)\*/,
                           '<em>$1</em>')

    RETURN content
```

**Complexity:**
- Time: O(m) where m = content length
- Space: O(m) for output string
- Regex operations: O(m) per pattern

### 7. Asset Optimization Algorithm (Stub)

```
FUNCTION optimize_assets(asset_paths):
    optimized = []

    FOR each path IN asset_paths:
        file_ext = get_extension(path)

        SWITCH file_ext:
            CASE "css":
                optimized.append(minify_css(path))
            CASE "js":
                optimized.append(minify_js(path))
            CASE "png", "jpg", "jpeg":
                optimized.append(optimize_image(path))
            DEFAULT:
                optimized.append(path)

    RETURN optimized
```

**Note:** Currently returns stubs in Rust implementation.

## Data Structure Specifications

### Page Structure:

```rust
struct Page {
    path: String,              // "pages/example.md"
    title: String,             // "Example"
    properties: HashMap<String, String>,  // metadata
    blocks: Vec<Block>,        // hierarchical content
    tags: Vec<String>,         // ["tag1", "tag2"]
    links: Vec<String>,        // ["page1", "page2"]
}
```

**Invariants:**
- `path` is unique across graph
- `title` derived from path if not in properties
- `blocks` is tree structure (no cycles)
- `tags` and `links` contain no duplicates

### Block Structure:

```rust
struct Block {
    id: String,                // "block-0-1"
    content: String,           // rendered content
    children: Vec<Block>,      // nested blocks
    properties: HashMap<String, String>,
    level: usize,              // indentation level
}
```

**Invariants:**
- `id` is unique within page
- `level` matches indentation (0-indexed)
- `children` are all at `level + 1`

### Graph Structure:

```rust
struct Graph {
    pages: HashMap<String, Page>,        // path → page
    backlinks: HashMap<String, Vec<String>>,  // path → sources
}
```

**Invariants:**
- Every link in pages exists as key in backlinks
- Backlink lists contain no duplicates
- Bidirectional consistency: if A links to B, B backlinks contain A

## Optimization Opportunities

### 1. Parser Optimizations:
- Use zero-copy string slicing where possible
- Lazy evaluation of properties
- Regex compilation reuse
- Preallocate Vec capacity for blocks

### 2. Graph Optimizations:
- Use `IndexMap` for deterministic ordering
- Consider `petgraph` for advanced graph algorithms
- Implement incremental updates (add/remove pages)
- Cache computed statistics

### 3. Export Optimizations:
- Stream HTML generation instead of full string building
- Parallel page rendering (rayon)
- Template caching
- CSS/JS minification

### 4. WASM Optimizations:
- Minimize JSON serialization overhead
- Use `wasm-bindgen` typed arrays for bulk data
- Consider binary formats (MessagePack, bincode)
- Implement streaming parsing

## Error Handling Strategy

### Parse Errors:
- Unclosed frontmatter → Default to no properties
- Invalid indentation → Best-effort parsing
- Malformed markdown → Pass through content
- Missing files → Collect and report all errors

### Graph Errors:
- Duplicate pages → Last write wins
- Circular references → Detect and warn
- Missing link targets → Create placeholder pages
- Invalid paths → Sanitize and normalize

### Export Errors:
- Empty graph → Generate minimal HTML
- Invalid configuration → Use defaults
- Template errors → Fallback templates

## Performance Benchmarks (Target)

### Small Graph (100 pages):
- Parse time: <100ms
- Export time: <200ms
- Total time: <500ms

### Medium Graph (1000 pages):
- Parse time: <500ms
- Export time: <1s
- Total time: <2s

### Large Graph (10000 pages):
- Parse time: <5s
- Export time: <10s
- Total time: <20s

**Memory:** Linear with graph size, ~1MB per 100 pages

## Algorithm Correctness Properties

### Parser Correctness:
1. Every line in input is processed
2. Block hierarchy matches indentation
3. No blocks are lost or duplicated
4. Tags/links extracted completely

### Graph Correctness:
1. All pages accessible by path
2. Backlinks bijective with forward links
3. No dangling references in traversal
4. Statistics sum correctly

### Export Correctness:
1. All pages included in output
2. HTML is well-formed
3. All links preserved
4. No content loss during conversion
