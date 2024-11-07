import { Component, inject, Inject } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-pet-add-route',
    standalone: true,
    imports: [RouterModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
    templateUrl: './pet-add-route.component.html',
    styleUrl: './pet-add-route.component.scss',
})
export class PetAddRouteComponent {
    petForm: FormGroup;
    animalTypes = ['Dog', 'Cat'];
    dogBreeds = [
        'Labrador',
        'Golden Retriever',
        'German Shepherd',
        'Bulldog',
        'Beagle',
        'Poodle',
        'Rottweiler',
        'Yorkshire Terrier',
        'Boxer',
        'Dachshund',
    ];
    catBreeds = [
        'Siamese',
        'Persian',
        'Maine Coon',
        'Ragdoll',
        'British Shorthair',
        'Abyssinian',
        'Sphynx',
        'Scottish Fold',
        'Bengal',
        'Birman',
    ];
    selectedBreeds = this.dogBreeds;

    private firestore = inject(Firestore);

    constructor(private fb: FormBuilder, private router: Router) {
        this.petForm = this.fb.group({
            name: ['', Validators.required],
            animalType: ['', Validators.required],
            breed: ['', Validators.required],
        });

        // Update breeds when animal type changes
        this.petForm.get('animalType')?.valueChanges.subscribe((value) => {
            this.selectedBreeds = value === 'Dog' ? this.dogBreeds : this.catBreeds;
            this.petForm.get('breed')?.reset(); // Reset breed selection when animal type changes
        });
    }

    async onSubmit() {
        if (this.petForm.valid) {
            const petData = this.petForm.value;
            const petCollection = collection(this.firestore, 'pets');

            // Add a "search" field for array-contains filtering
            petData.search = [petData.name.toLowerCase(), petData.animalType.toLowerCase(), petData.breed.toLowerCase()];

            await addDoc(petCollection, petData);

            this.router.navigate(['/pets']);
        }
    }
}
