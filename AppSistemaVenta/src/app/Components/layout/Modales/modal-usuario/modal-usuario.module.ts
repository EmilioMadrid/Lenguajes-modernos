import { NgModule } from "@angular/core";
import { SharedModule } from "../../../../Reutilizable/shared/shared.module";
import { ModalUsuarioComponent } from "./modal-usuario.component";

@NgModule({
    declarations: [
      ModalUsuarioComponent
    ],
    imports: [
      SharedModule
    ],
    exports: [
      
    ]
  })
  export class ModalUsuarioModule { }