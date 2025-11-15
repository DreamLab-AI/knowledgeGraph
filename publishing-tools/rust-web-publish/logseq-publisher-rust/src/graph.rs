use crate::parser::Page;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use petgraph::graph::{DiGraph, NodeIndex};
use petgraph::Direction;

#[derive(Debug, Serialize, Deserialize)]
pub struct Graph {
    pages: HashMap<String, Page>,
    backlinks: HashMap<String, Vec<String>>,
    #[serde(skip)]
    petgraph: DiGraph<String, ()>,
    #[serde(skip)]
    node_indices: HashMap<String, NodeIndex>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GraphStats {
    pub page_count: usize,
    pub total_blocks: usize,
    pub total_links: usize,
    pub orphan_pages: usize,
    pub connected_components: usize,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GraphData {
    pub nodes: Vec<GraphNode>,
    pub edges: Vec<GraphEdge>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GraphNode {
    pub id: String,
    pub title: String,
    pub block_count: usize,
    pub link_count: usize,
    pub backlink_count: usize,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GraphEdge {
    pub source: String,
    pub target: String,
}

impl Graph {
    pub fn new() -> Self {
        Self {
            pages: HashMap::new(),
            backlinks: HashMap::new(),
            petgraph: DiGraph::new(),
            node_indices: HashMap::new(),
        }
    }

    pub fn add_page(&mut self, page: Page) {
        let path = page.path.clone();

        // Add node to petgraph
        let node_idx = self.petgraph.add_node(path.clone());
        self.node_indices.insert(path.clone(), node_idx);

        // Update backlinks for all links in this page
        for link in &page.links {
            self.backlinks
                .entry(link.clone())
                .or_insert_with(Vec::new)
                .push(path.clone());
        }

        self.pages.insert(path, page);
    }

    /// Build link edges in the graph after all pages are added
    pub fn build_links(&mut self) {
        let pages_clone: Vec<_> = self.pages.values().cloned().collect();

        for page in pages_clone {
            let source_idx = self.node_indices.get(&page.path);
            if source_idx.is_none() {
                continue;
            }
            let source_idx = *source_idx.unwrap();

            for link in &page.links {
                if let Some(target_idx) = self.node_indices.get(link) {
                    // Add directed edge from source to target
                    self.petgraph.add_edge(source_idx, *target_idx, ());
                }
            }
        }
    }

    pub fn get_page(&self, path: &str) -> Option<&Page> {
        self.pages.get(path)
    }

    pub fn get_backlinks(&self, path: &str) -> Vec<String> {
        self.backlinks
            .get(path)
            .cloned()
            .unwrap_or_default()
    }

    pub fn page_count(&self) -> usize {
        self.pages.len()
    }

    pub fn pages(&self) -> impl Iterator<Item = &Page> {
        self.pages.values()
    }

    pub fn stats(&self) -> GraphStats {
        let total_blocks: usize = self.pages.values()
            .map(|p| count_blocks(&p.blocks))
            .sum();

        let total_links: usize = self.pages.values()
            .map(|p| p.links.len())
            .sum();

        let orphan_pages = self.pages.values()
            .filter(|p| {
                p.links.is_empty() &&
                self.backlinks.get(&p.path).map_or(true, |bl| bl.is_empty())
            })
            .count();

        // Count connected components using petgraph
        let connected_components = petgraph::algo::kosaraju_scc(&self.petgraph).len();

        GraphStats {
            page_count: self.pages.len(),
            total_blocks,
            total_links,
            orphan_pages,
            connected_components,
        }
    }

    /// Get pages that link TO this page (incoming links)
    pub fn get_incoming_links(&self, path: &str) -> Vec<String> {
        if let Some(node_idx) = self.node_indices.get(path) {
            self.petgraph
                .neighbors_directed(*node_idx, Direction::Incoming)
                .map(|idx| self.petgraph[idx].clone())
                .collect()
        } else {
            Vec::new()
        }
    }

    /// Get pages that this page links TO (outgoing links)
    pub fn get_outgoing_links(&self, path: &str) -> Vec<String> {
        if let Some(node_idx) = self.node_indices.get(path) {
            self.petgraph
                .neighbors_directed(*node_idx, Direction::Outgoing)
                .map(|idx| self.petgraph[idx].clone())
                .collect()
        } else {
            Vec::new()
        }
    }

    /// Export graph data for visualization
    pub fn export_graph_data(&self) -> GraphData {
        let mut nodes = Vec::new();
        let mut edges = Vec::new();

        for page in self.pages.values() {
            let backlink_count = self.backlinks
                .get(&page.path)
                .map_or(0, |bl| bl.len());

            nodes.push(GraphNode {
                id: page.path.clone(),
                title: page.title.clone(),
                block_count: count_blocks(&page.blocks),
                link_count: page.links.len(),
                backlink_count,
            });

            for link in &page.links {
                edges.push(GraphEdge {
                    source: page.path.clone(),
                    target: link.clone(),
                });
            }
        }

        GraphData { nodes, edges }
    }

    /// Find shortest path between two pages
    pub fn shortest_path(&self, from: &str, to: &str) -> Option<Vec<String>> {
        let from_idx = self.node_indices.get(from)?;
        let to_idx = self.node_indices.get(to)?;

        let result = petgraph::algo::astar(
            &self.petgraph,
            *from_idx,
            |idx| idx == *to_idx,
            |_| 1,
            |_| 0,
        );

        result.map(|(_, path)| {
            path.iter()
                .map(|idx| self.petgraph[*idx].clone())
                .collect()
        })
    }

    /// Get pages within N hops of the given page
    pub fn get_neighborhood(&self, path: &str, hops: usize) -> Vec<String> {
        let mut result = Vec::new();
        let mut visited = HashMap::new();

        if let Some(start_idx) = self.node_indices.get(path) {
            self.bfs_limited(*start_idx, hops, &mut visited);

            for (idx, _) in visited {
                let page_path = self.petgraph[idx].clone();
                if page_path != path {
                    result.push(page_path);
                }
            }
        }

        result
    }

    fn bfs_limited(&self, start: NodeIndex, max_depth: usize, visited: &mut HashMap<NodeIndex, usize>) {
        use std::collections::VecDeque;

        let mut queue = VecDeque::new();
        queue.push_back((start, 0));
        visited.insert(start, 0);

        while let Some((node, depth)) = queue.pop_front() {
            if depth >= max_depth {
                continue;
            }

            for neighbor in self.petgraph.neighbors_undirected(node) {
                if !visited.contains_key(&neighbor) {
                    visited.insert(neighbor, depth + 1);
                    queue.push_back((neighbor, depth + 1));
                }
            }
        }
    }
}

impl Default for Graph {
    fn default() -> Self {
        Self::new()
    }
}

fn count_blocks(blocks: &[crate::parser::Block]) -> usize {
    blocks.iter()
        .map(|b| 1 + count_blocks(&b.children))
        .sum()
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::parser::Page;
    use std::collections::HashMap;

    #[test]
    fn test_graph_creation() {
        let graph = Graph::new();
        assert_eq!(graph.page_count(), 0);
    }

    #[test]
    fn test_add_page_and_backlinks() {
        let mut graph = Graph::new();

        let page1 = Page {
            path: "page1.md".to_string(),
            title: "Page 1".to_string(),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: vec!["page2.md".to_string()],
            ontology: None,
        };

        graph.add_page(page1);

        let backlinks = graph.get_backlinks("page2.md");
        assert_eq!(backlinks, vec!["page1.md"]);
    }

    #[test]
    fn test_build_links() {
        let mut graph = Graph::new();

        let page1 = Page {
            path: "page1.md".to_string(),
            title: "Page 1".to_string(),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: vec!["page2.md".to_string()],
        };

        let page2 = Page {
            path: "page2.md".to_string(),
            title: "Page 2".to_string(),
            properties: HashMap::new(),
            blocks: Vec::new(),
            tags: Vec::new(),
            links: Vec::new(),
        };

        graph.add_page(page1);
        graph.add_page(page2);
        graph.build_links();

        let outgoing = graph.get_outgoing_links("page1.md");
        assert_eq!(outgoing, vec!["page2.md"]);
    }

    #[test]
    fn test_stats() {
        let graph = Graph::new();
        let stats = graph.stats();
        assert_eq!(stats.page_count, 0);
        assert_eq!(stats.total_blocks, 0);
        assert_eq!(stats.total_links, 0);
    }
}
