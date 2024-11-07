import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { query, collection, Firestore, where, collectionData } from '@angular/fire/firestore';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
    selector: 'app-mood-list-route',
    standalone: true,
    imports: [ReactiveFormsModule, MatProgressSpinnerModule, RouterModule, DatePipe],
    templateUrl: './mood-list-route.component.html',
    styleUrl: './mood-list-route.component.scss',
})
export class MoodListRouteComponent {
    private firestore = inject(Firestore);

    moods = signal<any>([]);
    searchControl = new FormControl('');
    loading = signal(true);

    ngOnInit(): void {
        this.getMoods();

        // Listen to searchControl value changes and debounce to limit search calls
        this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((searchTerm: any) => {
            this.getMoods(searchTerm);
        });
    }

    getMoods(searchTerm: string = '') {
        this.loading.set(true);
        const moodCollection = collection(this.firestore, 'moods');

        let moodQuery;
        if (searchTerm) {
            moodQuery = query(moodCollection, where('search', 'array-contains', searchTerm.toLowerCase()));
        } else {
            moodQuery = moodCollection;
        }

        collectionData(moodQuery, { idField: 'id' }).subscribe((moods: any) => {
            this.moods.set(moods);
            this.loading.set(false);
        });
    }
}
