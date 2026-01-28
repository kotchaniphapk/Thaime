(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/twodayweb-work/costomer/thaiMe/src/components/LanguageToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LanguageToggle() {
    _s();
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const toggleLanguage = ()=>{
        const newLang = i18n.language === 'th' ? 'en' : 'th';
        i18n.changeLanguage(newLang);
        if (typeof document !== 'undefined') {
            document.documentElement.lang = newLang;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleLanguage,
        className: `absolute top-4 right-4 z-20  flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md ${i18n.language === 'th' ? 'bg-white/90 text-[#2c1100] hover:bg-white' : 'bg-[#ff6a00] text-white hover:bg-[#ff6a00]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/LanguageToggle.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "uppercase tracking-wide font-bold",
                children: i18n.language === 'en' ? 'EN' : 'RO'
            }, void 0, false, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/LanguageToggle.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/LanguageToggle.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(LanguageToggle, "iD7vDB/EPQWin5ATG71yacngHuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/twodayweb-work/costomer/thaiMe/src/components/ui/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/twodayweb-work/costomer/thaiMe/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/src/components/ui/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    // Custom Slot implementation without Radix UI
    if (asChild && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](props.children)) {
        const child = props.children;
        const childClassName = child.props?.className || "";
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
                variant,
                size
            }), childClassName, className)
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/ui/button.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/src/components/LanguageToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as House>");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function HeroSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative max-w-full mx-auto overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 ",
                style: {
                    background: "linear-gradient(90deg,rgba(61, 61, 61, 1) 0%, rgba(48, 47, 47, 1) 14%, rgba(0, 0, 0, 1) 23%, rgba(255, 106, 0, 1) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(closest-side,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_40%,rgba(0,0,0,0.65)_100%)]"
            }, void 0, false, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                lineNumber: 23,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                    fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col md:flex-row items-center justify-between max-w-full mx-auto px-6 md:px-12 lg:px-16 md:py-20 py-10 gap-6 min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-start justify-center w-full max-w-xl relative overflow-visible gap-6 md:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: t("hero.imageAlt", "Cafe interior with coffee and pastries"),
                                width: 400,
                                height: 400,
                                className: "object-cover",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl lg:text-6xl font-semibold text-white  max-w-md",
                                        children: t('heroSection.title')
                                    }, void 0, false, {
                                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                        lineNumber: 39,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-2xl font-semibold max-w-md",
                                        children: t('heroSection.subtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                        lineNumber: 42,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        className: "text-white border-0 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-base sm:text-base font-medium bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_50%,#e55d00_100%)] hover:bg-[linear-gradient(135deg,#ff9533_0%,#ff6900_50%,#ff6900_100%)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__["House"], {
                                                    className: "w-4 sm:w-5 h-4 sm:h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this),
                                                t('heroSection.home')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        className: "text-white border-0 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-base sm:text-base font-medium bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_50%,#e55d00_100%)] hover:bg-[linear-gradient(135deg,#ff9533_0%,#ff6900_50%,#ff6900_100%)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/menu",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                                                    className: "w-4 sm:w-5 h-4 sm:h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                t('heroSection.menu')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        className: "text-white border-0 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-base sm:text-base font-medium bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_50%,#e55d00_100%)] hover:bg-[linear-gradient(135deg,#ff9533_0%,#ff6900_50%,#ff6900_100%)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+66614837772",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 sm:w-5 h-4 sm:h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                t('heroSection.contact')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        className: "text-white border-0 px-4 sm:px-6 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-90 transition-all text-base sm:text-base font-medium bg-[linear-gradient(135deg,#ff8533_0%,#ff6900_50%,#e55d00_100%)] hover:bg-[linear-gradient(135deg,#ff9533_0%,#ff6900_50%,#ff6900_100%)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.tiktok.com/@taxiprivatetravel24hours?_r=1&_t=ZS-93EVHNevO8i",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTiktok"], {
                                                    className: "w-4 sm:w-5 h-4 sm:h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this),
                                                t('heroSection.tiktok')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-center justify-end w-full relative overflow-visible",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative right-0 -mr-32 md:-mr-56 xl:-mr-72 max-w-5xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/hero.svg",
                                alt: t("hero.imageAlt", "Cafe interior with coffee and pastries"),
                                width: 2202,
                                height: 1000,
                                className: "object-cover",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/twodayweb-work/costomer/thaiMe/src/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-center text-base sm:text-base text-[#ce3033] font-semibold",
        children: "www.somtum.vercel.app"
    }, void 0, false, {
        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/components/footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/twodayweb-work/costomer/thaiMe/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/src/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/twodayweb-work/costomer/thaiMe/src/components/footer.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/app/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$twodayweb$2d$work$2f$costomer$2f$thaiMe$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/twodayweb-work/costomer/thaiMe/src/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/twodayweb-work/costomer/thaiMe/src/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=twodayweb-work_costomer_thaiMe_src_46a7996e._.js.map