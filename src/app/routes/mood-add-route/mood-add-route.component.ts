import { Component, inject } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-mood-add-route',
    standalone: true,
    imports: [RouterModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatDatepickerModule],
    templateUrl: './mood-add-route.component.html',
    styleUrl: './mood-add-route.component.scss',
})
export class MoodAddRouteComponent {
    moodForm: FormGroup;
    moodOptions = ['Happy', 'Sad', 'Playful', 'Relaxed', 'Anxious'];
    pets: any[] = []; // Array to store pet names

    private firestore = inject(Firestore);

    constructor(private fb: FormBuilder, private router: Router) {
        this.moodForm = this.fb.group({
            date: ['', Validators.required],
            mood: ['', Validators.required],
            petName: ['', Validators.required],
        });
    }

    ngOnInit() {
        this.loadPets();
    }

    async loadPets() {
        const petCollection = collection(this.firestore, 'pets');
        collectionData(petCollection, { idField: 'id' }).subscribe((pets: any) => {
            this.pets = pets.map((pet: any) => pet.name); // Store only the pet names
        });
    }

    async onSubmit() {
        if (this.moodForm.valid) {
            const moodData = this.moodForm.value;
            moodData.search = [moodData.petName.toLowerCase(), moodData.mood.toLowerCase(), moodData.date.toString()];

            // date is in moment object, convert to Firestore timestamp
            moodData.date = new Date(moodData.date).toISOString();

            const moodCollection = collection(this.firestore, 'moods');
            await addDoc(moodCollection, moodData);

            this.router.navigate(['/mood']);
        }
    }
}
