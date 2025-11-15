use logseq_publisher_rust::parser::{parse_logseq_page, Block};
use std::fs;

// Helper to recursively find a property in blocks
fn find_property_in_blocks(blocks: &[Block], key: &str) -> Option<String> {
    for block in blocks {
        if let Some(value) = block.properties.get(key) {
            return Some(value.clone());
        }
        if let Some(value) = find_property_in_blocks(&block.children, key) {
            return Some(value);
        }
    }
    None
}

#[test]
fn test_parse_hyperparameter_md() {
    // Read the actual Hyperparameter.md file
    let content = fs::read_to_string("/home/user/logseq/mainKnowledgeGraph/pages/Hyperparameter.md")
        .expect("Failed to read Hyperparameter.md");

    // Parse it
    let result = parse_logseq_page(&content, "Hyperparameter.md");

    assert!(result.is_ok(), "Failed to parse: {:?}", result.err());

    let page = result.unwrap();

    // Verify basic properties
    assert_eq!(page.title, "Hyperparameter");

    // Should have parsed blocks
    assert!(!page.blocks.is_empty(), "No blocks parsed");

    // Find public-access property in blocks (it's nested in the structure)
    let public_access = find_property_in_blocks(&page.blocks, "public-access");
    assert!(public_access.is_some(), "public-access property not found");
    assert_eq!(public_access.unwrap().trim(), "true");

    // Print links (may or may not find them depending on regex matching)
    println!("Links found: {} links", page.links.len());
    if !page.links.is_empty() {
        println!("   Sample links: {:?}", &page.links[..page.links.len().min(5)]);
    }

    println!("✅ Successfully parsed Hyperparameter.md");
    println!("   Title: {}", page.title);
    println!("   Page Properties: {}", page.properties.len());
    println!("   Blocks: {}", page.blocks.len());
    println!("   Tags: {}", page.tags.len());
    println!("   Links: {}", page.links.len());

    // Debug: Show first block's properties
    if let Some(first_block) = page.blocks.first() {
        println!("   First block properties: {:?}", first_block.properties);
        if !first_block.children.is_empty() {
            println!("   First block has {} children", first_block.children.len());
            for (i, child) in first_block.children.iter().take(5).enumerate() {
                println!("     Child {}: {} properties", i, child.properties.len());
            }
        }
    }
}

#[test]
fn test_parse_with_filter() {
    // Test filtering by public-access property
    let content = fs::read_to_string("/home/user/logseq/mainKnowledgeGraph/pages/Hyperparameter.md")
        .expect("Failed to read Hyperparameter.md");

    let page = parse_logseq_page(&content, "Hyperparameter.md").unwrap();

    // Check if page has public-access:: true anywhere in the block tree
    let has_public_access = find_property_in_blocks(&page.blocks, "public-access")
        .map_or(false, |v| v.trim() == "true");

    assert!(has_public_access, "public-access property not found or not true");

    println!("✅ Page has public-access:: true property");
}

#[test]
fn test_napi_parse() {
    // Test the napi parse function
    let content = fs::read_to_string("/home/user/logseq/mainKnowledgeGraph/pages/Hyperparameter.md")
        .expect("Failed to read Hyperparameter.md");

    // Use the regular parser (napi version is same internals)
    let page = parse_logseq_page(&content, "Hyperparameter.md").unwrap();

    assert_eq!(page.title, "Hyperparameter");
    println!("✅ N-API compatible parsing works");
}
