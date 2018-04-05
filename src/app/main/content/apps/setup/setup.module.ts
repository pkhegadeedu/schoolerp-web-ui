import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatDialogModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { StandardsComponent } from './standards/standards.component';
import { StandardAddComponent } from './standard-add/standard-add.component';
import { StandardsService } from './standards/standards.service';

const routes = [
  {
    path: 'standards',
    component: StandardsComponent,
    resolve  : {
      data: StandardsService
  }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
    CdkTableModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,

    FuseSharedModule
  ],
  declarations: [
    StandardsComponent, 
    StandardAddComponent
  ],
  providers: [
    StandardsService
  ],
  entryComponents: [StandardAddComponent]
})
export class SetupModule { }