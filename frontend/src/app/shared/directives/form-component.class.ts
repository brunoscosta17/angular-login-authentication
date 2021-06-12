import { Directive } from "@angular/core";
import { Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { Output } from "@angular/core";
import { OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { OnDestroyClass } from "./on-destroy.class";

@Directive()
export abstract class FormComponentClass extends OnDestroyClass implements OnChanges {

    @Input() formData: any;
    @Input() formLoading = false;
    @Output() formSubmit: EventEmitter<any> = new EventEmitter();

    form: FormGroup;

    ngOnChanges(simpleChanges: SimpleChanges): void {
        if(simpleChanges && simpleChanges.formData && simpleChanges.formData.firstChange) {
            this.form.patchValue(simpleChanges.formData.currentValue);
        }
    }

    handleSubmit(): void {
        if (this.formLoading === false) {
            this.formLoading = true;
            this.formSubmit.emit(this.form.value);
        }
    }

}