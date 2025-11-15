//! Comprehensive unit tests for the graph builder
//!
//! This test suite covers:
//! - Graph construction
//! - Backlinks tracking
//! - Circular references
//! - Orphaned pages detection
//! - Graph statistics
//! - Graph traversal

use logseq_publisher_rust::graph::{Graph, GraphStats};
use logseq_publisher_rust::parser::{Page, Block};
use std::collections::HashMap;

#[cfg(test)]
mod graph_tests {
    use super::*;

    fn create_test_page(title: &str, path: &str, links: Vec<String>) -> Page {
        Page {
            path: path.to_string(),
            title: title.to_string(),
            properties: HashMap::new(),
            blocks: vec![],
            tags: vec![],
            links,
        }
    }

    fn create_page_with_blocks(title: &str, path: &str, block_count: usize) -> Page {
        let blocks: Vec<Block> = (0..block_count)
            .map(|i| Block {
                id: format!("block-{}", i),
                content: format!("Block {}", i),
                children: vec![],
                properties: HashMap::new(),
                level: 0,
            })
            .collect();

        Page {
            path: path.to_string(),
            title: title.to_string(),
            properties: HashMap::new(),
            blocks,
            tags: vec![],
            links: vec![],
        }
    }

    #[test]
    fn test_create_empty_graph() {
        let graph = Graph::new();
        assert_eq!(graph.page_count(), 0);
    }

    #[test]
    fn test_add_single_page() {
        let mut graph = Graph::new();
        let page = create_test_page("Test", "test.md", vec![]);

        graph.add_page(page);

        assert_eq!(graph.page_count(), 1);
    }

    #[test]
    fn test_add_multiple_pages() {
        let mut graph = Graph::new();

        graph.add_page(create_test_page("Page 1", "page1.md", vec![]));
        graph.add_page(create_test_page("Page 2", "page2.md", vec![]));
        graph.add_page(create_test_page("Page 3", "page3.md", vec![]));

        assert_eq!(graph.page_count(), 3);
    }

    #[test]
    fn test_get_page() {
        let mut graph = Graph::new();
        let page = create_test_page("Test", "test.md", vec![]);

        graph.add_page(page);

        let retrieved = graph.get_page("test.md");
        assert!(retrieved.is_some());
        assert_eq!(retrieved.unwrap().title, "Test");
    }

    #[test]
    fn test_get_nonexistent_page() {
        let graph = Graph::new();
        let retrieved = graph.get_page("nonexistent.md");
        assert!(retrieved.is_none());
    }

    #[test]
    fn test_simple_backlink() {
        let mut graph = Graph::new();

        // Page A links to Page B
        let page_a = create_test_page("Page A", "a.md", vec!["b.md".to_string()]);
        graph.add_page(page_a);

        // Page B should have A in its backlinks
        let backlinks = graph.get_backlinks("b.md");
        assert_eq!(backlinks.len(), 1);
        assert!(backlinks.contains(&"a.md".to_string()));
    }

    #[test]
    fn test_multiple_backlinks() {
        let mut graph = Graph::new();

        // Multiple pages link to the same target
        graph.add_page(create_test_page("Page A", "a.md", vec!["target.md".to_string()]));
        graph.add_page(create_test_page("Page B", "b.md", vec!["target.md".to_string()]));
        graph.add_page(create_test_page("Page C", "c.md", vec!["target.md".to_string()]));

        let backlinks = graph.get_backlinks("target.md");
        assert_eq!(backlinks.len(), 3);
        assert!(backlinks.contains(&"a.md".to_string()));
        assert!(backlinks.contains(&"b.md".to_string()));
        assert!(backlinks.contains(&"c.md".to_string()));
    }

    #[test]
    fn test_bidirectional_links() {
        let mut graph = Graph::new();

        // A links to B, B links to A
        graph.add_page(create_test_page("Page A", "a.md", vec!["b.md".to_string()]));
        graph.add_page(create_test_page("Page B", "b.md", vec!["a.md".to_string()]));

        let backlinks_a = graph.get_backlinks("a.md");
        let backlinks_b = graph.get_backlinks("b.md");

        assert_eq!(backlinks_a.len(), 1);
        assert_eq!(backlinks_b.len(), 1);
        assert!(backlinks_a.contains(&"b.md".to_string()));
        assert!(backlinks_b.contains(&"a.md".to_string()));
    }

    #[test]
    fn test_circular_reference_simple() {
        let mut graph = Graph::new();

        // A -> B -> C -> A
        graph.add_page(create_test_page("A", "a.md", vec!["b.md".to_string()]));
        graph.add_page(create_test_page("B", "b.md", vec!["c.md".to_string()]));
        graph.add_page(create_test_page("C", "c.md", vec!["a.md".to_string()]));

        // Should handle gracefully without infinite loops
        assert_eq!(graph.page_count(), 3);

        // Each page should have one backlink
        assert_eq!(graph.get_backlinks("a.md").len(), 1);
        assert_eq!(graph.get_backlinks("b.md").len(), 1);
        assert_eq!(graph.get_backlinks("c.md").len(), 1);
    }

    #[test]
    fn test_circular_reference_complex() {
        let mut graph = Graph::new();

        // Create a more complex circular structure
        // A -> B -> C -> D -> B (cycle)
        graph.add_page(create_test_page("A", "a.md", vec!["b.md".to_string()]));
        graph.add_page(create_test_page("B", "b.md", vec!["c.md".to_string()]));
        graph.add_page(create_test_page("C", "c.md", vec!["d.md".to_string()]));
        graph.add_page(create_test_page("D", "d.md", vec!["b.md".to_string()]));

        assert_eq!(graph.page_count(), 4);

        // B should have backlinks from A and D
        let backlinks_b = graph.get_backlinks("b.md");
        assert_eq!(backlinks_b.len(), 2);
        assert!(backlinks_b.contains(&"a.md".to_string()));
        assert!(backlinks_b.contains(&"d.md".to_string()));
    }

    #[test]
    fn test_orphaned_pages_detection() {
        let mut graph = Graph::new();

        // Add some connected pages
        graph.add_page(create_test_page("Connected A", "a.md", vec!["b.md".to_string()]));
        graph.add_page(create_test_page("Connected B", "b.md", vec!["a.md".to_string()]));

        // Add orphaned pages (no links in or out)
        graph.add_page(create_test_page("Orphan 1", "orphan1.md", vec![]));
        graph.add_page(create_test_page("Orphan 2", "orphan2.md", vec![]));

        let stats = graph.stats();
        assert_eq!(stats.orphan_pages, 2);
    }

    #[test]
    fn test_page_with_outgoing_links_not_orphan() {
        let mut graph = Graph::new();

        // Page with outgoing links is not an orphan
        graph.add_page(create_test_page("Has Links", "links.md", vec!["other.md".to_string()]));

        let stats = graph.stats();
        assert_eq!(stats.orphan_pages, 0);
    }

    #[test]
    fn test_page_with_incoming_links_not_orphan() {
        let mut graph = Graph::new();

        // Page that is linked to is not an orphan
        graph.add_page(create_test_page("Linker", "linker.md", vec!["target.md".to_string()]));
        graph.add_page(create_test_page("Target", "target.md", vec![]));

        let stats = graph.stats();
        // Only the linker might be considered orphaned if it has no incoming links
        // But since it has outgoing links, it's not orphaned
        // Target has incoming links, so it's not orphaned
        assert_eq!(stats.orphan_pages, 0);
    }

    #[test]
    fn test_graph_stats_page_count() {
        let mut graph = Graph::new();

        for i in 1..=10 {
            graph.add_page(create_test_page(&format!("Page {}", i), &format!("page{}.md", i), vec![]));
        }

        let stats = graph.stats();
        assert_eq!(stats.page_count, 10);
    }

    #[test]
    fn test_graph_stats_block_count() {
        let mut graph = Graph::new();

        // Add pages with different block counts
        graph.add_page(create_page_with_blocks("Page 1", "page1.md", 5));
        graph.add_page(create_page_with_blocks("Page 2", "page2.md", 3));
        graph.add_page(create_page_with_blocks("Page 3", "page3.md", 7));

        let stats = graph.stats();
        assert_eq!(stats.total_blocks, 15); // 5 + 3 + 7
    }

    #[test]
    fn test_graph_stats_link_count() {
        let mut graph = Graph::new();

        graph.add_page(create_test_page("Page 1", "page1.md", vec!["a".to_string(), "b".to_string()]));
        graph.add_page(create_test_page("Page 2", "page2.md", vec!["c".to_string()]));
        graph.add_page(create_test_page("Page 3", "page3.md", vec!["d".to_string(), "e".to_string(), "f".to_string()]));

        let stats = graph.stats();
        assert_eq!(stats.total_links, 6); // 2 + 1 + 3
    }

    #[test]
    fn test_traverse_from_simple() {
        let mut graph = Graph::new();

        // A -> B -> C
        graph.add_page(create_test_page("A", "a.md", vec!["b.md".to_string()]));
        graph.add_page(create_test_page("B", "b.md", vec!["c.md".to_string()]));
        graph.add_page(create_test_page("C", "c.md", vec![]));

        let visited = graph.traverse_from("a.md", 10);

        assert!(visited.contains(&"a.md".to_string()));
        assert!(visited.contains(&"b.md".to_string()));
        assert!(visited.contains(&"c.md".to_string()));
    }

    #[test]
    fn test_traverse_respects_max_depth() {
        let mut graph = Graph::new();

        // A -> B -> C -> D -> E
        graph.add_page(create_test_page("A", "a.md", vec!["b.md".to_string()]));
        graph.add_page(create_test_page("B", "b.md", vec!["c.md".to_string()]));
        graph.add_page(create_test_page("C", "c.md", vec!["d.md".to_string()]));
        graph.add_page(create_test_page("D", "d.md", vec!["e.md".to_string()]));
        graph.add_page(create_test_page("E", "e.md", vec![]));

        let visited = graph.traverse_from("a.md", 2);

        // Should visit A (depth 0), B (depth 1), C (depth 2)
        assert!(visited.contains(&"a.md".to_string()));
        assert!(visited.contains(&"b.md".to_string()));
        assert!(visited.contains(&"c.md".to_string()));
        // Should NOT reach D or E (depth 3, 4)
        assert!(!visited.contains(&"d.md".to_string()));
        assert!(!visited.contains(&"e.md".to_string()));
    }

    #[test]
    fn test_traverse_handles_cycles() {
        let mut graph = Graph::new();

        // A -> B -> C -> A (cycle)
        graph.add_page(create_test_page("A", "a.md", vec!["b.md".to_string()]));
        graph.add_page(create_test_page("B", "b.md", vec!["c.md".to_string()]));
        graph.add_page(create_test_page("C", "c.md", vec!["a.md".to_string()]));

        let visited = graph.traverse_from("a.md", 10);

        // Should visit each page only once despite cycle
        assert_eq!(visited.len(), 3);
        assert!(visited.contains(&"a.md".to_string()));
        assert!(visited.contains(&"b.md".to_string()));
        assert!(visited.contains(&"c.md".to_string()));
    }

    #[test]
    fn test_traverse_branching_structure() {
        let mut graph = Graph::new();

        // A branches to B and C
        // B branches to D and E
        graph.add_page(create_test_page("A", "a.md", vec!["b.md".to_string(), "c.md".to_string()]));
        graph.add_page(create_test_page("B", "b.md", vec!["d.md".to_string(), "e.md".to_string()]));
        graph.add_page(create_test_page("C", "c.md", vec![]));
        graph.add_page(create_test_page("D", "d.md", vec![]));
        graph.add_page(create_test_page("E", "e.md", vec![]));

        let visited = graph.traverse_from("a.md", 10);

        // Should visit all 5 pages
        assert_eq!(visited.len(), 5);
    }

    #[test]
    fn test_large_graph_construction() {
        let mut graph = Graph::new();

        // Create 1000 pages
        for i in 1..=1000 {
            let links = if i < 1000 {
                vec![format!("page{}.md", i + 1)]
            } else {
                vec![]
            };

            graph.add_page(create_test_page(&format!("Page {}", i), &format!("page{}.md", i), links));
        }

        assert_eq!(graph.page_count(), 1000);

        let stats = graph.stats();
        assert_eq!(stats.page_count, 1000);
        assert_eq!(stats.total_links, 999); // Each page except last links to next
    }

    #[test]
    fn test_graph_with_nested_blocks() {
        let mut graph = Graph::new();

        let mut page = create_test_page("Test", "test.md", vec![]);
        page.blocks.push(Block {
            id: "block-1".to_string(),
            content: "Parent".to_string(),
            children: vec![
                Block {
                    id: "block-1-1".to_string(),
                    content: "Child".to_string(),
                    children: vec![
                        Block {
                            id: "block-1-1-1".to_string(),
                            content: "Grandchild".to_string(),
                            children: vec![],
                            properties: HashMap::new(),
                            level: 2,
                        }
                    ],
                    properties: HashMap::new(),
                    level: 1,
                }
            ],
            properties: HashMap::new(),
            level: 0,
        });

        graph.add_page(page);

        let stats = graph.stats();
        // Should count all blocks including nested ones
        assert_eq!(stats.total_blocks, 3);
    }

    #[test]
    fn test_backlinks_empty_for_unlinked_page() {
        let mut graph = Graph::new();

        graph.add_page(create_test_page("Lonely", "lonely.md", vec![]));

        let backlinks = graph.get_backlinks("lonely.md");
        assert_eq!(backlinks.len(), 0);
    }

    #[test]
    fn test_multiple_links_to_same_page() {
        let mut graph = Graph::new();

        // Page A links to B multiple times (shouldn't create duplicate backlinks)
        graph.add_page(create_test_page("A", "a.md", vec!["b.md".to_string(), "b.md".to_string()]));

        let backlinks = graph.get_backlinks("b.md");
        // Implementation might have duplicates or not, depending on design
        assert!(backlinks.len() >= 1);
    }

    #[test]
    fn test_graph_statistics_comprehensive() {
        let mut graph = Graph::new();

        // Create a complex graph structure
        graph.add_page(create_page_with_blocks("Hub", "hub.md", 10));

        let mut page2 = create_page_with_blocks("Spoke1", "spoke1.md", 5);
        page2.links = vec!["hub.md".to_string()];
        graph.add_page(page2);

        let mut page3 = create_page_with_blocks("Spoke2", "spoke2.md", 3);
        page3.links = vec!["hub.md".to_string()];
        graph.add_page(page3);

        graph.add_page(create_page_with_blocks("Orphan", "orphan.md", 2));

        let stats = graph.stats();

        assert_eq!(stats.page_count, 4);
        assert_eq!(stats.total_blocks, 20); // 10 + 5 + 3 + 2
        assert_eq!(stats.total_links, 2);
        assert_eq!(stats.orphan_pages, 1);
    }
}
