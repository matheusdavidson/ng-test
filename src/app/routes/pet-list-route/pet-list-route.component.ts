import { Component, inject, signal } from '@angular/core';
import { query, collection, collectionData, Firestore, where, deleteDoc, doc } from '@angular/fire/firestore';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-pet-list-route',
    standalone: true,
    imports: [ReactiveFormsModule, MatProgressSpinnerModule, RouterModule],
    templateUrl: './pet-list-route.component.html',
    styleUrl: './pet-list-route.component.scss',
})
export class PetListRouteComponent {
    private firestore = inject(Firestore);

    pets = signal<any>([]);
    searchControl = new FormControl('');

    loading = signal(true);

    ngOnInit(): void {
        this.getPets();

        // Listen to searchControl value changes and debounce to limit search calls
        this.searchControl.valueChanges
            .pipe(debounceTime(300), distinctUntilChanged()) // Delay for 300ms and ignore unchanged values
            .subscribe((searchTerm: any) => {
                this.getPets(searchTerm);
            });
    }

    getPets(searchTerm: string = '') {
        this.loading.set(true);

        const petCollection = collection(this.firestore, 'pets');

        // Apply array-contains filter for search functionality if searchTerm is provided
        let petQuery;
        if (searchTerm) {
            petQuery = query(petCollection, where('search', 'array-contains', searchTerm.toLowerCase()));
        } else {
            petQuery = petCollection;
        }

        // Subscribe to the collection data
        collectionData(petQuery, { idField: 'id' }).subscribe((pets: any) => {
            this.pets.set(pets);

            this.loading.set(false);
        });
    }

    async deletePet(petId: string) {
        const petDocRef = doc(this.firestore, `pets/${petId}`);
        await deleteDoc(petDocRef);
    }
}
