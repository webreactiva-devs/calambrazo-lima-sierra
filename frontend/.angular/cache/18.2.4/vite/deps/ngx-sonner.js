import {
  NgComponentOutlet,
  isPlatformBrowser
} from "./chunk-YGQ6W4DD.js";
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  Pipe,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-JPDR6UEA.js";
import "./chunk-GNFRRIDV.js";
import "./chunk-SJGKX54T.js";
import "./chunk-PGOKMGXO.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5K356HEJ.js";

// node_modules/ngx-sonner/fesm2022/ngx-sonner.mjs
function IconComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0);
    ɵɵelement(1, "path", 2);
    ɵɵelementEnd();
  }
}
function IconComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0);
    ɵɵelement(1, "path", 3);
    ɵɵelementEnd();
  }
}
function IconComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 0);
    ɵɵelement(1, "path", 4);
    ɵɵelementEnd();
  }
}
function IconComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 1);
    ɵɵelement(1, "path", 5)(2, "path", 6);
    ɵɵelementEnd();
  }
}
function LoaderComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
}
var _c0 = ["toastRef"];
var _c1 = [[["", "loading-icon", ""]], [["", "success-icon", ""]], [["", "error-icon", ""]], [["", "warning-icon", ""]], [["", "info-icon", ""]]];
var _c2 = ["[loading-icon]", "[success-icon]", "[error-icon]", "[warning-icon]", "[info-icon]"];
function ToastComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function ToastComponent_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onCloseButtonClick());
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 4);
    ɵɵelement(2, "line", 5)(3, "line", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.classes().closeButton, (tmp_2_0 = ctx_r2.toast().classes) == null ? null : tmp_2_0.closeButton));
    ɵɵattribute("data-disabled", ctx_r2.disabled());
  }
}
function ToastComponent_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastComponent_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 7);
    ɵɵpipe(1, "asComponent");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngComponentOutlet", ɵɵpipeBind1(1, 2, ctx_r2.toast().component))("ngComponentOutletInputs", ctx_r2.toast().componentProps);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastComponent_Conditional_4_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
    ɵɵpipe(1, "asComponent");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngComponentOutlet", ɵɵpipeBind1(1, 2, ctx_r2.toast().icon))("ngComponentOutletInputs", ctx_r2.toast().componentProps);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 4);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_0_Template, 1, 0)(1, ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_1_Template, 1, 0)(2, ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_2_Template, 1, 0)(3, ToastComponent_Conditional_4_Conditional_0_Conditional_3_Case_3_Template, 1, 0);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵconditional((tmp_4_0 = ctx_r2.toastType()) === "success" ? 0 : tmp_4_0 === "error" ? 1 : tmp_4_0 === "warning" ? 2 : tmp_4_0 === "info" ? 3 : -1);
  }
}
function ToastComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, ToastComponent_Conditional_4_Conditional_0_Conditional_1_Template, 1, 0)(2, ToastComponent_Conditional_4_Conditional_0_Conditional_2_Template, 2, 4, "ng-container")(3, ToastComponent_Conditional_4_Conditional_0_Conditional_3_Template, 4, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.toastType() === "loading" && !ctx_r2.toast().icon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.toast().icon ? 2 : 3);
  }
}
function ToastComponent_Conditional_4_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ctx_r2.toast().title, " ");
  }
}
function ToastComponent_Conditional_4_Conditional_2_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastComponent_Conditional_4_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastComponent_Conditional_4_Conditional_2_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 7);
    ɵɵpipe(1, "asComponent");
  }
  if (rf & 2) {
    const title_r4 = ɵɵnextContext();
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", ɵɵpipeBind1(1, 2, title_r4))("ngComponentOutletInputs", ctx_r2.toast().componentProps);
  }
}
function ToastComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, ToastComponent_Conditional_4_Conditional_2_Conditional_1_Template, 1, 1);
    ɵɵpipe(2, "isString");
    ɵɵtemplate(3, ToastComponent_Conditional_4_Conditional_2_Conditional_3_Template, 2, 4, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.classes().title, (tmp_4_0 = ctx_r2.toast().classes) == null ? null : tmp_4_0.title));
    ɵɵadvance();
    ɵɵconditional(ɵɵpipeBind1(2, 3, ctx) ? 1 : 3);
  }
}
function ToastComponent_Conditional_4_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" ", ctx_r2.toast().description, " ");
  }
}
function ToastComponent_Conditional_4_Conditional_3_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastComponent_Conditional_4_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastComponent_Conditional_4_Conditional_3_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 7);
    ɵɵpipe(1, "asComponent");
  }
  if (rf & 2) {
    const description_r5 = ɵɵnextContext();
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", ɵɵpipeBind1(1, 2, description_r5))("ngComponentOutletInputs", ctx_r2.toast().componentProps);
  }
}
function ToastComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, ToastComponent_Conditional_4_Conditional_3_Conditional_1_Template, 1, 1);
    ɵɵpipe(2, "isString");
    ɵɵtemplate(3, ToastComponent_Conditional_4_Conditional_3_Conditional_3_Template, 2, 4, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.descriptionClass(), ctx_r2.toastDescriptionClass(), ctx_r2.classes().description, (tmp_4_0 = ctx_r2.toast().classes) == null ? null : tmp_4_0.description));
    ɵɵadvance();
    ɵɵconditional(ɵɵpipeBind1(2, 3, ctx) ? 1 : 3);
  }
}
function ToastComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function ToastComponent_Conditional_4_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onCancelClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap((tmp_4_0 = ctx_r2.cancelButtonStyle()) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r2.toast().cancelButtonStyle);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.classes().cancelButton, (tmp_5_0 = ctx_r2.toast().classes) == null ? null : tmp_5_0.cancelButton));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx.label, " ");
  }
}
function ToastComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function ToastComponent_Conditional_4_Conditional_5_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onActionClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap((tmp_4_0 = ctx_r2.actionButtonStyle()) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r2.toast().actionButtonStyle);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.classes().actionButton, (tmp_5_0 = ctx_r2.toast().classes) == null ? null : tmp_5_0.actionButton));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx.label, " ");
  }
}
function ToastComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastComponent_Conditional_4_Conditional_0_Template, 4, 2, "div", 8);
    ɵɵelementStart(1, "div", 9);
    ɵɵtemplate(2, ToastComponent_Conditional_4_Conditional_2_Template, 4, 5, "div", 10)(3, ToastComponent_Conditional_4_Conditional_3_Template, 4, 5, "div", 11);
    ɵɵelementEnd();
    ɵɵtemplate(4, ToastComponent_Conditional_4_Conditional_4_Template, 2, 5, "button", 12)(5, ToastComponent_Conditional_4_Conditional_5_Template, 2, 5, "button", 13);
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(ctx_r2.toastType() !== "default" || ctx_r2.toast().icon || ctx_r2.toast().promise ? 0 : -1);
    ɵɵadvance(2);
    ɵɵconditional((tmp_3_0 = ctx_r2.toast().title) ? 2 : -1, tmp_3_0);
    ɵɵadvance();
    ɵɵconditional((tmp_4_0 = ctx_r2.toast().description) ? 3 : -1, tmp_4_0);
    ɵɵadvance();
    ɵɵconditional((tmp_5_0 = ctx_r2.toast().cancel) ? 4 : -1, tmp_5_0);
    ɵɵadvance();
    ɵɵconditional((tmp_6_0 = ctx_r2.toast().action) ? 5 : -1, tmp_6_0);
  }
}
var _c3 = ["listRef"];
var _forTrack0 = ($index, $item) => $item.id;
var _c4 = () => ({});
function NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-sonner-loader", 6);
  }
  if (rf & 2) {
    const toast_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("isVisible", toast_r3.type === "loading");
  }
}
function NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-sonner-icon", 7);
  }
}
function NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-sonner-icon", 8);
  }
}
function NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-sonner-icon", 9);
  }
}
function NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-sonner-icon", 10);
  }
}
function NgxSonnerToaster_Conditional_0_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ngx-sonner-toast", 5);
    ɵɵprojection(1, 0, ["loading-icon", ""], NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_1_Template, 1, 1);
    ɵɵprojection(3, 1, ["success-icon", ""], NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_3_Template, 1, 0);
    ɵɵprojection(5, 2, ["error-icon", ""], NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_5_Template, 1, 0);
    ɵɵprojection(7, 3, ["warning-icon", ""], NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_7_Template, 1, 0);
    ɵɵprojection(9, 4, ["info-icon", ""], NgxSonnerToaster_Conditional_0_For_2_For_3_ProjectionFallback_9_Template, 1, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    const toast_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap((tmp_22_0 = ctx_r1.toastOptions().class) !== null && tmp_22_0 !== void 0 ? tmp_22_0 : "");
    ɵɵproperty("index", $index_r4)("toast", toast_r3)("invert", ctx_r1.invert())("visibleToasts", ctx_r1.visibleToasts())("closeButton", ctx_r1.closeButton())("interacting", ctx_r1.interacting())("position", ctx_r1.position())("expandByDefault", ctx_r1.expand())("expanded", ctx_r1.expanded())("actionButtonStyle", ctx_r1.toastOptions().actionButtonStyle)("cancelButtonStyle", ctx_r1.toastOptions().cancelButtonStyle)("descriptionClass", (tmp_34_0 = ctx_r1.toastOptions().descriptionClass) !== null && tmp_34_0 !== void 0 ? tmp_34_0 : "")("classes", (tmp_35_0 = ctx_r1.toastOptions().classes) !== null && tmp_35_0 !== void 0 ? tmp_35_0 : ɵɵpureFunction0(17, _c4))("duration", (tmp_36_0 = ctx_r1.toastOptions().duration) !== null && tmp_36_0 !== void 0 ? tmp_36_0 : ctx_r1.duration())("unstyled", (tmp_37_0 = ctx_r1.toastOptions().unstyled) !== null && tmp_37_0 !== void 0 ? tmp_37_0 : false);
  }
}
function NgxSonnerToaster_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ol", 3, 0);
    ɵɵlistener("blur", function NgxSonnerToaster_Conditional_0_For_2_Template_ol_blur_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleBlur($event));
    })("focus", function NgxSonnerToaster_Conditional_0_For_2_Template_ol_focus_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleFocus($event));
    })("mouseenter", function NgxSonnerToaster_Conditional_0_For_2_Template_ol_mouseenter_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.expanded.set(true));
    })("mousemove", function NgxSonnerToaster_Conditional_0_For_2_Template_ol_mousemove_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.expanded.set(true));
    })("mouseleave", function NgxSonnerToaster_Conditional_0_For_2_Template_ol_mouseleave_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleMouseLeave());
    })("pointerdown", function NgxSonnerToaster_Conditional_0_For_2_Template_ol_pointerdown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handlePointerDown($event));
    })("pointerup", function NgxSonnerToaster_Conditional_0_For_2_Template_ol_pointerup_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.interacting.set(false));
    });
    ɵɵrepeaterCreate(2, NgxSonnerToaster_Conditional_0_For_2_For_3_Template, 11, 18, "ngx-sonner-toast", 4, _forTrack0);
    ɵɵpipe(4, "toastFilter");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pos_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r1.toasterStyles());
    ɵɵclassMap(ctx_r1._class());
    ɵɵproperty("tabIndex", -1);
    ɵɵattribute("data-theme", ctx_r1.actualTheme())("data-rich-colors", ctx_r1.richColors())("dir", ctx_r1.dir() === "auto" ? ctx_r1.getDocumentDirection() : ctx_r1.dir())("data-y-position", pos_r5.split("-")[0])("data-x-position", pos_r5.split("-")[1]);
    ɵɵadvance(2);
    ɵɵrepeater(ɵɵpipeBind3(4, 10, ctx_r1.toasts(), $index_r6, pos_r5));
  }
}
function NgxSonnerToaster_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 1);
    ɵɵrepeaterCreate(1, NgxSonnerToaster_Conditional_0_For_2_Template, 5, 14, "ol", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabIndex", -1);
    ɵɵattribute("aria-label", "Notifications " + ctx_r1.hotKeyLabel());
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.possiblePositions());
  }
}
var toastsCounter = 0;
function createToastState() {
  const toasts = signal([]);
  const heights = signal([]);
  function addToast(data) {
    toasts.update((prev) => [data, ...prev]);
  }
  function create(data) {
    const _a = data, {
      message: message2
    } = _a, rest = __objRest(_a, [
      "message"
    ]);
    const id = typeof data?.id === "number" || data.id && data.id?.length > 0 ? data.id : toastsCounter++;
    const dismissible = data.dismissible ?? true;
    const type = data.type ?? "default";
    const alreadyExists = toasts().find((toast2) => toast2.id === id);
    if (alreadyExists) {
      toasts.update((prev) => prev.map((toast2) => {
        if (toast2.id === id) {
          return __spreadProps(__spreadValues(__spreadValues({}, toast2), data), {
            id,
            title: message2,
            dismissible,
            type,
            updated: true
          });
        } else return __spreadProps(__spreadValues({}, toast2), {
          updated: false
        });
      }));
    } else {
      addToast(__spreadProps(__spreadValues({}, rest), {
        id,
        title: message2,
        dismissible,
        type
      }));
    }
    return id;
  }
  function dismiss(id) {
    if (id === void 0) {
      toasts.set([]);
      return;
    }
    toasts.update((prev) => prev.filter((toast2) => toast2.id !== id));
    return id;
  }
  function message(message2, data) {
    return create(__spreadProps(__spreadValues({}, data), {
      type: "default",
      message: message2
    }));
  }
  function error(message2, data) {
    return create(__spreadProps(__spreadValues({}, data), {
      type: "error",
      message: message2
    }));
  }
  function success(message2, data) {
    return create(__spreadProps(__spreadValues({}, data), {
      type: "success",
      message: message2
    }));
  }
  function info(message2, data) {
    return create(__spreadProps(__spreadValues({}, data), {
      type: "info",
      message: message2
    }));
  }
  function warning(message2, data) {
    return create(__spreadProps(__spreadValues({}, data), {
      type: "warning",
      message: message2
    }));
  }
  function loading(message2, data) {
    return create(__spreadProps(__spreadValues({}, data), {
      type: "loading",
      message: message2
    }));
  }
  function promise(promise2, data) {
    if (!data) return;
    let id = void 0;
    if (data.loading !== void 0) {
      id = create(__spreadProps(__spreadValues({}, data), {
        promise: promise2,
        type: "loading",
        message: data.loading
      }));
    }
    const p = promise2 instanceof Promise ? promise2 : promise2();
    let shouldDismiss = id !== void 0;
    p.then((response) => {
      if (response && typeof response.ok === "boolean" && !response.ok) {
        shouldDismiss = false;
        const message2 = typeof data.error === "function" ? (
          // @ts-expect-error: TODO: Better function checking
          data.error(`HTTP error! status: ${response.status}`)
        ) : data.error;
        create({
          id,
          type: "error",
          message: message2
        });
      } else if (data.success !== void 0) {
        shouldDismiss = false;
        const message2 = typeof data.success === "function" ? (
          // @ts-expect-error: TODO: Better function checking
          data.success(response)
        ) : data.success;
        create({
          id,
          type: "success",
          message: message2
        });
      }
    }).catch((error2) => {
      if (data.error !== void 0) {
        shouldDismiss = false;
        const message2 = (
          // @ts-expect-error: TODO: Better function checking
          typeof data.error === "function" ? data.error(error2) : data.error
        );
        create({
          id,
          type: "error",
          message: message2
        });
      }
    }).finally(() => {
      if (shouldDismiss) {
        dismiss(id);
        id = void 0;
      }
      data.finally?.();
    });
    return id;
  }
  function custom(component, data) {
    const id = data?.id ?? toastsCounter++;
    create(__spreadValues({
      component,
      id
    }, data));
    return id;
  }
  function removeHeight(id) {
    heights.update((prev) => prev.filter((height) => height.toastId !== id));
  }
  function addHeight(height) {
    heights.update((prev) => [height, ...prev].sort(sortHeights));
  }
  const sortHeights = (a, b) => toasts().findIndex((t) => t.id === a.toastId) - toasts().findIndex((t) => t.id === b.toastId);
  function reset() {
    toasts.set([]);
    heights.set([]);
  }
  return {
    //methods
    create,
    addToast,
    dismiss,
    message,
    error,
    success,
    info,
    warning,
    loading,
    promise,
    custom,
    removeHeight,
    addHeight,
    reset,
    // signals
    toasts: toasts.asReadonly(),
    heights: heights.asReadonly()
  };
}
var toastState = createToastState();
function toastFunction(message, data) {
  return toastState.create(__spreadValues({
    message
  }, data));
}
var basicToast = toastFunction;
var toast = Object.assign(basicToast, {
  success: toastState.success,
  info: toastState.info,
  warning: toastState.warning,
  error: toastState.error,
  custom: toastState.custom,
  message: toastState.message,
  promise: toastState.promise,
  dismiss: toastState.dismiss,
  loading: toastState.loading
});
var _IconComponent = class _IconComponent {
  constructor() {
    this.type = input("default");
  }
};
_IconComponent.ɵfac = function IconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconComponent)();
};
_IconComponent.ɵcmp = ɵɵdefineComponent({
  type: _IconComponent,
  selectors: [["ngx-sonner-icon"]],
  inputs: {
    type: [1, "type"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 4,
  vars: 1,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "height", "20", "width", "20"], ["viewBox", "0 0 64 64", "fill", "currentColor", "height", "20", "width", "20", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", "clip-rule", "evenodd"], ["d", "M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"], ["d", "M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"]],
  template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IconComponent_Case_0_Template, 2, 0, ":svg:svg", 0)(1, IconComponent_Case_1_Template, 2, 0, ":svg:svg", 0)(2, IconComponent_Case_2_Template, 2, 0, ":svg:svg", 0)(3, IconComponent_Case_3_Template, 3, 0, ":svg:svg", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional((tmp_0_0 = ctx.type()) === "success" ? 0 : tmp_0_0 === "error" ? 1 : tmp_0_0 === "info" ? 2 : tmp_0_0 === "warning" ? 3 : -1);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "ngx-sonner-icon",
      standalone: true,
      template: `
    @switch (type()) {
      @case ('success') {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          height="20"
          width="20">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd" />
        </svg>
      }
      @case ('error') {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          height="20"
          width="20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd" />
        </svg>
      }
      @case ('info') {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          height="20"
          width="20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
            clip-rule="evenodd" />
        </svg>
      }
      @case ('warning') {
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z" />
          <path
            d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z" />
        </svg>
      }
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var VISIBLE_TOASTS_AMOUNT = 3;
var VIEWPORT_OFFSET = "32px";
var TOAST_LIFETIME = 4e3;
var TOAST_WIDTH = 356;
var GAP = 14;
var SWIPE_THRESHOLD = 20;
var TIME_BEFORE_UNMOUNT = 200;
var defaultClasses = {
  toast: "",
  title: "",
  description: "",
  loader: "",
  closeButton: "",
  cancelButton: "",
  actionButton: "",
  action: "",
  warning: "",
  error: "",
  success: "",
  default: "",
  info: "",
  loading: ""
};
var _LoaderComponent = class _LoaderComponent {
  constructor() {
    this.isVisible = input.required({
      transform: booleanAttribute
    });
    this.bars = Array(12).fill(0);
  }
};
_LoaderComponent.ɵfac = function LoaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoaderComponent)();
};
_LoaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _LoaderComponent,
  selectors: [["ngx-sonner-loader"]],
  inputs: {
    isVisible: [1, "isVisible"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 4,
  vars: 1,
  consts: [[1, "sonner-loading-wrapper"], [1, "sonner-spinner"], [1, "sonner-loading-bar"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵrepeaterCreate(2, LoaderComponent_For_3_Template, 1, 0, "div", 2, ɵɵrepeaterTrackByIndex);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵattribute("data-visible", ctx.isVisible());
      ɵɵadvance(2);
      ɵɵrepeater(ctx.bars);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var LoaderComponent = _LoaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{
      selector: "ngx-sonner-loader",
      standalone: true,
      template: `
    <div class="sonner-loading-wrapper" [attr.data-visible]="isVisible()">
      <div class="sonner-spinner">
        @for (_ of bars; track $index) {
          <div class="sonner-loading-bar"></div>
        }
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var _ToastFilterPipe = class _ToastFilterPipe {
  transform(toasts, index, position) {
    return toasts.filter((toast2) => !toast2.position && index === 0 || toast2.position === position);
  }
};
_ToastFilterPipe.ɵfac = function ToastFilterPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastFilterPipe)();
};
_ToastFilterPipe.ɵpipe = ɵɵdefinePipe({
  name: "toastFilter",
  type: _ToastFilterPipe,
  pure: true,
  standalone: true
});
var ToastFilterPipe = _ToastFilterPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastFilterPipe, [{
    type: Pipe,
    args: [{
      name: "toastFilter",
      standalone: true
    }]
  }], null, null);
})();
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
var _AsComponentPipe = class _AsComponentPipe {
  transform(value) {
    return value;
  }
};
_AsComponentPipe.ɵfac = function AsComponentPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AsComponentPipe)();
};
_AsComponentPipe.ɵpipe = ɵɵdefinePipe({
  name: "asComponent",
  type: _AsComponentPipe,
  pure: true,
  standalone: true
});
var AsComponentPipe = _AsComponentPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsComponentPipe, [{
    type: Pipe,
    args: [{
      name: "asComponent",
      standalone: true
    }]
  }], null, null);
})();
var _IsStringPipe = class _IsStringPipe {
  transform(value) {
    return typeof value === "string";
  }
};
_IsStringPipe.ɵfac = function IsStringPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IsStringPipe)();
};
_IsStringPipe.ɵpipe = ɵɵdefinePipe({
  name: "isString",
  type: _IsStringPipe,
  pure: true,
  standalone: true
});
var IsStringPipe = _IsStringPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IsStringPipe, [{
    type: Pipe,
    args: [{
      name: "isString",
      standalone: true
    }]
  }], null, null);
})();
var _ToastComponent = class _ToastComponent {
  constructor() {
    this.cn = cn;
    this.toasts = toastState.toasts;
    this.heights = toastState.heights;
    this.removeHeight = toastState.removeHeight;
    this.addHeight = toastState.addHeight;
    this.dismiss = toastState.dismiss;
    this.toast = input.required();
    this.index = input.required();
    this.expanded = input.required();
    this._invert = input.required({
      alias: "invert"
    });
    this.position = input.required();
    this.visibleToasts = input.required();
    this.expandByDefault = input.required();
    this._closeButton = input.required({
      alias: "closeButton"
    });
    this.interacting = input.required();
    this.cancelButtonStyle = input();
    this.actionButtonStyle = input();
    this.duration = input(TOAST_LIFETIME);
    this.descriptionClass = input("");
    this._classes = input({}, {
      alias: "classes"
    });
    this.unstyled = input(false);
    this._class = input("", {
      alias: "class"
    });
    this._style = input({}, {
      alias: "style"
    });
    this.mounted = signal(false);
    this.removed = signal(false);
    this.swiping = signal(false);
    this.swipeOut = signal(false);
    this.offsetBeforeRemove = signal(0);
    this.initialHeight = signal(0);
    this.toastRef = viewChild.required("toastRef");
    this.classes = computed(() => __spreadValues(__spreadValues({}, defaultClasses), this._classes()));
    this.isFront = computed(() => this.index() === 0);
    this.isVisible = computed(() => this.index() + 1 <= this.visibleToasts());
    this.toastType = computed(() => this.toast().type ?? "default");
    this.toastClass = computed(() => this.toast().class ?? "");
    this.toastPosition = computed(() => this.toast().position ?? this.position());
    this.toastDescriptionClass = computed(() => this.toast().descriptionClass ?? "");
    this.heightIndex = computed(() => this.heights().findIndex((height) => height.toastId === this.toast().id));
    this.offset = signal(0);
    this.closeTimerStartTimeRef = 0;
    this.lastCloseTimerStartTimeRef = 0;
    this.pointerStartRef = null;
    this.coords = computed(() => this.toastPosition().split("-"));
    this.toastsHeightBefore = computed(() => this.heights().reduce((prev, curr, reducerIndex) => {
      if (reducerIndex >= this.heightIndex()) return prev;
      return prev + curr.height;
    }, 0));
    this.invert = computed(() => this.toast().invert ?? this._invert());
    this.closeButton = computed(() => this.toast().closeButton ?? this._closeButton());
    this.disabled = computed(() => this.toastType() === "loading");
    this.remainingTime = 0;
    this.isPromiseLoadingOrInfiniteDuration = computed(() => this.toast().promise && this.toastType() === "loading" || this.toast().duration === Number.POSITIVE_INFINITY);
    this.toastClasses = computed(() => cn(this._class(), this.toastClass(), this.classes().toast, this.toast().classes?.toast, this.classes()[this.toastType()], this.toast().classes?.[this.toastType()]));
    this.toastStyle = computed(() => __spreadValues({
      "--index": `${this.index()}`,
      "--toasts-before": `${this.index()}`,
      "--z-index": `${this.toasts().length - this.index()}`,
      "--offset": `${this.removed() ? this.offsetBeforeRemove() : this.offset()}px`,
      "--initial-height": this.expandByDefault() ? "auto" : `${this.initialHeight()}px`
    }, this._style()));
    effect(() => {
      const heightIndex = this.heightIndex();
      const toastsHeightBefore = this.toastsHeightBefore();
      untracked(() => this.offset.set(Math.round(heightIndex * GAP + toastsHeightBefore)));
    });
    effect(() => {
      if (this.toast().updated) {
        clearTimeout(this.timeoutId);
        this.remainingTime = this.toast().duration ?? this.duration() ?? TOAST_LIFETIME;
        this.startTimer();
      }
    });
    effect((onCleanup) => {
      if (!this.isPromiseLoadingOrInfiniteDuration()) {
        if (this.expanded() || this.interacting()) {
          this.pauseTimer();
        } else {
          this.startTimer();
        }
      }
      onCleanup(() => clearTimeout(this.timeoutId));
    });
    effect(() => {
      if (this.toast().delete) {
        this.deleteToast();
      }
    });
  }
  ngAfterViewInit() {
    this.remainingTime = this.toast().duration ?? this.duration() ?? TOAST_LIFETIME;
    this.mounted.set(true);
    const height = this.toastRef().nativeElement.getBoundingClientRect().height;
    this.initialHeight.set(height);
    this.addHeight({
      toastId: this.toast().id,
      height
    });
  }
  ngOnDestroy() {
    clearTimeout(this.timeoutId);
    this.removeHeight(this.toast().id);
  }
  deleteToast() {
    this.removed.set(true);
    this.offsetBeforeRemove.set(this.offset());
    this.removeHeight(this.toast().id);
    setTimeout(() => {
      this.dismiss(this.toast().id);
    }, TIME_BEFORE_UNMOUNT);
  }
  // If toast's duration changes, it will be out of sync with the
  // remainingAtTimeout, so we know we need to restart the timer
  // with the new duration
  // Pause the timer on each hover
  pauseTimer() {
    if (this.lastCloseTimerStartTimeRef < this.closeTimerStartTimeRef) {
      const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - this.closeTimerStartTimeRef;
      this.remainingTime = this.remainingTime - elapsedTime;
    }
    this.lastCloseTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
  }
  startTimer() {
    this.closeTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
    this.timeoutId = setTimeout(() => {
      this.toast().onAutoClose?.(this.toast());
      this.deleteToast();
    }, this.remainingTime);
  }
  onPointerDown(event) {
    if (this.disabled() || !this.toast().dismissible) return;
    this.offsetBeforeRemove.set(this.offset());
    const target = event.target;
    target.setPointerCapture(event.pointerId);
    if (target.tagName === "BUTTON") {
      return;
    }
    this.swiping.set(true);
    this.pointerStartRef = {
      x: event.clientX,
      y: event.clientY
    };
  }
  onPointerUp() {
    if (this.swipeOut() || !this.toast().dismissible) return;
    this.pointerStartRef = null;
    const swipeAmount = Number(this.toastRef().nativeElement.style.getPropertyValue("--swipe-amount").replace("px", "") || 0);
    if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD) {
      this.offsetBeforeRemove.set(this.offset());
      this.toast().onDismiss?.(this.toast());
      this.deleteToast();
      this.swipeOut.set(true);
      return;
    }
    this.toastRef().nativeElement.style.setProperty("--swipe-amount", "0px");
    this.swiping.set(false);
  }
  onPointerMove(event) {
    if (!this.pointerStartRef || !this.toast().dismissible) return;
    const yPosition = event.clientY - this.pointerStartRef.y;
    const xPosition = event.clientX - this.pointerStartRef.x;
    const clamp = this.coords()[0] === "top" ? Math.min : Math.max;
    const clampedY = clamp(0, yPosition);
    const swipeStartThreshold = event.pointerType === "touch" ? 10 : 2;
    const isAllowedToSwipe = Math.abs(clampedY) > swipeStartThreshold;
    if (isAllowedToSwipe) {
      this.toastRef().nativeElement.style.setProperty("--swipe-amount", `${yPosition}px`);
    } else if (Math.abs(xPosition) > swipeStartThreshold) {
      this.pointerStartRef = null;
    }
  }
  onCloseButtonClick() {
    if (this.disabled() || !this.toast().dismissible) return;
    this.deleteToast();
    this.toast().onDismiss?.(this.toast());
  }
  onCancelClick() {
    const toast2 = this.toast();
    if (!toast2.dismissible) return;
    this.deleteToast();
    if (toast2.cancel?.onClick) {
      toast2.cancel.onClick();
    }
  }
  onActionClick(event) {
    const toast2 = this.toast();
    toast2.action?.onClick(event);
    if (event.defaultPrevented) return;
    this.deleteToast();
  }
};
_ToastComponent.ɵfac = function ToastComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastComponent)();
};
_ToastComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastComponent,
  selectors: [["ngx-sonner-toast"]],
  viewQuery: function ToastComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuerySignal(ctx.toastRef, _c0, 5);
    }
    if (rf & 2) {
      ɵɵqueryAdvance();
    }
  },
  inputs: {
    toast: [1, "toast"],
    index: [1, "index"],
    expanded: [1, "expanded"],
    _invert: [1, "invert", "_invert"],
    position: [1, "position"],
    visibleToasts: [1, "visibleToasts"],
    expandByDefault: [1, "expandByDefault"],
    _closeButton: [1, "closeButton", "_closeButton"],
    interacting: [1, "interacting"],
    cancelButtonStyle: [1, "cancelButtonStyle"],
    actionButtonStyle: [1, "actionButtonStyle"],
    duration: [1, "duration"],
    descriptionClass: [1, "descriptionClass"],
    _classes: [1, "classes", "_classes"],
    unstyled: [1, "unstyled"],
    _class: [1, "class", "_class"],
    _style: [1, "style", "_style"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 22,
  consts: [["toastRef", ""], ["data-sonner-toast", "", "aria-atomic", "true", "role", "status", "tabindex", "0", 3, "pointerdown", "pointerup", "pointermove"], ["aria-label", "Close toast", "data-close-button", "", 3, "class"], ["aria-label", "Close toast", "data-close-button", "", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], ["data-icon", ""], ["data-content", ""], ["data-title", "", 3, "class"], ["data-description", "", 3, "class"], ["data-button", "", "data-cancel", "", 3, "style", "class"], ["data-button", "", 3, "style", "class"], ["data-title", ""], ["data-description", ""], ["data-button", "", "data-cancel", "", 3, "click"], ["data-button", "", 3, "click"]],
  template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef(_c1);
      ɵɵelementStart(0, "li", 1, 0);
      ɵɵlistener("pointerdown", function ToastComponent_Template_li_pointerdown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPointerDown($event));
      })("pointerup", function ToastComponent_Template_li_pointerup_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPointerUp());
      })("pointermove", function ToastComponent_Template_li_pointermove_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPointerMove($event));
      });
      ɵɵtemplate(2, ToastComponent_Conditional_2_Template, 4, 3, "button", 2)(3, ToastComponent_Conditional_3_Template, 2, 4, "ng-container")(4, ToastComponent_Conditional_4_Template, 6, 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleMap(ctx.toastStyle());
      ɵɵclassMap(ctx.toastClasses());
      ɵɵattribute("aria-live", ctx.toast().important ? "assertive" : "polite")("data-styled", !(ctx.toast().component || ctx.toast().unstyled || ctx.unstyled()))("data-mounted", ctx.mounted())("data-promise", !!ctx.toast().promise)("data-removed", ctx.removed())("data-visible", ctx.isVisible())("data-y-position", ctx.coords()[0])("data-x-position", ctx.coords()[1])("data-index", ctx.index())("data-front", ctx.isFront())("data-swiping", ctx.swiping())("data-dismissible", ctx.toast().dismissible)("data-type", ctx.toastType())("data-invert", ctx.invert())("data-swipe-out", ctx.swipeOut())("data-expanded", ctx.expanded() || ctx.expandByDefault() && ctx.mounted());
      ɵɵadvance(2);
      ɵɵconditional(ctx.closeButton() && !ctx.toast().component ? 2 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.toast().component ? 3 : 4);
    }
  },
  dependencies: [NgComponentOutlet, IsStringPipe, AsComponentPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ToastComponent = _ToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{
      selector: "ngx-sonner-toast",
      standalone: true,
      imports: [NgComponentOutlet, IsStringPipe, AsComponentPipe],
      template: `
    <li
      #toastRef
      data-sonner-toast
      [attr.aria-live]="toast().important ? 'assertive' : 'polite'"
      aria-atomic="true"
      role="status"
      tabindex="0"
      [class]="toastClasses()"
      [attr.data-styled]="
        !(toast().component || toast().unstyled || unstyled())
      "
      [attr.data-mounted]="mounted()"
      [attr.data-promise]="!!toast().promise"
      [attr.data-removed]="removed()"
      [attr.data-visible]="isVisible()"
      [attr.data-y-position]="coords()[0]"
      [attr.data-x-position]="coords()[1]"
      [attr.data-index]="index()"
      [attr.data-front]="isFront()"
      [attr.data-swiping]="swiping()"
      [attr.data-dismissible]="toast().dismissible"
      [attr.data-type]="toastType()"
      [attr.data-invert]="invert()"
      [attr.data-swipe-out]="swipeOut()"
      [attr.data-expanded]="expanded() || (expandByDefault() && mounted())"
      [style]="toastStyle()"
      (pointerdown)="onPointerDown($event)"
      (pointerup)="onPointerUp()"
      (pointermove)="onPointerMove($event)">
      @if (closeButton() && !toast().component) {
        <button
          aria-label="Close toast"
          [attr.data-disabled]="disabled()"
          data-close-button
          (click)="onCloseButtonClick()"
          [class]="cn(classes().closeButton, toast().classes?.closeButton)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      }

      @if (toast().component) {
        <ng-container
          *ngComponentOutlet="
            toast().component | asComponent;
            inputs: toast().componentProps
          " />
      } @else {
        @if (toastType() !== 'default' || toast().icon || toast().promise) {
          <div data-icon>
            @if (toastType() === 'loading' && !toast().icon) {
              <ng-content select="[loading-icon]" />
            }
            @if (toast().icon) {
              <ng-container
                *ngComponentOutlet="
                  toast().icon | asComponent;
                  inputs: toast().componentProps
                " />
            } @else {
              @switch (toastType()) {
                @case ('success') {
                  <ng-content select="[success-icon]" />
                }
                @case ('error') {
                  <ng-content select="[error-icon]" />
                }
                @case ('warning') {
                  <ng-content select="[warning-icon]" />
                }
                @case ('info') {
                  <ng-content select="[info-icon]" />
                }
              }
            }
          </div>
        }
        <div data-content>
          @if (toast().title; as title) {
            <div
              data-title
              [class]="cn(classes().title, toast().classes?.title)">
              @if (title | isString) {
                {{ toast().title }}
              } @else {
                <ng-container
                  *ngComponentOutlet="
                    title | asComponent;
                    inputs: toast().componentProps
                  " />
              }
            </div>
          }
          @if (toast().description; as description) {
            <div
              data-description
              [class]="
                cn(
                  descriptionClass(),
                  toastDescriptionClass(),
                  classes().description,
                  toast().classes?.description
                )
              ">
              @if (description | isString) {
                {{ toast().description }}
              } @else {
                <ng-container
                  *ngComponentOutlet="
                    description | asComponent;
                    inputs: toast().componentProps
                  " />
              }
            </div>
          }
        </div>
        @if (toast().cancel; as cancel) {
          <button
            data-button
            data-cancel
            [style]="cancelButtonStyle() ?? toast().cancelButtonStyle"
            [class]="cn(classes().cancelButton, toast().classes?.cancelButton)"
            (click)="onCancelClick()">
            {{ cancel.label }}
          </button>
        }
        @if (toast().action; as action) {
          <button
            data-button
            [style]="actionButtonStyle() ?? toast().actionButtonStyle"
            [class]="cn(classes().actionButton, toast().classes?.actionButton)"
            (click)="onActionClick($event)">
            {{ action.label }}
          </button>
        }
      }
    </li>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], null);
})();
var _NgxSonnerToaster = class _NgxSonnerToaster {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.toasts = toastState.toasts;
    this.heights = toastState.heights;
    this.reset = toastState.reset;
    this.invert = input(false, {
      transform: booleanAttribute
    });
    this.theme = input("light");
    this.position = input("bottom-right");
    this.hotKey = input(["altKey", "KeyT"]);
    this.richColors = input(false, {
      transform: booleanAttribute
    });
    this.expand = input(false, {
      transform: booleanAttribute
    });
    this.duration = input(TOAST_LIFETIME, {
      transform: numberAttribute
    });
    this.visibleToasts = input(VISIBLE_TOASTS_AMOUNT, {
      transform: numberAttribute
    });
    this.closeButton = input(false, {
      transform: booleanAttribute
    });
    this.toastOptions = input({});
    this.offset = input(null);
    this.dir = input(this.getDocumentDirection());
    this._class = input("", {
      alias: "class"
    });
    this._style = input({}, {
      alias: "style"
    });
    this.possiblePositions = computed(() => Array.from(new Set([this.position(), ...this.toasts().filter((toast2) => toast2.position).map((toast2) => toast2.position)].filter(Boolean))));
    this.expanded = signal(false);
    this.interacting = signal(false);
    this.actualTheme = signal(this.getActualTheme(this.theme()));
    this.listRef = viewChild("listRef");
    this.lastFocusedElementRef = signal(null);
    this.isFocusWithinRef = signal(false);
    this.hotKeyLabel = computed(() => this.hotKey().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    this.toasterStyles = computed(() => __spreadValues({
      "--front-toast-height": `${this.heights()[0]?.height}px`,
      "--offset": typeof this.offset() === "number" ? `${this.offset()}px` : this.offset() ?? `${VIEWPORT_OFFSET}`,
      "--width": `${TOAST_WIDTH}px`,
      "--gap": `${GAP}px`
    }, this._style()));
    this.handleKeydown = (event) => {
      const listRef = this.listRef()?.nativeElement;
      if (!listRef) return;
      const isHotkeyPressed = this.hotKey().every((key) => event[key] || event.code === key);
      if (isHotkeyPressed) {
        this.expanded.set(true);
        listRef.focus();
      }
      if (event.code === "Escape" && (document.activeElement === listRef || listRef.contains(document.activeElement))) {
        this.expanded.set(false);
      }
    };
    this.handleThemePreferenceChange = ({
      matches
    }) => {
      if (this.theme() === "system") {
        this.actualTheme.set(matches ? "dark" : "light");
      }
    };
    this.reset();
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener("keydown", this.handleKeydown);
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", this.handleThemePreferenceChange);
    }
    effect(() => {
      if (this.toasts().length >= 1) {
        untracked(() => this.expanded.set(false));
      }
    });
    effect(() => {
      const theme = this.theme();
      untracked(() => this.actualTheme.set(this.getActualTheme(theme)));
    });
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener("keydown", this.handleKeydown);
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", this.handleThemePreferenceChange);
    }
  }
  handleBlur(event) {
    if (this.isFocusWithinRef() && !event.target.contains(event.relatedTarget)) {
      this.isFocusWithinRef.set(false);
      if (this.lastFocusedElementRef()) {
        this.lastFocusedElementRef()?.focus({
          preventScroll: true
        });
        this.lastFocusedElementRef.set(null);
      }
    }
  }
  handleFocus(event) {
    const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset["dismissible"] === "false";
    if (isNotDismissible) return;
    if (!this.isFocusWithinRef()) {
      this.isFocusWithinRef.set(true);
      this.lastFocusedElementRef.set(event.relatedTarget);
    }
  }
  handlePointerDown(event) {
    const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset["dismissible"] === "false";
    if (isNotDismissible) return;
    this.interacting.set(true);
  }
  handleMouseLeave() {
    if (!this.interacting()) {
      this.expanded.set(false);
    }
  }
  getActualTheme(t) {
    if (t !== "system") {
      return t;
    }
    if (isPlatformBrowser(this.platformId)) {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    }
    return "light";
  }
  getDocumentDirection() {
    if (typeof window === "undefined") return "ltr";
    if (typeof document === "undefined") return "ltr";
    const dirAttribute = document.documentElement.getAttribute("dir");
    if (dirAttribute === "auto" || !dirAttribute) {
      return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
  }
};
_NgxSonnerToaster.ɵfac = function NgxSonnerToaster_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxSonnerToaster)();
};
_NgxSonnerToaster.ɵcmp = ɵɵdefineComponent({
  type: _NgxSonnerToaster,
  selectors: [["ngx-sonner-toaster"]],
  viewQuery: function NgxSonnerToaster_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuerySignal(ctx.listRef, _c3, 5);
    }
    if (rf & 2) {
      ɵɵqueryAdvance();
    }
  },
  inputs: {
    invert: [1, "invert"],
    theme: [1, "theme"],
    position: [1, "position"],
    hotKey: [1, "hotKey"],
    richColors: [1, "richColors"],
    expand: [1, "expand"],
    duration: [1, "duration"],
    visibleToasts: [1, "visibleToasts"],
    closeButton: [1, "closeButton"],
    toastOptions: [1, "toastOptions"],
    offset: [1, "offset"],
    dir: [1, "dir"],
    _class: [1, "class", "_class"],
    _style: [1, "style", "_style"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 1,
  consts: [["listRef", ""], [3, "tabIndex"], ["data-sonner-toaster", "", 3, "tabIndex", "class", "style"], ["data-sonner-toaster", "", 3, "blur", "focus", "mouseenter", "mousemove", "mouseleave", "pointerdown", "pointerup", "tabIndex"], [3, "index", "toast", "invert", "visibleToasts", "closeButton", "interacting", "position", "expandByDefault", "expanded", "actionButtonStyle", "cancelButtonStyle", "class", "descriptionClass", "classes", "duration", "unstyled"], [3, "index", "toast", "invert", "visibleToasts", "closeButton", "interacting", "position", "expandByDefault", "expanded", "actionButtonStyle", "cancelButtonStyle", "descriptionClass", "classes", "duration", "unstyled"], [3, "isVisible"], ["type", "success"], ["type", "error"], ["type", "warning"], ["type", "info"]],
  template: function NgxSonnerToaster_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵtemplate(0, NgxSonnerToaster_Conditional_0_Template, 3, 2, "section", 1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.toasts().length > 0 ? 0 : -1);
    }
  },
  dependencies: [ToastComponent, ToastFilterPipe, IconComponent, LoaderComponent],
  styles: ['html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:#00000014}[data-sonner-toast][data-theme=dark] [data-cancel]{background:#ffffff4d}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var NgxSonnerToaster = _NgxSonnerToaster;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSonnerToaster, [{
    type: Component,
    args: [{
      selector: "ngx-sonner-toaster",
      standalone: true,
      imports: [ToastComponent, ToastFilterPipe, IconComponent, LoaderComponent],
      template: `
    @if (toasts().length > 0) {
      <section
        [attr.aria-label]="'Notifications ' + hotKeyLabel()"
        [tabIndex]="-1">
        @for (pos of possiblePositions(); track pos) {
          <ol
            #listRef
            [tabIndex]="-1"
            [class]="_class()"
            data-sonner-toaster
            [attr.data-theme]="actualTheme()"
            [attr.data-rich-colors]="richColors()"
            [attr.dir]="dir() === 'auto' ? getDocumentDirection() : dir()"
            [attr.data-y-position]="pos.split('-')[0]"
            [attr.data-x-position]="pos.split('-')[1]"
            (blur)="handleBlur($event)"
            (focus)="handleFocus($event)"
            (mouseenter)="expanded.set(true)"
            (mousemove)="expanded.set(true)"
            (mouseleave)="handleMouseLeave()"
            (pointerdown)="handlePointerDown($event)"
            (pointerup)="interacting.set(false)"
            [style]="toasterStyles()">
            @for (
              toast of toasts() | toastFilter: $index : pos;
              track toast.id
            ) {
              <ngx-sonner-toast
                [index]="$index"
                [toast]="toast"
                [invert]="invert()"
                [visibleToasts]="visibleToasts()"
                [closeButton]="closeButton()"
                [interacting]="interacting()"
                [position]="position()"
                [expandByDefault]="expand()"
                [expanded]="expanded()"
                [actionButtonStyle]="toastOptions().actionButtonStyle"
                [cancelButtonStyle]="toastOptions().cancelButtonStyle"
                [class]="toastOptions().class ?? ''"
                [descriptionClass]="toastOptions().descriptionClass ?? ''"
                [classes]="toastOptions().classes ?? {}"
                [duration]="toastOptions().duration ?? duration()"
                [unstyled]="toastOptions().unstyled ?? false">
                <ng-content select="[loading-icon]" loading-icon>
                  <ngx-sonner-loader [isVisible]="toast.type === 'loading'" />
                </ng-content>
                <ng-content select="[success-icon]" success-icon>
                  <ngx-sonner-icon type="success" />
                </ng-content>
                <ng-content select="[error-icon]" error-icon>
                  <ngx-sonner-icon type="error" />
                </ng-content>
                <ng-content select="[warning-icon]" warning-icon>
                  <ngx-sonner-icon type="warning" />
                </ng-content>
                <ng-content select="[info-icon]" info-icon>
                  <ngx-sonner-icon type="info" />
                </ng-content>
              </ngx-sonner-toast>
            }
          </ol>
        }
      </section>
    }
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:#00000014}[data-sonner-toast][data-theme=dark] [data-cancel]{background:#ffffff4d}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n']
    }]
  }], () => [], null);
})();
export {
  NgxSonnerToaster,
  toast,
  toastState
};
//# sourceMappingURL=ngx-sonner.js.map
