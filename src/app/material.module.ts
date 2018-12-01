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
    MatButtonToggleModule
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
        MatButtonToggleModule
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
        MatButtonToggleModule
    ]
})
export class MaterialModule{}