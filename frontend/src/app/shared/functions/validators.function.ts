import { FormControl, Validators } from "@angular/forms";

export const trimWhiteSpace = (control: FormControl): Validators => {
    let value = control.value;
    if (typeof value === 'string') {
        if (/^\s/.test(value)) {
            value = value.trim();
            control.setValue(value);
        }
        if (/\s{2}/.test(value)) {
            value = value.trim() + ' ';
            control.setValue(value);
        }
    }
    return null;
};