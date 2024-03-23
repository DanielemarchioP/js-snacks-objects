// const persone = [
// { 
//     nome : 'marco',
//     cognome : 'borelli',
//     eta : 19
// },
// {
//     nome : 'alessio',
//     cognome : 'rossi',
//     eta : 31

// },
// { 
//     nome : 'federico',
//     cognome : 'randazzo',
//     eta : 4
// },
// {
//     nome : 'daniele',
//     cognome : 'passaparola',
//     eta : 29

// },
// { 
//     nome : 'gianluca',
//     cognome : 'solvetti',
//     eta : 12
// },
// {
//     nome : 'serena',
//     cognome : 'pizzi',
//     eta : 22

// }
// ]


// let patentati = []

// for( let i = 0; i < persone.length ; i++){
//     const anni = persone[i].eta

//     if(anni >= 18){
//         patentati.push(`Il cliente ${persone[i].nome} ${persone[i].cognome} puo guidare`)
//     }
//     else {
//         patentati.push(`Il cliente ${persone[i].nome} ${persone[i].cognome} NON puo guidare`)
//     }
// }

// console.log(patentati)






const animali = [
    {tipo : 'leone', famiglia : 'felidi', classe : 'mammiferi'},
    {tipo : 'cane', famiglia : 'canide', classe : 'mammiferi'},
    {tipo : 'gallina', famiglia : 'fasianidi', classe : 'uccelli'},
    {tipo : 'falco', famiglia : 'fasianidi', classe : 'uccelli'}
]

const selezione = []

for(let i = 0; i < animali.length ; i++){
    const tipologia = animali[i].classe

    if(tipologia === 'mammiferi'){
        selezione.push(animali[i])
    }
}

console.log(selezione)