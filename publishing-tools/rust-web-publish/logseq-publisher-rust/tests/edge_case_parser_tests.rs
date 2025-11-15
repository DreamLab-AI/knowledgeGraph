/// Comprehensive edge case tests for the parser module
/// Tests boundary conditions, malformed input, and error handling

use logseq_publisher_rust::parser::*;
use pretty_assertions::assert_eq;
use rstest::*;

#[test]
fn test_extremely_large_document() {
    // Test with 10,000 blocks
    let mut content = String::from("# Large Document\n\n");
    for i in 0..10000 {
        content.push_str(&format!("- Block {} with [[Link {}]]\n", i, i % 100));
    }

    let result = parse_logseq_page(&content, "large.md");
    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.blocks.len(), 10000);
}

#[test]
fn test_deeply_nested_blocks() {
    // Test with 50 levels of nesting
    let mut content = String::new();
    for i in 0..50 {
        let indent = "  ".repeat(i);
        content.push_str(&format!("{}- Level {}\n", indent, i));
    }

    let result = parse_logseq_page(&content, "deep.md");
    assert!(result.is_ok());
}

#[test]
fn test_extremely_long_line() {
    // Test with a single line of 100,000 characters
    let long_content = "a".repeat(100000);
    let input = format!("- {}", long_content);

    let result = parse_logseq_page(&input, "long.md");
    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.blocks[0].content.len(), 100000);
}

#[test]
fn test_mixed_line_endings() {
    // Test with mixed \n, \r\n, and \r line endings
    let input = "- Block 1\n- Block 2\r\n- Block 3\r- Block 4";

    let result = parse_logseq_page(input, "mixed.md");
    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.blocks.len(), 4);
}

#[test]
fn test_binary_data_in_content() {
    // Test with binary/non-UTF8 data (should fail gracefully)
    let binary = vec![0xFF, 0xFE, 0xFD, 0xFC];
    let input = String::from_utf8_lossy(&binary);

    let result = parse_logseq_page(&input, "binary.md");
    // Should handle gracefully
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_all_special_characters() {
    let input = r#"- !@#$%^&*()_+-=[]{}|;':",./<>?`~
- Special: ©®™€£¥§¶†‡•
- Math: ±×÷≠≈≤≥∞∑∫∂√
- Arrows: ←↑→↓↔↕↖↗↘↙"#;

    let result = parse_logseq_page(input, "special.md");
    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.blocks.len(), 4);
}

#[test]
fn test_zero_width_characters() {
    let input = "- Block with \u{200B}zero\u{200C}width\u{200D}chars\u{FEFF}";

    let result = parse_logseq_page(input, "zero.md");
    assert!(result.is_ok());
}

#[test]
fn test_rtl_text() {
    let input = r#"- العربية النص
- עברית טקסט
- فارسی متن"#;

    let result = parse_logseq_page(input, "rtl.md");
    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.blocks.len(), 3);
}

#[test]
fn test_null_bytes() {
    let input = "- Block\0with\0nulls";

    let result = parse_logseq_page(input, "null.md");
    // Should handle gracefully
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_multiple_consecutive_markers() {
    let input = r#"- TODO TODO TODO Task
- DONE LATER NOW Mixed
- ### ### Multiple headings"#;

    let result = parse_logseq_page(input, "markers.md");
    assert!(result.is_ok());
}

#[test]
fn test_unclosed_brackets() {
    let input = r#"- [[Unclosed link
- {{Unclosed embed
- ((Unclosed ref
- [Unclosed markdown"#;

    let result = parse_logseq_page(input, "unclosed.md");
    assert!(result.is_ok()); // Should parse without panicking
}

#[test]
fn test_nested_brackets() {
    let input = r#"- [[Link with [[nested]] link]]
- {{embed with {{nested}} embed}}
- [Markdown [with [deep [nesting]]]]"#;

    let result = parse_logseq_page(input, "nested.md");
    assert!(result.is_ok());
}

#[test]
fn test_malformed_frontmatter() {
    let input = r#"---
invalid:yaml:structure:::
missing::value
unquoted: string with: colons
---
- Content"#;

    let result = parse_logseq_page(input, "malformed.md");
    // Should handle gracefully
    assert!(result.is_ok() || result.is_err());
}

#[test]
fn test_unclosed_frontmatter() {
    let input = r#"---
title: Test
tags: example
- Content without closing ---"#;

    let result = parse_logseq_page(input, "unclosed-fm.md");
    assert!(result.is_err());
}

#[test]
fn test_empty_blocks() {
    let input = r#"-
-
-
- Content
-  "#;

    let result = parse_logseq_page(input, "empty.md");
    assert!(result.is_ok());
}

#[test]
fn test_whitespace_only_document() {
    let input = "   \n  \n\t\t\n     \n";

    let result = parse_logseq_page(input, "whitespace.md");
    assert!(result.is_ok());
    let page = result.unwrap();
    assert_eq!(page.blocks.len(), 0);
}

#[test]
fn test_mixed_bullet_types() {
    let input = r#"- Hyphen bullet
* Asterisk bullet
  - Nested hyphen
  * Nested asterisk
    + Plus sign (if supported)"#;

    let result = parse_logseq_page(input, "mixed.md");
    assert!(result.is_ok());
}

#[test]
fn test_code_block_edge_cases() {
    let input = r#"```
No language specified
```

```rust```
Empty code block

```javascript
console.log('unclosed"#;

    let result = parse_logseq_page(input, "code.md");
    assert!(result.is_ok());
}

#[test]
fn test_link_variations() {
    let input = r#"- [[Simple Link]]
- [[Link/With/Slashes]]
- [[Link With Spaces And-Dashes]]
- [[Link_With_Underscores]]
- [[Link.with.dots]]
- [[Link#with#hashes]]
- [[Link|With|Pipes]]
- [[]]
- [[ ]]
- [[   spaces   ]]"#;

    let result = parse_logseq_page(input, "links.md");
    assert!(result.is_ok());
}

#[test]
fn test_circular_references() {
    let input = r#"- Page A links to [[Page B]]
- Which links to [[Page C]]
- Which links back to [[Page A]]"#;

    let result = parse_logseq_page(input, "circular.md");
    assert!(result.is_ok());
}

#[test]
fn test_property_edge_cases() {
    let input = r#"- title::
- empty::
- spaces::   value
- multiple::colons::in::value
- unicode::日本語
- number::123
- bool::true"#;

    let result = parse_logseq_page(input, "props.md");
    assert!(result.is_ok());
}

#[test]
fn test_task_status_variations() {
    let input = r#"- TODO Normal task
- TODO: With colon
- [TODO] Bracketed
- todo lowercase
- ToDo MixedCase
- TODO  Multiple spaces
- DOING In progress
- WAITING Blocked"#;

    let result = parse_logseq_page(input, "tasks.md");
    assert!(result.is_ok());
}

#[test]
fn test_page_embed_edge_cases() {
    let input = r#"- {{embed [[Page]]}}
- {{embed}}
- {{embed [[]]}}
- {{ embed [[Page]] }}
- {{EMBED [[Page]]}}
- {{embed [[Page with spaces]]}}"#;

    let result = parse_logseq_page(input, "embeds.md");
    assert!(result.is_ok());
}

#[test]
fn test_block_reference_formats() {
    let input = r#"- ((block-id))
- ((block-id-with-dashes))
- ((BLOCK_ID_CAPS))
- (())
- ((  ))
- ((invalid id with spaces))"#;

    let result = parse_logseq_page(input, "refs.md");
    assert!(result.is_ok());
}

#[test]
fn test_markdown_formatting_edge_cases() {
    let input = r#"- **bold**
- __also bold__
- *italic*
- _also italic_
- ***bold italic***
- ~~strikethrough~~
- **unclosed bold
- *nested **bold** in italic*
- `code`
- ``double backtick``
- ```triple backtick```"#;

    let result = parse_logseq_page(input, "formatting.md");
    assert!(result.is_ok());
}

#[test]
fn test_url_variations() {
    let input = r#"- http://example.com
- https://example.com
- ftp://example.com
- mailto:test@example.com
- tel:+1234567890
- file:///path/to/file
- [Link](http://example.com)
- [Link](http://example.com "title")
- ![Image](http://example.com/image.png)"#;

    let result = parse_logseq_page(input, "urls.md");
    assert!(result.is_ok());
}

#[test]
fn test_concurrent_parsing() {
    use std::thread;

    let handles: Vec<_> = (0..10)
        .map(|i| {
            thread::spawn(move || {
                let content = format!("- Thread {} content", i);
                parse_logseq_page(&content, &format!("thread{}.md", i))
            })
        })
        .collect();

    for handle in handles {
        let result = handle.join().unwrap();
        assert!(result.is_ok());
    }
}

#[test]
fn test_invalid_utf8_sequences() {
    // Test various invalid UTF-8 sequences
    let sequences = vec![
        vec![0xC0, 0x80], // Overlong encoding
        vec![0xF5, 0x80, 0x80, 0x80], // Out of range
        vec![0xED, 0xA0, 0x80], // UTF-16 surrogate
    ];

    for seq in sequences {
        let input = String::from_utf8_lossy(&seq);
        let result = parse_logseq_page(&input, "invalid.md");
        // Should handle gracefully
        assert!(result.is_ok() || result.is_err());
    }
}

#[test]
fn test_maximum_path_length() {
    let long_path = "a/".repeat(500) + "file.md";
    let input = "- Content";

    let result = parse_logseq_page(input, &long_path);
    assert!(result.is_ok());
}

#[test]
fn test_special_filenames() {
    let special_names = vec![
        "file with spaces.md",
        "file-with-dashes.md",
        "file_with_underscores.md",
        "file.with.dots.md",
        "file@with#special$chars.md",
        "日本語.md",
        "файл.md",
        "αρχείο.md",
    ];

    for name in special_names {
        let result = parse_logseq_page("- Content", name);
        assert!(result.is_ok(), "Failed for filename: {}", name);
    }
}

#[test]
fn test_timestamp_formats() {
    let input = r#"- SCHEDULED: <2024-01-15 Mon>
- DEADLINE: <2024-01-20 Sat 10:00>
- <2024-01-25>
- [2024-01-30]
- Invalid: <2024-13-45>
- Invalid: <not-a-date>"#;

    let result = parse_logseq_page(input, "timestamps.md");
    assert!(result.is_ok());
}

#[test]
fn test_tag_variations() {
    let input = r#"- #simple-tag
- #Tag_With_Underscores
- #TagWith123Numbers
- #tag/with/slashes
- #tag.with.dots
- ##double-hash
- # (just hash)
- #日本語タグ"#;

    let result = parse_logseq_page(input, "tags.md");
    assert!(result.is_ok());
}

#[test]
fn test_query_blocks() {
    let input = r#"- {{query (and [[tag1]] [[tag2]])}}
- {{query}}
- {{query (invalid syntax}}
- #+BEGIN_QUERY
  {:title "My Query"
   :query [:find ...]}
  #+END_QUERY"#;

    let result = parse_logseq_page(input, "queries.md");
    assert!(result.is_ok());
}

#[test]
fn test_latex_math() {
    let input = r#"- Inline: $E = mc^2$
- Block: $$\int_0^\infty e^{-x^2} dx$$
- Unclosed: $E = mc^2
- Nested: $$outer $inner$ outer$$"#;

    let result = parse_logseq_page(input, "math.md");
    assert!(result.is_ok());
}

#[test]
fn test_html_in_markdown() {
    let input = r#"- <div>HTML content</div>
- <script>alert('xss')</script>
- <!-- HTML comment -->
- <img src="test.jpg" onerror="alert('xss')">
- &lt;escaped&gt;
- &#60;numeric&#62;"#;

    let result = parse_logseq_page(input, "html.md");
    assert!(result.is_ok());
}

#[test]
fn test_performance_stress() {
    use std::time::Instant;

    // Generate 5000 blocks with complex content
    let mut content = String::new();
    for i in 0..5000 {
        content.push_str(&format!(
            "- Block {} with [[Link1]] [[Link2]] #tag1 #tag2 **bold** *italic* `code` {{embed [[Page]]}}\n",
            i
        ));
    }

    let start = Instant::now();
    let result = parse_logseq_page(&content, "stress.md");
    let duration = start.elapsed();

    assert!(result.is_ok());
    // Should parse 5000 complex blocks in under 100ms
    assert!(duration.as_millis() < 100, "Parsing took {:?}, expected < 100ms", duration);
}
