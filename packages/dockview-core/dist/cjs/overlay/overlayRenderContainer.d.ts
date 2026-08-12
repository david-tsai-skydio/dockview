import { Droptarget } from '../dnd/droptarget';
import { CompositeDisposable } from '../lifecycle';
import { IDockviewPanel } from '../dockview/dockviewPanel';
import { DockviewComponent } from '../dockview/dockviewComponent';
export type DockviewPanelRenderer = 'onlyWhenVisible' | 'always';
export interface IRenderable {
    readonly element: HTMLElement;
    readonly dropTarget: Droptarget;
}
export declare class OverlayRenderContainer extends CompositeDisposable {
    readonly element: HTMLElement;
    readonly accessor: DockviewComponent;
    private readonly map;
    private _disposed;
    private readonly positionCache;
    private readonly pendingUpdates;
    constructor(element: HTMLElement, accessor: DockviewComponent);
    updateAllPositions(): void;
    /**
     * Reposition a single panel's overlay over its reference container,
     * optionally forcing it visible even when the panel is not currently
     * "visible" (e.g. its group is collapsed). Used by the auto-hide peek to
     * slide an `always`-rendered panel out without reparenting it or mutating
     * the panel's visibility state. No-op if the panel isn't overlay-rendered.
     */
    repositionPanelOverlay(panelId: string, forceVisible?: boolean, clip?: DOMRect): void;
    detatch(panel: IDockviewPanel): boolean;
    attach(options: {
        panel: IDockviewPanel;
        referenceContainer: IRenderable;
    }): HTMLElement;
}
