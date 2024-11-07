import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-test';

  private firestore = inject(Firestore);
  productForm: FormGroup;
  products = signal<any>([]);

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  async onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      const productCollection = collection(this.firestore, 'products');
      await addDoc(productCollection, productData);
      this.productForm.reset();
    }
  }

  getProducts() {
    const productCollection = collection(this.firestore, 'products');
    collectionData(productCollection, { idField: 'id' }).subscribe((products: any) => {
      this.products.set(products);
    });
  }
}
