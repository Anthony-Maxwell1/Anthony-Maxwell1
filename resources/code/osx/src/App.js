import { classes, topBar, extraHtml, currentPage, gridSize, TileRegistry } from "./conf.js";
import { useEffect } from "react";

const findRegistry = (id, nodes) => {
    for (const n of nodes) {
        if (n.id === id) return n;
        if (n.children) {
            const found = findRegistry(id, n.children);
            if (found) return found;
        }
    }
    return null;
};

function getViewportSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return { width: width, height: height };
}

export default function DashboardPage() {
  useEffect(() => {
    console.log(getViewportSize())
  })
  return (
    <div className="h-screen flex">
      {/* Dashboard */}
      <main className="flex-1">
        <div
          className="relative w-full h-full overflow-hidden bg-cover"
          style={{ backgroundImage: "url('/images/backgrounds/builtin/0001.png')" }}
        >
            {/* TILES */}
            {currentPage.tiles.map((tile) => {
                const def = findRegistry(tile.registryId, TileRegistry);
                if (!def?.component) return null;
                const TileComponent = def.component;

                let TopBarReplaced = topBar;
                if (topBar) {
                    TopBarReplaced = topBar.replace("{__TILE_TITLE__}", def.label || "");
                }

                const style: React.CSSProperties = {
                    position: "absolute",
                    left: `${(tile.x / gridSize.cols) * 100}%`,
                    top: `${(tile.y / gridSize.rows) * 100}%`,
                    width: `${(tile.w / gridSize.cols) * 100}%`,
                    height: `${(tile.h / gridSize.rows) * 100}%`,
                };

                return (
                    <div
                        key={tile.id}
                        style={style}
                        className={
                            (tile.specialEffects?.includes("topBar")
                                ? classes?.TileOuter
                                : classes?.TileOuterNoTopBar) + " relative group"
                        }
                    >
                        {TopBarReplaced && tile.specialEffects?.includes("topBar") && (
                            <div dangerouslySetInnerHTML={{ __html: TopBarReplaced }} />
                        )}
                        {extraHtml && <div dangerouslySetInnerHTML={{ __html: extraHtml }} />}
                        <div className={classes?.Tile || "border bg-white shadow"}>
                            <TileComponent {...tile.props} />
                        </div>
                    </div>
                );
            })}
        </div>
      </main>
    </div>
  );
}
