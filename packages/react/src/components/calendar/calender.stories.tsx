import React from "react";
import { Box } from "../box";
import { Calendar } from ".";
import { Text } from "../text";
import { Stack } from "../stack";
import { Portal } from "../portal";
import { InputGroup } from "../input";
import { PhosphorIcon } from "../icon";
import type { Story } from "@ladle/react";
import { Button, IconButton } from "../button";

export default {
  title: "Components/Calendar",
  argTypes: {
    selectionMode: {
      control: { type: "select" },
      options: ["single", "multiple", "range"],
      description: "Determines how dates can be selected",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the date picker is disabled",
    },
    readOnly: {
      control: { type: "boolean" },
      description: "Whether the date picker is read-only",
    },
    closeOnSelect: {
      control: { type: "boolean" },
      description: "Whether to close the calendar when a date is selected",
    },
    numOfMonths: {
      control: { type: "number", min: 1, max: 3 },
      description: "Number of months to display",
    },
    locale: {
      control: { type: "select" },
      options: ["en-US", "fr-FR", "de-DE", "es-ES", "ja-JP"],
      description: "Locale for date formatting",
    },
  },
};

const Control = ({ input }: { input?: React.ReactNode }) => {
  return (
    <Calendar.Control
      mt="6"
      gap="6"
      display="flex"
      minWidth="28rem"
      alignItems="stretch"
    >
      <InputGroup.Root>
        <InputGroup.Addon pl="8">{input}</InputGroup.Addon>
        <InputGroup.Addon></InputGroup.Addon>
      </InputGroup.Root>
      <Calendar.Trigger asChild>
        <Button height="auto" visual="soft" tone="neutral" gap="6">
          Edit
        </Button>
      </Calendar.Trigger>
    </Calendar.Control>
  );
};

const ViewControl = () => {
  return (
    <Calendar.ViewControl>
      <Calendar.ViewTrigger>
        <PhosphorIcon weight="bold" name="SlidersHorizontal" />
        <Calendar.RangeText />
      </Calendar.ViewTrigger>
      <Stack gap="2" flex="1" justify="end">
        <Calendar.PrevTrigger asChild>
          <IconButton size="24" visual="ghost" tone="neutral">
            <PhosphorIcon weight="bold" name="CaretLeft" />
          </IconButton>
        </Calendar.PrevTrigger>
        <Calendar.NextTrigger asChild>
          <IconButton size="24" visual="ghost" tone="neutral">
            <PhosphorIcon weight="bold" name="CaretRight" />
          </IconButton>
        </Calendar.NextTrigger>
      </Stack>
    </Calendar.ViewControl>
  );
};

const WeekDays = () => {
  const calendar = Calendar.useContext();

  return (
    <Calendar.TableRow>
      {calendar.weekDays.map((weekDay, id) => (
        <Calendar.TableHeader width="3.2rem" height="3.2rem" key={id}>
          {weekDay.short}
        </Calendar.TableHeader>
      ))}
    </Calendar.TableRow>
  );
};

const Weeks = () => {
  const calendar = Calendar.useContext();

  return (
    <Calendar.TableBody>
      {calendar.weeks.map((week, id) => (
        <Calendar.TableRow key={id}>
          {week.map((day, id) => (
            <Calendar.TableCell key={id} value={day}>
              <Calendar.TableCellTrigger asChild>
                <IconButton
                  width="full"
                  visual="ghost"
                  tone="neutral"
                  rounded="full"
                  height="3.2rem"
                  color="fg"
                  _selected={{
                    color: "white",
                    backgroundColor: "blue.60",
                  }}
                  _inRange={{
                    color: "blue.70",
                    backgroundColor: "blue.10",
                    _rangeEnd: {
                      color: "white",
                      backgroundColor: "blue.60",
                    },
                    _rangeStart: {
                      color: "white",
                      backgroundColor: "blue.60",
                    },
                    _dark: {
                      color: "neutral.50",
                      backgroundColor: "neutral.90",
                      _rangeEnd: {
                        color: "white",
                        backgroundColor: "blue.60",
                      },
                      _rangeStart: {
                        color: "white",
                        backgroundColor: "blue.60",
                      },
                    },
                  }}
                >
                  {day.day}
                </IconButton>
              </Calendar.TableCellTrigger>
            </Calendar.TableCell>
          ))}
        </Calendar.TableRow>
      ))}
    </Calendar.TableBody>
  );
};

const Months = () => {
  const calendar = Calendar.useContext();

  return (
    <Calendar.TableBody>
      {calendar
        .getMonthsGrid({ columns: 4, format: "short" })
        .map((months, id) => (
          <Calendar.TableRow key={id}>
            {months.map((month, id) => (
              <Calendar.TableCell key={id} value={month.value}>
                <Calendar.TableCellTrigger asChild>
                  <Button
                    span
                    color="neutral.100"
                    visual="ghost"
                    tone="neutral"
                    _selected={{
                      color: "white",
                      backgroundColor: "blue.60",
                    }}
                  >
                    {month.label}
                  </Button>
                </Calendar.TableCellTrigger>
              </Calendar.TableCell>
            ))}
          </Calendar.TableRow>
        ))}
    </Calendar.TableBody>
  );
};

const Years = () => {
  const calendar = Calendar.useContext();

  return (
    <Calendar.TableBody>
      {calendar.getYearsGrid({ columns: 4 }).map((years, id) => (
        <Calendar.TableRow key={id}>
          {years.map((year, id) => (
            <Calendar.TableCell key={id} value={year.value}>
              <Calendar.TableCellTrigger asChild>
                <Button
                  span
                  color="neutral.100"
                  visual="ghost"
                  tone="neutral"
                  _selected={{
                    color: "white",
                    backgroundColor: "blue.60",
                  }}
                >
                  {year.label}
                </Button>
              </Calendar.TableCellTrigger>
            </Calendar.TableCell>
          ))}
        </Calendar.TableRow>
      ))}
    </Calendar.TableBody>
  );
};

/**
 * A flexible date picker component with multiple selection modes and extensive customization options.
 */
export const Default: Story<Calendar.RootProps> = (args) => (
  <Calendar.Root {...args}>
    <Calendar.Label>When is your birthday?</Calendar.Label>
    <Control input={<Calendar.Input fontSize="1.4rem" />} />
    <Portal>
      <Calendar.Positioner>
        <Calendar.Content py="4" px="4">
          <Calendar.YearSelect />
          <Calendar.MonthSelect />
          <Calendar.View view="day">
            <ViewControl />
            <Calendar.Table>
              <Calendar.TableHead>
                <WeekDays />
              </Calendar.TableHead>
              <Weeks />
            </Calendar.Table>
          </Calendar.View>
          <Calendar.View view="month">
            <ViewControl />
            <Calendar.Table>
              <Months />
            </Calendar.Table>
          </Calendar.View>
          <Calendar.View view="year">
            <ViewControl />
            <Calendar.Table>
              <Years />
            </Calendar.Table>
          </Calendar.View>
        </Calendar.Content>
      </Calendar.Positioner>
    </Portal>
  </Calendar.Root>
);

Default.args = {
  selectionMode: "single",
  disabled: false,
  readOnly: false,
  closeOnSelect: true,
  numOfMonths: 1,
  locale: "en-US",
};

Default.meta = {
  description: "Default single date picker with day, month, and year views.",
};

/**
 * Date range picker for selecting start and end dates.
 */
export const Range: Story<Calendar.RootProps> = (args) => (
  <Calendar.Root {...args} maxWidth="32rem">
    <Calendar.Label>Vacation</Calendar.Label>
    <Control
      input={
        <React.Fragment>
          <Calendar.Input index={0} fontSize="1.4rem" />
          <Calendar.Input index={1} fontSize="1.4rem" />
        </React.Fragment>
      }
    />
    <Portal>
      <Calendar.Positioner>
        <Calendar.Content py="4" px="4">
          <Calendar.YearSelect />
          <Calendar.MonthSelect />
          <Calendar.View view="day">
            <ViewControl />
            <Calendar.Table>
              <Calendar.TableHead>
                <WeekDays />
              </Calendar.TableHead>
              <Weeks />
            </Calendar.Table>
          </Calendar.View>
          <Calendar.View view="month">
            <ViewControl />
            <Calendar.Table>
              <Months />
            </Calendar.Table>
          </Calendar.View>
          <Calendar.View view="year">
            <ViewControl />
            <Calendar.Table>
              <Years />
            </Calendar.Table>
          </Calendar.View>
        </Calendar.Content>
      </Calendar.Positioner>
    </Portal>
  </Calendar.Root>
);

Range.args = {
  selectionMode: "range",
  disabled: false,
  readOnly: false,
  closeOnSelect: false,
  numOfMonths: 1,
  locale: "en-US",
};

Range.meta = {
  description:
    "Date range picker for selecting start and end dates with multiple input fields.",
};
