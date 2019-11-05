export class Calcolatrice{
  operazione: String;

  constructor (operazione: String){
    this.operazione = operazione;
  }

  getRisulatato(){
    this.operazione = eval(this.operazione.toString());
  }

  getOperazione(){
    return this.operazione;
  }

  setOperazione(operazione: String){
    this.operazione = this.operazione + "" +operazione;
  }
}