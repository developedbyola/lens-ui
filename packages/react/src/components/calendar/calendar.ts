import React from "react";
import { jsx } from "react/jsx-runtime";
import { splitProps } from "../../utils";
import { factory, Factory } from "../factory";
import { calendar } from "../../../.styled/recipes";
import { createStyleContext } from "../../../.styled/jsx";
import { DatePicker, useDatePicker, useDatePickerContext, type UseDatePickerContext, type UseDatePickerProps, type UseDatePickerReturn } from "@ark-ui/react";

export const use = useDatePicker;
export const useContext = useDatePickerContext;

export type { UseDatePickerContext as UseContext, UseDatePickerProps as UseProps, UseDatePickerReturn as UseReturn };

const calendarStyleContext = createStyleContext(calendar);

export type RootRef = React.ComponentRef<"div">;
export type RootProps = Factory.Props<"div", DatePicker.RootBaseProps>;
export const Root = calendarStyleContext.withProvider(
  React.forwardRef<RootRef, RootProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "closeOnSelect",
      "defaultFocusedValue",
      "defaultOpen",
      "defaultValue",
      "defaultView",
      "disabled",
      "fixedWeeks",
      "focusedValue",
      "format",
      "ids",
      "immediate",
      "inline",
      "isDateUnavailable",
      "lazyMount",
      "locale",
      "max",
      "maxView",
      "min",
      "minView",
      "name",
      "numOfMonths",
      "onExitComplete",
      "onFocusChange",
      "onOpenChange",
      "onValueChange",
      "onViewChange",
      "open",
      "outsideDaySelectable",
      "parse",
      "positioning",
      "placeholder",
      "present",
      "readOnly",
      "selectionMode",
      "skipAnimationOnMount",
      "startOfWeek",
      "timeZone",
      "translations",
      "unmountOnExit",
      "value",
      "view",
    ]);

    return jsx(DatePicker.Root, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Root.displayName = "CalendarRoot";

export type ClearTriggerRef = React.ComponentRef<"button">;
export type ClearTriggerProps = Factory.Props<
  "button",
  DatePicker.ClearTriggerBaseProps
>;
export const ClearTrigger = calendarStyleContext.withContext(
  React.forwardRef<ClearTriggerRef, ClearTriggerProps>((props, ref) => {
    const [arkProps, ...buttonProps] = splitProps(props, []);

    return jsx(DatePicker.ClearTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "clear-trigger",
);
ClearTrigger.displayName = "CalendarClearTrigger";

export type ContentRef = React.Component<"div">;
export type ContentProps = Factory.Props<"div", DatePicker.ContentBaseProps>;
export const Content = calendarStyleContext.withContext(
  React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(DatePicker.Content, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "content",
);
Content.displayName = "CalendarContent";

export type ControlRef = React.Component<"div">;
export type ControlProps = Factory.Props<"div", DatePicker.ControlBaseProps>;
export const Control = calendarStyleContext.withContext(
  React.forwardRef<ControlRef, ControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(DatePicker.Control, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "control",
);
Control.displayName = "CalendarControl";

export type InputRef = React.Component<"input">;
export type InputProps = Factory.Props<"input", DatePicker.InputBaseProps>;
export const Input = calendarStyleContext.withContext(
  React.forwardRef<InputRef, InputProps>((props, ref) => {
    const [arkProps, inputProps] = splitProps(props, ["fixOnBlur", "index"]);

    return jsx(DatePicker.Input, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.input, { ...inputProps, ref }),
    });
  }),
  "input",
);
Input.displayName = "CalendarInput";

export type LabelRef = React.Component<"label">;
export type LabelProps = Factory.Props<"label", DatePicker.LabelBaseProps>;
export const Label = calendarStyleContext.withContext(
  React.forwardRef<LabelRef, LabelProps>((props, ref) => {
    const [arkProps, labelProps] = splitProps(props, []);

    return jsx(DatePicker.Label, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.label, { ...labelProps, ref }),
    });
  }),
  "label",
);
Label.displayName = "CalendarLabel";

export type MonthSelectRef = React.Component<"select">;
export type MonthSelectProps = Factory.Props<
  "select",
  DatePicker.MonthSelectBaseProps
>;
export const MonthSelect = calendarStyleContext.withContext(
  React.forwardRef<MonthSelectRef, MonthSelectProps>((props, ref) => {
    const [arkProps, selectProps] = splitProps(props, []);

    return jsx(DatePicker.MonthSelect, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.select, { ...selectProps, ref }),
    });
  }),
  "month-select",
);
MonthSelect.displayName = "CalendarMonthSelect";

export type NextTriggerRef = React.Component<"button">;
export type NextTriggerProps = Factory.Props<
  "button",
  DatePicker.NextTriggerBaseProps
>;
export const NextTrigger = calendarStyleContext.withContext(
  React.forwardRef<NextTriggerRef, NextTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(DatePicker.NextTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "next-trigger",
);
NextTrigger.displayName = "CalendarNextTrigger";

export type PrevTriggerRef = React.Component<"button">;
export type PrevTriggerProps = Factory.Props<
  "button",
  DatePicker.PrevTriggerBaseProps
>;
export const PrevTrigger = calendarStyleContext.withContext(
  React.forwardRef<PrevTriggerRef, PrevTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(DatePicker.PrevTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "prev-trigger",
);
PrevTrigger.displayName = "CalendarPrevTrigger";

export type PositionerRef = React.Component<"div">;
export type PositionerProps = Factory.Props<
  "div",
  DatePicker.PositionerBaseProps
>;
export const Positioner = calendarStyleContext.withContext(
  React.forwardRef<PositionerRef, PositionerProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(DatePicker.Positioner, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "positioner",
);
Positioner.displayName = "CalendarPositioner";

export type PresetTriggerRef = React.Component<"button">;
export type PresetTriggerProps = Factory.Props<
  "button",
  DatePicker.PresetTriggerBaseProps
>;
export const PresetTrigger = calendarStyleContext.withContext(
  React.forwardRef<PresetTriggerRef, PresetTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, ["value"]);

    return jsx(DatePicker.PresetTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "preset-trigger",
);
PresetTrigger.displayName = "CalendarPresetTrigger";

export type ProviderRef = React.Component<"div">;
export type ProviderProps = Factory.Props<"div", DatePicker.RootProviderProps>;
export const Provider = calendarStyleContext.withProvider(
  React.forwardRef<ProviderRef, ProviderProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, [
      "value",
      "immediate",
      "lazyMount",
      "onExitComplete",
      "present",
      "skipAnimationOnMount",
      "unmountOnExit",
    ]);

    return jsx(DatePicker.RootProvider, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "root",
);
Provider.displayName = "CalendarProvider";

export type RangeTextRef = React.Component<"span">;
export type RangeTextProps = Factory.Props<
  "span",
  DatePicker.RangeTextBaseProps
>;
export const RangeText = calendarStyleContext.withContext(
  React.forwardRef<RangeTextRef, RangeTextProps>((props, ref) => {
    const [arkProps, spanProps] = splitProps(props, []);

    return jsx(DatePicker.RangeText, {
      ...arkProps,
      children: jsx(factory.span, { ...spanProps, ref }),
    });
  }),
  "range-text",
);
RangeText.displayName = "CalendarRangeText";

export type TableRef = React.Component<"table">;
export type TableProps = Factory.Props<"table", DatePicker.TableBaseProps>;
export const Table = calendarStyleContext.withContext(
  React.forwardRef<TableRef, TableProps>((props, ref) => {
    const [arkProps, tableProps] = splitProps(props, ["columns"]);

    return jsx(DatePicker.Table, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.table, { ...tableProps, ref }),
    });
  }),
  "table",
);
Table.displayName = "CalendarTable";

export type TableBodyRef = React.Component<"tbody">;
export type TableBodyProps = Factory.Props<
  "tbody",
  DatePicker.TableBodyBaseProps
>;
export const TableBody = calendarStyleContext.withContext(
  React.forwardRef<TableBodyRef, TableBodyProps>((props, ref) => {
    const [arkProps, tbodyProps] = splitProps(props, []);

    return jsx(DatePicker.TableBody, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.tbody, { ...tbodyProps, ref }),
    });
  }),
  "table-body",
);
TableBody.displayName = "CalendarTableBody";

export type TableHeadRef = React.Component<"thead">;
export type TableHeadProps = Factory.Props<
  "thead",
  DatePicker.TableHeadBaseProps
>;
export const TableHead = calendarStyleContext.withContext(
  React.forwardRef<TableHeadRef, TableHeadProps>((props, ref) => {
    const [arkProps, theadProps] = splitProps(props, []);

    return jsx(DatePicker.TableHead, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.thead, { ...theadProps, ref }),
    });
  }),
  "table-head",
);
TableHead.displayName = "CalendarTableHead";

export type TableHeaderRef = React.Component<"th">;
export type TableHeaderProps = Factory.Props<
  "th",
  DatePicker.TableHeaderBaseProps
>;
export const TableHeader = calendarStyleContext.withContext(
  React.forwardRef<TableHeaderRef, TableHeaderProps>((props, ref) => {
    const [arkProps, thProps] = splitProps(props, []);

    return jsx(DatePicker.TableHeader, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.th, { ...thProps, ref }),
    });
  }),
  "table-header",
);
TableHeader.displayName = "CalendarTableHeader";

export type TableRowRef = React.Component<"tr">;
export type TableRowProps = Factory.Props<"tr", DatePicker.TableRowBaseProps>;
export const TableRow = calendarStyleContext.withContext(
  React.forwardRef<TableRowRef, TableRowProps>((props, ref) => {
    const [arkProps, trProps] = splitProps(props, []);

    return jsx(DatePicker.TableRow, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.tr, { ...trProps, ref }),
    });
  }),
  "table-row",
);
TableRow.displayName = "CalendarTableRow";

export type TableCellRef = React.Component<"td">;
export type TableCellProps = Factory.Props<"td", DatePicker.TableCellBaseProps>;
export const TableCell = calendarStyleContext.withContext(
  React.forwardRef<TableCellRef, TableCellProps>((props, ref) => {
    const [arkProps, tdProps] = splitProps(props, [
      "value",
      "columns",
      "disabled",
      "visibleRange",
    ]);

    return jsx(DatePicker.TableCell, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.td, { ...tdProps, ref }),
    });
  }),
  "table-cell",
);
TableCell.displayName = "CalendarTableCell";

export type TableCellTriggerRef = React.Component<"button">;
export type TableCellTriggerProps = Factory.Props<
  "button",
  DatePicker.TableCellTriggerBaseProps
>;
export const TableCellTrigger = calendarStyleContext.withContext(
  React.forwardRef<TableCellTriggerRef, TableCellTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(DatePicker.TableCellTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "table-cell-trigger",
);
TableCellTrigger.displayName = "CalendarTableCellTrigger";

export type TriggerRef = React.Component<"button">;
export type TriggerProps = Factory.Props<"button", DatePicker.TriggerBaseProps>;
export const Trigger = calendarStyleContext.withContext(
  React.forwardRef<TriggerRef, TriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(DatePicker.Trigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "trigger",
);
Trigger.displayName = "CalendarTrigger";

export type ViewRef = React.Component<"div">;
export type ViewProps = Factory.Props<"div", DatePicker.ViewBaseProps>;
export const View = calendarStyleContext.withContext(
  React.forwardRef<ViewRef, ViewProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["view"]);

    return jsx(DatePicker.View, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "view",
);
View.displayName = "CalendarView";

export type ViewControlRef = React.Component<"div">;
export type ViewControlProps = Factory.Props<
  "div",
  DatePicker.ViewControlBaseProps
>;
export const ViewControl = calendarStyleContext.withContext(
  React.forwardRef<ViewControlRef, ViewControlProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, []);

    return jsx(DatePicker.ViewControl, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.div, { ...divProps, ref }),
    });
  }),
  "view-control",
);
ViewControl.displayName = "CalendarViewControl";

export type ViewTriggerRef = React.Component<"button">;
export type ViewTriggerProps = Factory.Props<
  "button",
  DatePicker.ViewTriggerBaseProps
>;
export const ViewTrigger = calendarStyleContext.withContext(
  React.forwardRef<ViewTriggerRef, ViewTriggerProps>((props, ref) => {
    const [arkProps, buttonProps] = splitProps(props, []);

    return jsx(DatePicker.ViewTrigger, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.button, { ...buttonProps, ref }),
    });
  }),
  "view-trigger",
);
ViewTrigger.displayName = "CalendarViewTrigger";

export type YearSelectRef = React.Component<"select">;
export type YearSelectProps = Factory.Props<
  "select",
  DatePicker.YearSelectBaseProps
>;
export const YearSelect = calendarStyleContext.withContext(
  React.forwardRef<YearSelectRef, YearSelectProps>((props, ref) => {
    const [arkProps, selectProps] = splitProps(props, []);

    return jsx(DatePicker.YearSelect, {
      ...arkProps,
      asChild: true,
      children: jsx(factory.select, { ...selectProps, ref }),
    });
  }),
  "year-select",
);
YearSelect.displayName = "CalendarYearSelect";

export type ContextRef = React.Component<"div">;
export type ContextProps = Factory.Props<"div", DatePicker.ContextProps>;
export const Context = calendarStyleContext.withContext(
  React.forwardRef<ContextRef, ContextProps>((props, ref) => {
    const [arkProps, divProps] = splitProps(props, ["children"]);

    return jsx(factory.div, {
      ...divProps,
      ref,
      children: jsx(DatePicker.Context, { ...arkProps }),
    });
  }),
  "context",
);
Context.displayName = "CalendarContext";
