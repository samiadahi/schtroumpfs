import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SchtroumpfService } from '../shared/schtroumpf.service';
import { Schtroumpf } from '../shared/schtroumpf.model';

declare var M: any;

@Component({
  selector: 'app-schtroumpf',
  templateUrl: './schtroumpf.component.html',
  styleUrls: ['./schtroumpf.component.css'],
  providers: [SchtroumpfService]
})
export class SchtroumpfComponent implements OnInit {

  constructor(private schtroumpfService: SchtroumpfService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshSchtroumpfList();
  }
// to reset the form
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.schtroumpfService.selectedSchtroumpf = {
      _id: "",
      login: "",
      password: "",
      age: 0,
      family: "",
      race: "",
      food:"",
    }
  }
// to save new shtroumpf
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.schtroumpfService.postSchtroumpf(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSchtroumpfList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.schtroumpfService.putSchtroumpf(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSchtroumpfList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshSchtroumpfList() {
    this.schtroumpfService.getSchtroumpfList().subscribe((res) => {
      this.schtroumpfService.schtroumpfs = res as Schtroumpf[];
    });
  }

  onEdit(emp: Schtroumpf) {
    this.schtroumpfService.selectedSchtroumpf = emp;
  }
// delete schtroumpf
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.schtroumpfService.deleteSchtroumpf(_id).subscribe((res) => {
        this.refreshSchtroumpfList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
