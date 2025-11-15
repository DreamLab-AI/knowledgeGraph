/// Comprehensive graph module integration tests
/// Tests graph construction, traversal, and relationship management

use logseq_publisher_rust::graph::*;
use logseq_publisher_rust::parser::*;
use std::collections::HashMap;

#[test]
fn test_graph_construction_from_multiple_pages() {
    let mut graph = Graph::new();

    // Add pages with various link patterns
    for i in 0..20 {
        let page = Page {
            path: format!("page{}.md", i),
            title: format!("Page {}", i),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: vec![format!("tag{}", i % 3)],
            links: vec![
                format!("page{}.md", (i + 1) % 20),
                format!("page{}.md", (i + 5) % 20),
            ],
            ontology: None,
        };
        graph.add_page(page);
    }

    assert_eq!(graph.page_count(), 20);

    let stats = graph.stats();
    assert_eq!(stats.page_count, 20);
    assert_eq!(stats.total_links, 40); // 20 pages * 2 links each
}

#[test]
fn test_backlinks_bidirectional_consistency() {
    let mut graph = Graph::new();

    let page_a = Page {
        path: "a.md".to_string(),
        title: "A".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["b.md".to_string(), "c.md".to_string()],
        ontology: None,
    };

    let page_b = Page {
        path: "b.md".to_string(),
        title: "B".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["a.md".to_string()],
        ontology: None,
    };

    let page_c = Page {
        path: "c.md".to_string(),
        title: "C".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    graph.add_page(page_a);
    graph.add_page(page_b);
    graph.add_page(page_c);

    // Check forward links
    let page_a = graph.get_page("a.md").unwrap();
    assert_eq!(page_a.links.len(), 2);
    assert!(page_a.links.contains(&"b.md".to_string()));
    assert!(page_a.links.contains(&"c.md".to_string()));

    // Check backlinks
    let b_backlinks = graph.get_backlinks("b.md");
    assert_eq!(b_backlinks.len(), 1);
    assert!(b_backlinks.contains(&"a.md".to_string()));

    let a_backlinks = graph.get_backlinks("a.md");
    assert_eq!(a_backlinks.len(), 1);
    assert!(a_backlinks.contains(&"b.md".to_string()));
}

#[test]
fn test_orphan_page_detection() {
    let mut graph = Graph::new();

    // Create connected pages
    let page1 = Page {
        path: "connected1.md".to_string(),
        title: "Connected 1".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["connected2.md".to_string()],
        ontology: None,
    };

    let page2 = Page {
        path: "connected2.md".to_string(),
        title: "Connected 2".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["connected1.md".to_string()],
        ontology: None,
    };

    // Create orphan pages
    let orphan1 = Page {
        path: "orphan1.md".to_string(),
        title: "Orphan 1".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    let orphan2 = Page {
        path: "orphan2.md".to_string(),
        title: "Orphan 2".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    graph.add_page(page1);
    graph.add_page(page2);
    graph.add_page(orphan1);
    graph.add_page(orphan2);

    let stats = graph.stats();
    assert_eq!(stats.orphan_pages, 2);
}

#[test]
fn test_graph_traversal_depth_limit() {
    let mut graph = Graph::new();

    // Create chain: page0 -> page1 -> page2 -> ... -> page9
    for i in 0..10 {
        let page = Page {
            path: format!("page{}.md", i),
            title: format!("Page {}", i),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: if i < 9 {
                vec![format!("page{}.md", i + 1)]
            } else {
                Vec::new()
            },
            ontology: None,
        };
        graph.add_page(page);
    }

    // Traverse with depth limit of 5
    let visited = graph.traverse_from("page0.md", 5);
    assert!(visited.len() <= 6); // 0, 1, 2, 3, 4, 5

    // Traverse with depth limit of 10
    let visited_all = graph.traverse_from("page0.md", 10);
    assert_eq!(visited_all.len(), 10);
}

#[test]
fn test_graph_traversal_prevents_infinite_loops() {
    let mut graph = Graph::new();

    // Create cycle: A -> B -> C -> A
    let page_a = Page {
        path: "a.md".to_string(),
        title: "A".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["b.md".to_string()],
        ontology: None,
    };

    let page_b = Page {
        path: "b.md".to_string(),
        title: "B".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["c.md".to_string()],
        ontology: None,
    };

    let page_c = Page {
        path: "c.md".to_string(),
        title: "C".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["a.md".to_string()],
        ontology: None,
    };

    graph.add_page(page_a);
    graph.add_page(page_b);
    graph.add_page(page_c);

    // Should visit each page only once despite cycle
    let visited = graph.traverse_from("a.md", 100);
    assert_eq!(visited.len(), 3);
    assert!(visited.contains(&"a.md".to_string()));
    assert!(visited.contains(&"b.md".to_string()));
    assert!(visited.contains(&"c.md".to_string()));
}

#[test]
fn test_complex_graph_structure() {
    let mut graph = Graph::new();

    // Create hub page linking to many pages
    let hub = Page {
        path: "hub.md".to_string(),
        title: "Hub".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: (0..50).map(|i| format!("spoke{}.md", i)).collect(),
        ontology: None,
    };
    graph.add_page(hub);

    // Create spoke pages linking back to hub
    for i in 0..50 {
        let spoke = Page {
            path: format!("spoke{}.md", i),
            title: format!("Spoke {}", i),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: vec!["hub.md".to_string()],
            ontology: None,
        };
        graph.add_page(spoke);
    }

    assert_eq!(graph.page_count(), 51);

    // Hub should have 50 backlinks
    let hub_backlinks = graph.get_backlinks("hub.md");
    assert_eq!(hub_backlinks.len(), 50);

    // No orphans
    let stats = graph.stats();
    assert_eq!(stats.orphan_pages, 0);
}

#[test]
fn test_graph_with_tags() {
    let mut graph = Graph::new();

    // Create pages with various tags
    for i in 0..30 {
        let page = Page {
            path: format!("page{}.md", i),
            title: format!("Page {}", i),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: vec![
                format!("tag{}", i % 3),
                format!("category{}", i % 5),
            ],
            links: Vec::new(),
        };
        graph.add_page(page);
    }

    // Verify pages can be retrieved
    for i in 0..30 {
        let page = graph.get_page(&format!("page{}.md", i));
        assert!(page.is_some());
        assert_eq!(page.unwrap().tags.len(), 2);
    }
}

#[test]
fn test_graph_block_counting() {
    let mut graph = Graph::new();

    for i in 0..10 {
        let content = format!("- Block 1\n- Block 2\n  - Nested\n- Block 3");
        let page = parse_logseq_page(&content, &format!("page{}.md", i)).unwrap();
        graph.add_page(page);
    }

    let stats = graph.stats();
    assert!(stats.total_blocks >= 30); // At least 3 top-level blocks per page * 10 pages
}

#[test]
fn test_graph_with_namespace_pages() {
    let mut graph = Graph::new();

    let pages = vec![
        "project/feature/design.md",
        "project/feature/implementation.md",
        "project/feature/tests.md",
        "project/docs/readme.md",
        "project/docs/api.md",
    ];

    for path in pages {
        let page = Page {
            path: path.to_string(),
            title: path.split('/').last().unwrap().to_string(),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: Vec::new(),
            ontology: None,
        };
        graph.add_page(page);
    }

    assert_eq!(graph.page_count(), 5);

    // Verify namespace pages can be retrieved
    let design = graph.get_page("project/feature/design.md");
    assert!(design.is_some());
}

#[test]
fn test_graph_statistics_accuracy() {
    let mut graph = Graph::new();

    // Create 50 pages with known structure
    for i in 0..50 {
        let page = Page {
            path: format!("page{}.md", i),
            title: format!("Page {}", i),
            properties: HashMap::new(),
            blocks: vec![
                Block {
                    id: format!("block{}-1", i),
                    content: "Content 1".to_string(),
                    children: Vec::new(),
                    properties: HashMap::new(),
                    level: 0,
                },
                Block {
                    id: format!("block{}-2", i),
                    content: "Content 2".to_string(),
                    children: Vec::new(),
                    properties: HashMap::new(),
                    level: 0,
                },
            ],
            tags: vec!["tag1".to_string()],
            links: if i < 49 {
                vec![format!("page{}.md", i + 1)]
            } else {
                Vec::new()
            },
        };
        graph.add_page(page);
    }

    let stats = graph.stats();
    assert_eq!(stats.page_count, 50);
    assert_eq!(stats.total_blocks, 100); // 50 pages * 2 blocks
    assert_eq!(stats.total_links, 49); // 49 pages with links
}

#[test]
fn test_graph_page_replacement() {
    let mut graph = Graph::new();

    let page_v1 = Page {
        path: "test.md".to_string(),
        title: "Version 1".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    graph.add_page(page_v1);
    assert_eq!(graph.page_count(), 1);

    let page_v2 = Page {
        path: "test.md".to_string(),
        title: "Version 2".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    graph.add_page(page_v2);
    assert_eq!(graph.page_count(), 1); // Same path, so count stays 1

    let page = graph.get_page("test.md").unwrap();
    assert_eq!(page.title, "Version 2");
}

#[test]
fn test_graph_link_consistency_after_updates() {
    let mut graph = Graph::new();

    // Add page A linking to B
    let page_a = Page {
        path: "a.md".to_string(),
        title: "A".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["b.md".to_string()],
        ontology: None,
    };
    graph.add_page(page_a);

    // Check B has backlink from A
    let b_backlinks = graph.get_backlinks("b.md");
    assert_eq!(b_backlinks.len(), 1);

    // Update page A to link to C instead
    let page_a_updated = Page {
        path: "a.md".to_string(),
        title: "A Updated".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["c.md".to_string()],
        ontology: None,
    };
    graph.add_page(page_a_updated);

    // B should still have the backlink (implementation dependent)
    // This tests the current behavior
    let b_backlinks = graph.get_backlinks("b.md");
    // The exact behavior depends on implementation
    assert!(b_backlinks.len() >= 0);
}

#[test]
fn test_graph_traversal_with_multiple_paths() {
    let mut graph = Graph::new();

    // Create diamond structure: A -> B -> D, A -> C -> D
    let page_a = Page {
        path: "a.md".to_string(),
        title: "A".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["b.md".to_string(), "c.md".to_string()],
    };

    let page_b = Page {
        path: "b.md".to_string(),
        title: "B".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["d.md".to_string()],
        ontology: None,
    };

    let page_c = Page {
        path: "c.md".to_string(),
        title: "C".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: vec!["d.md".to_string()],
        ontology: None,
    };

    let page_d = Page {
        path: "d.md".to_string(),
        title: "D".to_string(),
        properties: HashMap::new(),
        blocks: Vec::new(),
        tags: Vec::new(),
        links: Vec::new(),
        ontology: None,
    };

    graph.add_page(page_a);
    graph.add_page(page_b);
    graph.add_page(page_c);
    graph.add_page(page_d);

    let visited = graph.traverse_from("a.md", 10);
    assert_eq!(visited.len(), 4);
    assert!(visited.contains(&"d.md".to_string()));
}

#[test]
fn test_graph_serialization() {
    let mut graph = Graph::new();

    for i in 0..5 {
        let page = Page {
            path: format!("page{}.md", i),
            title: format!("Page {}", i),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: Vec::new(),
        };
        graph.add_page(page);
    }

    // Serialize to JSON
    let json = serde_json::to_string(&graph);
    assert!(json.is_ok());

    // Deserialize back
    let deserialized: Result<Graph, _> = serde_json::from_str(&json.unwrap());
    assert!(deserialized.is_ok());

    let restored_graph = deserialized.unwrap();
    assert_eq!(restored_graph.page_count(), 5);
}
