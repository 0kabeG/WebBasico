import { Service, signal, WritableSignal } from '@angular/core';
import { Personals } from '../domain/entities';

@Service()
export class Personalservice {
   personals:WritableSignal<Personals[]> = signal([
     { name:"Alex", rank:"Soldado", speciality: "Ametralladorista", situation: "Vacaciones"},
    { name:"Ben", rank:"Cabo", speciality: "Abastecedor", situation: "Licencia por Paternidad"}
   ]);


    


  insert(personals:Personals){
    this.personals.update(actual=>[...actual, personals]);
    console.log(this.personals());

  }

  delete(name:string){
    this.personals.set(
      this.personals().filter(t=>t.name != name)
    )
    
  }

}
