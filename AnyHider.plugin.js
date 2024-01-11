// META { "name": "AnyHider", "website": "https://github.com/Fullmetalchemist/BDPlugins" } //
global.HideElementPlugin = class HideElementPlugin {
    getName() {
        return "Hide Element Plugin";
    }

    getDescription() {
        return "Hide specific elements in Discord with a context menu option.";
    }

    getAuthor() {
        return "Your Name";
    }

    getVersion() {
        return "1.0.0";
    }

    start() {
        const ContextMenu = BdApi.PluginModules.ContextMenu;
        if (!ContextMenu) {
            BdApi.alert("Error", "Missing dependency: ContextMenu plugin is required for HideElementPlugin to work.");
            return;
        }

        this.contextMenuId = ContextMenu.create("Hide Element", (e) => {
            this.hideElement(e);
        });
    }

    stop() {
        if (this.contextMenuId !== null) {
            BdApi.ContextMenu.close(this.contextMenuId);
            this.contextMenuId = null;
        }
    }

    hideElement(event) {
        const targetElement = event.target;
        targetElement.style.display = "none";
    }
};
