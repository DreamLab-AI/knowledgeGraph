- ### Definition
  - VSCode is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:VSCode
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # Remote development over SSH tips.
		- This guide provides a comprehensive approach to maximizing SSH connection stability and ensuring persistent development sessions when using VS Code Remote SSH. By combining robust keepalive settings with tmux session management, you'll maintain productive remote development workflows even with unstable network connections.
		- **Prevent SSH timeouts** with comprehensive keepalive configurations
		- **Maintain persistent sessions** using tmux for process continuity
		- **Automate reconnection** to the same working environment
		- **Minimize connection overhead** with SSH multiplexing
		- Edit `~/.ssh/config` on your local machine and add or update your host entry:
		  ```
		- | 
		  | Setting | 
		  | Purpose | 
		  |
		  | ---- |
		  | 
		  | `ServerAliveInterval 30` | 
		  | Send keepalive packet every 30 seconds | 
		  |
		  | 
		  | `ServerAliveCountMax 4` | 
		  | Disconnect after 4 failed keepalive attempts | 
		  |
		  | 
		  | `TCPKeepAlive yes` | 
		  | Enable TCP-layer keepalive packets | 
		  |
		  | 
		  | `ControlMaster auto` | 
		  | Enable connection multiplexing | 
		  |
		  | 
		  | `ControlPersist 10m` | 
		  | Keep master connection alive for 10 minutes after last session closes | 
		  |
		  | 
		  | `ControlPath` | 
		  | Define socket file location for multiplexed connections | 
		  |
	  Edit `/etc/ssh/sshd_config` on the remote server (requires sudo):
	  ```
	  Apply changes:
	  ```
	  > 
	  **Note:** Server-side keepalive helps detect dead clients faster and maintains cleaner session state.
	  Configure VS Code to automatically use tmux for all remote terminals. Add to your VS Code settings (`settings.json`):
	  ```
  - **Workspace-specific sessions**: Each project gets its own tmux session
  - **Automatic attachment**: `new-session -A` attaches to existing sessions or creates new ones
  - **Persistent state**: Terminal sessions survive VS Code restarts and disconnections
	  Add to your remote user's `~/.bashrc` or `~/.zshrc`:
	  ```
	  This ensures:
  - Only interactive SSH sessions trigger tmux
  - Local terminal sessions remain unaffected
  - Seamless persistence across all SSH clients
	  For quick connections or aliases:
	  ```
	  Add to your local `~/.bashrc` or `~/.zshrc`:
	  ```
	  | 
	  | Command | 
	  | Action | 
	  |
	  | ---- |
	  | 
	  | `Ctrl+b d` | 
	  | Detach from session | 
	  |
	  | 
	  | `tmux ls` | 
	  | List all sessions | 
	  |
	  | 
	  | `tmux attach -t session-name` | 
	  | Attach to specific session | 
	  |
	  | 
	  | `Ctrl+b c` | 
	  | Create new window | 
	  |
	  | 
	  | `Ctrl+b n/p` | 
	  | Next/Previous window | 
	  |
	  | 
	  | `Ctrl+b %` | 
	  | Split pane vertically | 
	  |
	  | 
	  | `Ctrl+b "` | 
	  | Split pane horizontally | 
	  |
	  ```
	  ✅ **Persisted through disconnections:**
  - Terminal sessions and running processes
  - tmux windows and panes layout
  - Command history within tmux
  - Background jobs and services
	  ❌ **Not persisted (VS Code specific):**
  - Debug sessions
  - VS Code UI state
  - Extension states
  - Unsaved file changes
  - **Reconnect to VS Code Remote SSH**
  - **Open integrated terminal** (automatically attaches to tmux)
  - **Resume work** with all processes intact
	  ```
	  ```
	  Create `~/.local/bin/reconnect-vscode`:
	  ```
	  ```
	  ```
  - Verify terminal profile in settings
  - Check remote shell configuration
  - Test manual tmux attachment
	  ```
	  ```
  - [ ] Configure local SSH client (`~/.ssh/config`)
  - [ ] Set up VS Code terminal profiles
  - [ ] Install tmux on remote server
  - [ ] Configure shell auto-attachment (optional)
  - [ ] Test connection stability
  - [ ] Create project-specific tmux sessions
  - [ ] Set up recovery aliases
	  This configuration provides a robust foundation for remote development with VS Code. The combination of SSH keepalive settings and tmux session management ensures that network interruptions become minor inconveniences rather than productivity killers. Your development environment remains exactly as you left it, ready for immediate resumption of work.
	  <!--EndFragment-->

  - ## Overview
  - ## Goals
  - ## 1. Client-Side SSH Configuration
		- ### Basic Keepalive Settings
		  ```
		  Host my-remote
		    HostName example.com
		    User myuser
		    ServerAliveInterval 30
		    ServerAliveCountMax 4
		    TCPKeepAlive yes
		    ControlMaster auto
		    ControlPersist 10m
		    ControlPath ~/.ssh/cm-%r@%h:%p
		- ### Configuration Explained
  - ## 2. Server-Side SSH Configuration (Optional)
  - ### Configuring sshd for Better Stability
	  ```
	  ClientAliveInterval 60
	  ClientAliveCountMax 3
	  TCPKeepAlive yes
	  ```
	  sudo systemctl restart sshd
  - ## 3. VS Code Terminal Integration with tmux
  - ### Automatic tmux Session Management
	  ```
	  {
	  "terminal.integrated.profiles.linux": {
	    "tmux": {
	      "path": "tmux",
	      "args": ["new-session", "-A", "-s", "vscode:${workspaceFolderBasename}"]
	    }
	  },
	  "terminal.integrated.defaultProfile.linux": "tmux"
	  }
  - ### Benefits
  - ## 4. Shell-Based Auto-Attachment
  - ### Automatic tmux for SSH Sessions
	  ```
	  # Auto-attach to tmux for SSH sessions only
	  if [[ $- =~ i ]] && [[ -z "$TMUX" ]] && [[ -n "$SSH_TTY" ]]; then
	    tmux attach-session -t ssh_tmux || tmux new-session -s ssh_tmux
	  fi
  - ## 5. Quick Connection Methods
  - ### One-Liner SSH with tmux
	  ```
	  ssh -t my-remote "tmux new-session -A -s vscode"
  - ### Creating Useful Aliases
	  ```
	  alias dev-remote='ssh -t my-remote "tmux new-session -A -s dev"'
	  alias work-remote='ssh -t my-remote "tmux new-session -A -s work"'
  - ## 6. tmux Best Practices
  - ### Essential tmux Commands
  - ### Session Organization
	  ```
	  # Create project-specific sessions
	  tmux new-session -s project-frontend
	  tmux new-session -s project-backend
	  tmux new-session -s project-database

	  # Switch between sessions
	  Ctrl+b s  # Interactive session selector
  - ## 7. Handling VS Code Reconnections
  - ### What Persists
  - ### Recovery Workflow
  - ## 8. Advanced Resilience Strategies
  - ### For Unstable Networks
	  ```
	  # More aggressive keepalive for mobile/WiFi
	  Host mobile-remote
	    HostName example.com
	    User myuser
	    ServerAliveInterval 15
	    ServerAliveCountMax 6
	    ConnectTimeout 30
	    ConnectionAttempts 3
  - ### Handling Long-Running Tasks
	  ```
	  # Use tmux for long-running processes
	  tmux new-session -d -s batch-job 'python long_running_script.py'

	  # Check status later
	  tmux attach -t batch-job
  - ### Network Recovery Script
	  ```
	  #!/bin/bash
	  # Kill stale connections
	  pkill -f "ssh.*my-remote"
	  # Clear control socket
	  rm -f ~/.ssh/cm-*
	  # Reconnect
	  code --remote ssh-remote+my-remote /path/to/project
  - ## 9. Troubleshooting
  - ### Common Issues and Solutions
  - #### SSH Connection Drops Frequently
	  ```
	  # Test connection stability
	  while true; do 
	    date
	    ssh my-remote "echo 'Connection alive'"
	    sleep 60
	  done
  - #### tmux Sessions Not Persisting
	  ```
	  # Check tmux server status
	  tmux info
	  # Verify session exists
	  tmux ls
	  # Force new server if corrupted
	  tmux kill-server
  - #### VS Code Not Attaching to tmux
  - ## 10. Performance Optimization
  - ### SSH Compression for Slow Networks
	  ```
	  Host slow-remote
	    Compression yes
	    CompressionLevel 6
  - ### Reducing Connection Overhead
	  ```
	  # Reuse SSH connections for git
	  Host github.com
	    ControlMaster auto
	    ControlPersist 600
  - ## Quick Start Checklist
  - ## Conclusion

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z