import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import fr from "date-fns/locale/fr";
import React, { useState } from "react";
import { FormValues } from "../types";

interface Props<T, C, K> {
  label: string;
  Icon?: React.ElementType;
  select?: boolean;
  autoComplete?: boolean;
  date?: boolean;
  render?: (item: T) => React.ReactNode | string | number;
  items?: T[];
  keyItem?: C;
  type?: string;
  loading?: boolean;
  toggle?: boolean;
  name: K;
  error?: FieldError | undefined;
  helperText?: string;
}

function Input<T, C extends keyof T, K extends keyof FormValues>({
  label,
  Icon,
  select,
  render,
  items,
  type,
  autoComplete,
  name,
  date,
  toggle,
  keyItem,
  loading,
  error,
  helperText,
}: Props<T, C, K>) {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();
  const [open, setOpen] = useState(false);
  console.log(errors);
  return (
    <div className="flex items-end space-x-2 ">
      <FormControl fullWidth>
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange, ...rest } }) => (
            <>
              {select ? (
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                  <Select
                    label={label}
                    value={value}
                    margin="dense"
                    onChange={onChange}
                    fullWidth>
                    {loading ? (
                      <p>Chargemnt ....</p>
                    ) : (
                      items?.map((item, index) => (
                        <MenuItem
                          key={index}
                          // @ts-ignore
                          value={item[keyItem] as readonly string[]}>
                          {render && render(item)}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>
              ) : date ? (
                <LocalizationProvider
                  adapterLocale={fr}
                  dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label={label}
                    mask="__/__/____"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => (
                      <TextField
                        variant="standard"
                        className="!text-sm"
                        size="small"
                        // margin="dense"
                        fullWidth
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              ) : autoComplete ? (
                <Autocomplete
                  multiple
                  className="my-2"
                  id="tags-outlined"
                  options={(items as readonly T[]) ?? []}
                  // @ts-ignore
                  getOptionLabel={(v) => v[keyItem] as string}
                  value={value}
                  onChange={(e, v) =>
                    // @ts-ignore
                    onChange([...v.map((item) => item[keyItem])])
                  }
                  {...rest}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={label}
                      className="!text-sm"
                      size="small"
                      placeholder="Plus de choix"
                    />
                  )}
                />
              ) : toggle ? (
                <>
                  <p>{label}</p>
                  <ToggleButtonGroup
                    color="primary"
                    value={value}
                    exclusive
                    onChange={onChange}>
                    {items?.map((item, index) => (
                      <ToggleButton
                        key={index}
                        className="!capitalize"
                        value={keyItem ? (item[keyItem] as {}) : {}}>
                        {render && render(item)}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </>
              ) : (
                <TextField
                  label={label}
                  {...rest}
                  {...register(name, { required: true })}
                  type={type ?? "text"}
                  variant="standard"
                  size="small"
                  className="!text-sm"
                  error={Boolean(error)}
                  helperText={error && helperText}
                  // margin="dense"
                  fullWidth
                />
              )}
            </>
          )}
        />
      </FormControl>
    </div>
  );
}

export default React.memo(Input);
