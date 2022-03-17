fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (vesti) {
        var indumento = new Vestiti(vesti.id, vesti.codprod, vesti.collezione, vesti.capo, vesti.modello, vesti.quantita, vesti.colore, vesti.prezzoivaesclusa, vesti.prezzoivainclusa, vesti.disponibile, vesti.saldo);
        console.log(indumento);
        console.log("Lo scoto applicato al capo: " + vesti.capo + " è di: " + indumento.getsaldocapo() + " €");
        console.log("Importo finale sarà: " + indumento.getacquistocapo() + " €" + ", al posto dei " + vesti.prezzoivainclusa + '€ iniziali.');
    });
});
var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Vestiti.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Vestiti.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Vestiti;
}());
var vestiti1 = new Vestiti(6, 2023, "inverno", "pullover", 1034, 5, "porpora", 35.00, 42.70, "magazzino", 30);
var vestiti2 = new Vestiti(7, 8894, "autunno", "completo", 2002, 6, "nero", 65.00, 79.30, "negozio", 40);
var vestiti3 = new Vestiti(8, 5609, "estate", "pantaloncini", 4409, 4, "rosa", 15.00, 18.30, "negozio", 20);
console.log(vestiti1);
console.log("Lo scoto applicato al capo: " + vestiti1.capo + " è di: " + vestiti1.getsaldocapo() + " €");
console.log("Importo finale sarà: " + vestiti1.getacquistocapo() + " €" + ", al posto dei " + vestiti1.prezzoivainclusa + '€ iniziali.');
console.log(vestiti2);
console.log("Lo scoto applicato al capo: " + vestiti2.capo + " è di: " + vestiti2.getsaldocapo() + " €");
console.log("Importo finale sarà: " + vestiti2.getacquistocapo() + " €" + ", al posto dei " + vestiti2.prezzoivainclusa + '€ iniziali.');
console.log(vestiti3);
console.log("Lo scoto applicato al capo: " + vestiti3.capo + " è di: " + vestiti3.getsaldocapo() + " €");
console.log("Importo finale sarà: " + vestiti3.getacquistocapo() + " €" + ", al posto dei " + vestiti3.prezzoivainclusa + '€ iniziali.');
