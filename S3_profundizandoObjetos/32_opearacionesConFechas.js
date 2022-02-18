//OPERACIONES CON FECHAS

let fecha = new Date(2021, 11, 24);

console.log(fecha);

//sumar 5 dias a la fecha
//la mejor forma es crear un prototype

Date.prototype.sumardias = function(dias){
    this.setDate(this.getDate()+ dias);
    return this;
}

//para sumar años haremos lo mismo

Date.prototype.sumarYear = function(year){
    this.setFullYear(this.getFullYear()+ year);
    return this;
}

console.log(fecha.sumardias(1));
console.log(fecha.sumarYear(1));