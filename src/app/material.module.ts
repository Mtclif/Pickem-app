import { NgModule } from "@angular/core";
import { 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSlideToggleModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatSlideToggleModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatTabsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule{}