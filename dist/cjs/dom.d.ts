import { Event as DockviewEvent, Emitter } from './events';
import { IDisposable, CompositeDisposable } from './lifecycle';
export interface OverflowEvent {
    hasScrollX: boolean;
    hasScrollY: boolean;
}
export declare class OverflowObserver extends CompositeDisposable {
    private readonly _onDidChange;
    readonly onDidChange: DockviewEvent<OverflowEvent>;
    private _value;
    constructor(el: HTMLElement);
}
export declare function watchElementResize(element: HTMLElement, cb: (entry: ResizeObserverEntry) => void): IDisposable;
export declare const removeClasses: (element: HTMLElement, ...classes: string[]) => void;
export declare const addClasses: (element: HTMLElement, ...classes: string[]) => void;
export declare const toggleClass: (element: HTMLElement, className: string, isToggled: boolean) => void;
export declare function isAncestor(testChild: Node | null, testAncestor: Node | null): boolean;
export declare function getElementsByTagName(tag: string, document: ParentNode): HTMLElement[];
export interface IFocusTracker extends IDisposable {
    readonly onDidFocus: DockviewEvent<void>;
    readonly onDidBlur: DockviewEvent<void>;
    refreshState?(): void;
}
export declare function trackFocus(element: HTMLElement): IFocusTracker;
export declare function quasiPreventDefault(event: Event): void;
export declare function quasiDefaultPrevented(event: Event): boolean;
export type CspNonceProvider = string | ((targetDocument: Document) => string | undefined);
export interface AddStylesOptions {
    nonce?: CspNonceProvider;
}
export declare function addStyles(document: Document, styleSheetList: StyleSheetList, options?: AddStylesOptions): void;
export declare function getDomNodePagePosition(domNode: Element): {
    left: number;
    top: number;
    width: number;
    height: number;
};
/**
 * Check whether an element is in the DOM (including the Shadow DOM)
 * @see https://terodox.tech/how-to-tell-if-an-element-is-in-the-dom-including-the-shadow-dom/
 */
export declare function isInDocument(element: Element): boolean;
export declare function addTestId(element: HTMLElement, id: string): void;
export declare function disableIframePointEvents(rootNode?: ParentNode): {
    release: () => void;
};
export declare function getDockviewTheme(element: HTMLElement): string | undefined;
export declare class Classnames {
    private readonly element;
    private _classNames;
    constructor(element: HTMLElement);
    setClassNames(classNames: string): void;
}
export declare function isChildEntirelyVisibleWithinParent(child: HTMLElement, parent: HTMLElement): boolean;
export declare function onDidWindowMoveEnd(window: Window): Emitter<void>;
export declare function onDidWindowResizeEnd(element: Window, cb: () => void): CompositeDisposable;
export declare function shiftAbsoluteElementIntoView(element: HTMLElement, root: HTMLElement, options?: {
    buffer?: number;
}): void;
export declare function findRelativeZIndexParent(el: HTMLElement): HTMLElement | null;
/** Whether the user has requested reduced motion: the JS counterpart to the
 *  `prefers-reduced-motion` media query, for animations driven in script. */
export declare function prefersReducedMotion(doc?: Document): boolean;
/** The first opaque computed background colour walking up from `element` (the
 *  element itself, then its ancestors). Use to give a floating/overlapping
 *  surface a non-see-through backdrop derived from the live DOM. Returns `''`
 *  when nothing opaque is found (let the stylesheet decide). */
export declare function resolveOpaqueBackground(element: HTMLElement): string;
