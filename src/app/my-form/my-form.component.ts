/*
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  fb = inject(FormBuilder);
  firestore = inject(Firestore);

  // ✅ Table data
  students: any[] = [];

  // ✅ Form
  studentForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', Validators.required],
    course: ['', Validators.required],
    address: ['', Validators.required]
  });

  // ✅ Page load thay tyare data load
  ngOnInit() {
    this.getStudents();
  }

  // ✅ Firebase mathi data lavvu
  async getStudents() {
    const studentRef = collection(this.firestore, 'students');
    const snapshot = await getDocs(studentRef);

    this.students = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log("Fetched Data:", this.students);
  }

  // ✅ Submit
  async onSubmit() {
    if (this.studentForm.valid) {

      console.log("Form Data:", this.studentForm.value);

      const studentRef = collection(this.firestore, 'students');
      await addDoc(studentRef, this.studentForm.value);

      alert("Data Saved Successfully");

      this.studentForm.reset();

      // 🔥 table refresh
      this.getStudents();
    }
  }
}
*/